import { Metadata } from "next"
import { notFound } from "next/navigation"

import ArticleView from "./ArticleView"

import {
  fetchPostDetails,
  fetchAuthorDetails,
  fetchHomepageData
} from "@/services/api"

import { getAbsoluteImageUrl } from "@/lib/utils"

interface PageProps {
  params: Promise<{
    postId: string
    slug: string
  }>
}

/* ================= METADATA ================= */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const { postId, slug } = await params
  const data = await fetchPostDetails(postId, slug)

  if (!data) return { title: "Article Not Found" }

  const post = data.post
  const image = getAbsoluteImageUrl(post.feature_image_url)
  const url = `https://indianewshindi.com/post/${postId}/${slug}`

  return {
    title: post.title,
    description: post.intro,
    alternates: { canonical: url },
    robots: { index: true, follow: true },

    openGraph: {
      title: post.title,
      description: post.intro,
      url,
      siteName: "India News Hindi",
      type: "article",
      publishedTime: post.date,
      authors: [post.author_name],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.intro,
      images: [image]
    }
  }
}

/* ================= PAGE ================= */
export default async function Page({ params }: PageProps) {

  const { postId, slug } = await params

  const postDetail = await fetchPostDetails(postId, slug)
  if (!postDetail) notFound()

  const post = postDetail.post
  const image = getAbsoluteImageUrl(post.feature_image_url)
  const articleUrl = `https://indianewshindi.com/post/${postId}/${slug}`

  const authorDetails = post.author_slug
    ? await fetchAuthorDetails(post.author_slug)
    : null

  const homepageData = await fetchHomepageData()
  const quickReads = homepageData?.top_20?.slice(0, 3) || []

  /* ===== GOOGLE NEWS STRUCTURED DATA ===== */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",

    headline: post.title,
    description: post.intro,
    url: articleUrl,
    inLanguage: "hi-IN",
    isAccessibleForFree: true,
    articleSection: post.category?.name || "News",

    image: [
      {
        "@type": "ImageObject",
        url: image,
        width: 1200,
        height: 630
      }
    ],

    datePublished: post.date,
    dateModified: post.updated_at || post.date,

    author: {
      "@type": "Person",
      name: post.author_name || "India News Hindi"
    },

    publisher: {
      "@type": "Organization",
      name: "India News Hindi",
      logo: {
        "@type": "ImageObject",
        url: "https://indianewshindi.com/icon2.png",
        width: 512,
        height: 512
      }
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleView
        postDetail={postDetail}
        authorDetails={authorDetails}
        quickReads={quickReads}
      />
    </>
  )
}