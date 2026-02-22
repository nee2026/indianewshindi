import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleClient from "./ArticleClient";

import { fetchPostDetails } from "@/services/api";
import { getAbsoluteImageUrl } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    postId: string;
    slug: string;
  }>;
}

/* ======================================================
   SEO + LINK PREVIEW METADATA
====================================================== */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  // ✅ unwrap params
  const { postId, slug } = await params;

  try {
    const data = await fetchPostDetails(postId, slug);

    if (!data) {
      return { title: "Article Not Found" };
    }

    const post = data.post;
    const image = getAbsoluteImageUrl(post.feature_image_url);

    return {
      title: post.title,
      description: post.intro,

      openGraph: {
        title: post.title,
        description: post.intro,
        url: `https://indianewshindi.com/news/${postId}/${slug}`,
        siteName: "India News Hindi",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.intro,
        images: [image],
      },
    };

  } catch (error) {
    console.error("Metadata error:", error);
    return { title: "India News Hindi" };
  }
}

/* ======================================================
   PAGE
====================================================== */
export default async function Page({ params }: PageProps) {

  // ✅ unwrap params
  const { postId, slug } = await params;

  const data = await fetchPostDetails(postId, slug);

  if (!data) {
    notFound();
  }

  return (
    <ArticleClient
      postId={postId}
      slug={slug}
    />
  );
}