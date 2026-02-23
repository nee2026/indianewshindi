import { Metadata } from "next"
import { notFound } from "next/navigation"

import CategoryView from "./CategoryView"
import { fetchCategoryPosts } from "@/services/api"
import { getAbsoluteImageUrl } from "@/lib/utils"
import { Post } from "@/types"

interface PageProps {
  params: Promise<{ slug: string }>
}

/* =====================================================
   METADATA (Dynamic Category SEO)
===================================================== */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const { slug } = await params
  const posts: Post[] = await fetchCategoryPosts(slug)

  const categoryName =
    posts?.[0]?.category?.name || slug.replace(/-/g, " ")

  const url = `https://indianewshindi.com/category/${slug}`

  const image =
    posts?.[0]?.feature_image_url
      ? getAbsoluteImageUrl(posts[0].feature_image_url)
      : "https://indianewshindi.com/icon2.png"

  return {
    title: `${categoryName} News | India News Hindi`,
    description: `Latest news and updates from ${categoryName}`,
    alternates: { canonical: url },
    robots: { index: true, follow: true },

    openGraph: {
      title: `${categoryName} News | India News Hindi`,
      description: `Latest news and updates from ${categoryName}`,
      url,
      siteName: "India News Hindi",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: categoryName
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title: `${categoryName} News | India News Hindi`,
      description: `Latest news and updates from ${categoryName}`,
      images: [image]
    }
  }
}

/* =====================================================
   PAGE (SSR + CATEGORY STRUCTURED DATA)
===================================================== */
export default async function Page({ params }: PageProps) {

  const { slug } = await params
  const posts: Post[] = await fetchCategoryPosts(slug)

  if (!posts || posts.length === 0) notFound()

  const categoryName =
    posts[0]?.category?.name || slug.replace(/-/g, " ")

  const categoryUrl = `https://indianewshindi.com/category/${slug}`

  /* =====================================================
     ITEM LIST SCHEMA (Google LOVES this for category pages)
  ===================================================== */
  const itemList = posts.slice(0, 20).map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://indianewshindi.com/post/${post.id}/${post.slug}`,
    name: post.title
  }))

  /* =====================================================
     COLLECTION PAGE + BREADCRUMB SCHEMA
  ===================================================== */
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",
    name: categoryName,
    url: categoryUrl,
    inLanguage: "hi-IN",

    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://indianewshindi.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: categoryName,
          item: categoryUrl
        }
      ]
    },

    mainEntity: {
      "@type": "ItemList",
      itemListElement: itemList
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CategoryView posts={posts} slug={slug} />
    </>
  )
}