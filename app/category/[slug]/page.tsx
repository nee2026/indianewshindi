"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { fetchCategoryPosts } from "@/services/api";
import { getAbsoluteImageUrl, formatDate } from "@/lib/utils";
import { Post } from "@/types";
import Loading from "./loading";

interface CategoryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = React.use(params);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const data = await fetchCategoryPosts(slug);
            setPosts(data);
            setLoading(false);
        }
        loadData();
    }, [slug]);

    if (loading) {
        return <Loading />
    }

    if (posts.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                <h1 className="text-3xl font-bold mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
                <p className="text-neutral-500">No posts found in this category.</p>
                <Link href="/" className="text-primary hover:underline mt-4 inline-block">Go Home</Link>
            </div>
        );
    }

    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);
    const categoryName = featuredPost.category?.name || slug.replace(/-/g, ' ');

    return (
        <main className="max-w-7xl mx-auto px-4 py-8 font-display">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-neutral-500 mb-8 capitalize">
                <Link href="/" className="hover:text-primary">Home</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-neutral-900 dark:text-white font-medium">{categoryName}</span>
            </div>

            {/* Category Title */}
            <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
                <h1 className="text-4xl md:text-5xl font-black text-neutral-dark dark:text-white mb-4 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent capitalize">
                    {categoryName}
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">Latest news and updates from {categoryName}</p>
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <section className="mb-16">
                    <Link href={`/post/${featuredPost.id}/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-neutral-dark rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-black/5 dark:border-white/5">
                        <div className="lg:col-span-7 relative aspect-video lg:aspect-auto lg:h-[28rem] overflow-hidden">
                            <Image
                                src={getAbsoluteImageUrl(featuredPost.feature_image_url)}
                                alt={featuredPost.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Featured
                            </div>
                        </div>
                        <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-4 font-medium uppercase tracking-widest">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(featuredPost.date)}</span>
                            </div>
                            <h2 className="hindi-headline text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-300 mb-6 line-clamp-3 leading-relaxed text-lg">
                                {featuredPost.intro || featuredPost.custom_seo_description || "Click to read more about this story..."}
                            </p>
                            <span className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                                Read Full Story <ChevronRight size={14} className="ml-1" />
                            </span>
                        </div>
                    </Link>
                </section>
            )}

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                    <Link href={`/post/${post.id}/${post.slug}`} key={post.id} className="group flex flex-col bg-white dark:bg-neutral-dark rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-black/5 dark:border-white/5 h-full">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={getAbsoluteImageUrl(post.feature_image_url)}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-[10px] text-neutral-500 dark:text-neutral-400 mb-3 font-bold uppercase tracking-wider">
                                <span className="flex items-center gap-1"><Clock size={12} /> {formatDate(post.date)}</span>
                            </div>
                            <h3 className="hindi-headline text-xl font-bold text-neutral-dark dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 mb-4 flex-grow selection:bg-primary/20">
                                {post.intro || post.custom_seo_description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
