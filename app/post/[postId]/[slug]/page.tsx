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

    openGraph: {
      title: post.title,
      description: post.intro,
      url,
      siteName: "India News Hindi",
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }]
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

  const authorDetails = postDetail.post.author_slug
    ? await fetchAuthorDetails(postDetail.post.author_slug)
    : null

  const homepageData = await fetchHomepageData()
  const quickReads = homepageData?.top_20?.slice(0, 3) || []

  return (
    <ArticleView
      postDetail={postDetail}
      authorDetails={authorDetails}
      quickReads={quickReads}
    />
  )
}