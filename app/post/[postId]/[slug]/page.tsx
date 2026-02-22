"use client";

import React, { useEffect, useState } from "react";
import TableOfContents from "@/components/news/TableOfContents";
import MobileTableOfContents from "@/components/news/MobileTableOfContents";
import ArticleHeader from "@/components/news/ArticleHeader";
import ArticleBody from "@/components/news/ArticleBody";
import TrendingSidebar from "@/components/news/TrendingSidebar";
import RelatedPosts from "@/components/news/RelatedPosts";
import TagList from "@/components/news/TagList";
import ArticleBottomSection from "@/components/news/ArticleBottomSection";
import { fetchPostDetails, fetchAuthorDetails, fetchHomepageData } from "@/services/api";
import { getAbsoluteImageUrl } from "@/lib/utils";
import { PostDetail, AuthorResponse, Top20Post } from "@/types";
import Loading from "./loading";

interface PageProps {
    params: Promise<{
        postId: string;
        slug: string;
    }>;
}

export default function NewsArticlePage({ params }: PageProps) {
    const { postId, slug } = React.use(params);
    const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
    const [authorDetails, setAuthorDetails] = useState<AuthorResponse | null>(null);
    const [quickReads, setQuickReads] = useState<Top20Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const details = await fetchPostDetails(postId, slug);
                if (details) {
                    setPostDetail(details);
                    if (details.post.author_slug) {
                        const author = await fetchAuthorDetails(details.post.author_slug);
                        setAuthorDetails(author);
                    }
                }
                const homepageData = await fetchHomepageData();
                if (homepageData && homepageData.top_20) {
                    setQuickReads(homepageData.top_20.slice(0, 3));
                }
            } catch (e) {
                console.error("Error loading post data", e);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [postId, slug]);

    if (loading) {
        return <Loading />
    }

    if (!postDetail) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                <p>The post you are looking for does not exist or has been removed.</p>
            </div>
        );
    }

    const { post, trending_posts, related_posts } = postDetail;

    // Process HTML to extract headings and inject IDs
    const headings: { id: string; text: string }[] = [];
    let processedBody = post.body || "";

    processedBody = processedBody.replace(/<h([2-3])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, text) => {
        const plainText = text.replace(/<[^>]*>/g, "");
        const id = plainText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || `heading-${headings.length}`;
        headings.push({ id, text: plainText });
        return `<h${level} id="${id}"${attrs}>${text}</h${level}>`;
    });

    processedBody = processedBody.replace(/src="(\/media\/[^"]+)"/g, (match, path) => {
        return `src="https://indianewshindi.com${path}"`;
    });

    const featureImage = getAbsoluteImageUrl(post.feature_image_url);

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column + Center Column Wrapper */}
                    <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {/* Left Column - Table of Contents (Desktop Sticky) */}
                        <aside className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
                                <TableOfContents headings={headings} />
                            </div>
                        </aside>

                        {/* Center Column - Main Article */}
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

                            {/* Mobile TOC */}
                            <MobileTableOfContents headings={headings} />

                            <ArticleBody htmlContent={processedBody} />

                            <TagList tags={post.tags?.length ? post.tags : (post.custom_seo_keywords || [])} />

                            <RelatedPosts posts={related_posts} />
                        </main>
                    </div>

                    {/* Right Column - Trending Posts (Sticky) */}
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
    );
}
