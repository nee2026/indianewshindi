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
   SEO + LINK PREVIEW METADATA (DEBUG VERSION)
====================================================== */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const { postId, slug } = await params;

  console.log("------ METADATA START ------");
  console.log("PARAMS:", { postId, slug });

  try {
    console.log("Fetching post details for metadata...");

    const data = await fetchPostDetails(postId, slug);

    console.log("API RESPONSE:", data);

    if (!data) {
      console.log("❌ NO DATA RETURNED FROM API");
      return { title: "Article Not Found" };
    }

    const post = data.post;

    if (!post) {
      console.log("❌ data.post missing");
      return { title: "Invalid Article Data" };
    }

    console.log("POST TITLE:", post.title);
    console.log("FEATURE IMAGE RAW:", post.feature_image_url);

    const image = getAbsoluteImageUrl(post.feature_image_url);

    console.log("FEATURE IMAGE ABSOLUTE:", image);

    const metadata = {
      title: post.title,
      description: post.intro,

      openGraph: {
        title: post.title,
        description: post.intro,
        url: `https://indianewshindi.vercel.app/post/${postId}/${slug}`,
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

    console.log("GENERATED METADATA:", metadata);
    console.log("------ METADATA END ------");

    return metadata;

  } catch (error) {
    console.error("❌ METADATA FETCH ERROR:", error);
    console.log("------ METADATA FAILED ------");
    return { title: "India News Hindi" };
  }
}

/* ======================================================
   PAGE RENDER (DEBUG)
====================================================== */
export default async function Page({ params }: PageProps) {

  const { postId, slug } = await params;

  console.log("------ PAGE RENDER START ------");
  console.log("PAGE PARAMS:", { postId, slug });

  const data = await fetchPostDetails(postId, slug);

  console.log("PAGE DATA:", data);

  if (!data) {
    console.log("❌ PAGE DATA NOT FOUND → triggering 404");
    notFound();
  }

  console.log("Rendering ArticleClient...");
  console.log("------ PAGE RENDER END ------");

  return (
    <ArticleClient
      postId={postId}
      slug={slug}
    />
  );
}