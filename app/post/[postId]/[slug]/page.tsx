import { notFound } from "next/navigation";
import TableOfContents from "@/components/news/TableOfContents";
import MobileTableOfContents from "@/components/news/MobileTableOfContents";
import ArticleHeader from "@/components/news/ArticleHeader";
import ArticleBody from "@/components/news/ArticleBody";
import TrendingSidebar from "@/components/news/TrendingSidebar";
import RelatedPosts from "@/components/news/RelatedPosts";
import TagList from "@/components/news/TagList";
import ArticleBottomSection from "@/components/news/ArticleBottomSection";
import { Metadata } from "next";
import { fetchPostDetails, fetchAuthorDetails, fetchHomepageData } from "@/services/api";
import { getAbsoluteImageUrl } from "@/lib/utils";

interface PageProps {
    params: Promise<{
        postId: string;
        slug: string;
    }>;
}

export const revalidate = 60; // optionally revalidate every 60s

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { postId, slug } = await params;

    const postDetail = await fetchPostDetails(postId, slug);

    if (!postDetail) {
        return {
            title: "Article Not Found",
        }
    }

    const { post } = postDetail;
    const ogImage = getAbsoluteImageUrl(post.feature_image_url);
    const postUrl = `https://indianewshindi.com/post/${postId}/${slug}`;

    return {
        title: `${post.title} | India News Hindi`,
        description: post.custom_seo_description || post.intro || post.title,
        keywords: post.custom_seo_keywords?.length ? post.custom_seo_keywords : post.tags,
        authors: [{ name: post.author_name || "India News Hindi", url: `https://indianewshindi.com/author/${post.author_slug}` }],
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: post.title,
            description: post.custom_seo_description || post.intro || post.title,
            url: postUrl,
            type: "article",
            publishedTime: post.date,
            modifiedTime: post.date, // Update if API provides modified date
            authors: [post.author_name || "India News Hindi"],
            section: post.category?.name || "News",
            tags: post.custom_seo_keywords?.length ? post.custom_seo_keywords : post.tags,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.custom_seo_description || post.intro || post.title,
            images: [ogImage],
        }
    };
}

export default async function NewsArticlePage({ params }: PageProps) {
    const { postId, slug } = await params;

    const postDetail = await fetchPostDetails(postId, slug);

    if (!postDetail) {
        notFound();
    }

    const { post, trending_posts, related_posts } = postDetail;

    let authorDetails = null;
    if (post.author_slug) {
        authorDetails = await fetchAuthorDetails(post.author_slug);
    }

    const homepageData = await fetchHomepageData();
    const quickReads = homepageData.top_20.slice(0, 3);

    // Process HTML to extract headings and inject IDs
    const headings: { id: string; text: string }[] = [];
    let processedBody = post.body;

    // Regex to match h2 and h3 tags
    // We replace them with tags having an id
    processedBody = processedBody.replace(/<h([2-3])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, text) => {
        // Strip tags from text for TOC
        const plainText = text.replace(/<[^>]*>/g, "");
        const id = plainText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || `heading-${headings.length}`;

        headings.push({ id, text: plainText });

        // Check if ID already exists in attrs to avoid double ID? 
        // For simplicity, we just add the ID. If it conflicts, browser usually takes first, but we assume raw HTML doesn't have IDs we care about.
        // Actually, let's keep existing attributes and just add id.
        return `<h${level} id="${id}"${attrs}>${text}</h${level}>`;
    });

    // Replace relative image paths in body
    // This matches src="/media..." or src="media..." and prepends the domain
    processedBody = processedBody.replace(/src="(\/media\/[^"]+)"/g, (match, path) => {
        return `src="https://indianewshindi.com${path}"`;
    });

    const featureImage = getAbsoluteImageUrl(post.feature_image_url);

    // Generate NewsArticle JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": post.title,
        "image": [featureImage],
        "datePublished": post.date,
        "dateModified": post.date, // Update if API provides modified date
        "author": [{
            "@type": "Person",
            "name": post.author_name || "India News Hindi",
            "url": `https://indianewshindi.com/author/${post.author_slug}`
        }],
        "publisher": {
            "@type": "Organization",
            "name": "India News Hindi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://indianewshindi.com/icon2.png"
            }
        },
        "description": post.custom_seo_description || post.intro || post.title,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://indianewshindi.com/post/${postId}/${slug}`
        },
        "articleSection": post.category?.name || "News",
        "keywords": (post.custom_seo_keywords?.length ? post.custom_seo_keywords : post.tags || []).join(", ")
    };


    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column + Center Column Wrapper (To control gap between TOC and Article) */}
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
