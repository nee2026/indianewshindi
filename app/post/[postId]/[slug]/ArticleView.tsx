"use client";

import TableOfContents from "@/components/news/TableOfContents";
import MobileTableOfContents from "@/components/news/MobileTableOfContents";
import ArticleHeader from "@/components/news/ArticleHeader";
import ArticleBody from "@/components/news/ArticleBody";
import TrendingSidebar from "@/components/news/TrendingSidebar";
import RelatedPosts from "@/components/news/RelatedPosts";
import TagList from "@/components/news/TagList";
import ArticleBottomSection from "@/components/news/ArticleBottomSection";

import { getAbsoluteImageUrl } from "@/lib/utils";
import { PostDetail, AuthorResponse, Top20Post } from "@/types";

interface Props {
  postDetail: PostDetail
  authorDetails: AuthorResponse | null
  quickReads: Top20Post[]
}

export default function ArticleView({
  postDetail,
  authorDetails,
  quickReads
}: Props) {

  const { post, trending_posts, related_posts } = postDetail

  /* ===== SAME HEADING PROCESS ===== */
  const headings: { id: string; text: string }[] = []
  let processedBody = post.body || ""

  processedBody = processedBody.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h\1>/gi,
    (match, level, attrs, text) => {
      const plainText = text.replace(/<[^>]*>/g, "")
      const id =
        plainText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") ||
        `heading-${headings.length}`

      headings.push({ id, text: plainText })
      return `<h${level} id="${id}"${attrs}>${text}</h${level}>`
    }
  )

  /* ===== SAME MEDIA FIX ===== */
  processedBody = processedBody.replace(
    /src="(\/media\/[^"]+)"/g,
    (match, path) => `src="https://indianewshindi.com${path}"`
  )

  const featureImage = getAbsoluteImageUrl(post.feature_image_url)

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left + Center Wrapper */}
          <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-4 gap-4">

            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
                <TableOfContents headings={headings} />
              </div>
            </aside>

            <main className="lg:col-span-3">
              <ArticleHeader
                category={post.category?.name || "News"}
                title={post.title}
                author={post.author_name || "India News Hindi"}
                authorDetails={authorDetails}
                publishedAt={post.date}
                location={post.location || "New Delhi"}
                featuredImage={featureImage}
                caption={post.intro}
              />

              <MobileTableOfContents headings={headings} />
              <ArticleBody htmlContent={processedBody} />

              <TagList
                tags={
                  post.tags?.length
                    ? post.tags
                    : post.custom_seo_keywords || []
                }
              />

              <RelatedPosts posts={related_posts} />
            </main>
          </div>

          <aside className="lg:col-span-3">
            <TrendingSidebar posts={trending_posts} />
          </aside>
        </div>

        <ArticleBottomSection
          author={post.author_name || "India News Hindi"}
          authorDetails={authorDetails}
          quickReads={quickReads}
        />
      </div>
    </div>
  )
}