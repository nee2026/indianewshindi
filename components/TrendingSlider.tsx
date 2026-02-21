'use client'

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, TrendingUp, Calendar } from "lucide-react";
import { fetchHomepageData } from "../services/api";
import { TrendingPost } from "../types";

import { getAbsoluteImageUrl, formatDate } from "@/lib/utils";

export default function TrendingSlider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [trendingPosts, setTrendingPosts] = useState<TrendingPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchHomepageData();
                if (data.trending_posts) {
                    setTrendingPosts(data.trending_posts);
                }
            } catch (error) {
                console.error("Error loading trending data:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!isLoading && trendingPosts.length === 0) return null;

    return (
        <section className="mb-16 font-display">
            <div className="flex justify-between items-end mb-8 px-2">
                <div>
                    <h2 className="text-3xl font-black text-neutral-dark dark:text-white flex items-center gap-3">
                        <TrendingUp className="text-primary" size={28} />
                        Trending Now
                    </h2>
                    <p className="text-neutral-dark/60 dark:text-white/60 text-sm mt-1 ml-1">Most read stories across India</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-neutral-dark hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-neutral-dark hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pt-2 px-2 scrollbar-hide -mx-2">
                {isLoading ? (
                    // Skeleton Loader
                    [...Array(5)].map((_, i) => (
                        <div key={i} className="min-w-[220px] md:min-w-[260px] bg-white dark:bg-neutral-dark rounded-xl shadow-sm border border-black/5 dark:border-white/5 flex flex-col animate-pulse">
                            <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-t-xl relative">
                                <div className="absolute top-2 right-2 w-16 h-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                                <div className="space-y-2">
                                    <div className="flex gap-2">
                                        <div className="w-16 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        <div className="w-12 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </div>
                                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                </div>
                                <div className="w-8 h-0.5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    trendingPosts.map((item) => (
                        <Link href={`/post/${item.id}/${item.slug}`} key={item.id} className="min-w-[220px] md:min-w-[260px] bg-white dark:bg-neutral-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-black/5 dark:border-white/5 flex flex-col">
                            <div className="w-full h-40 relative overflow-hidden rounded-t-xl bg-gray-200 dark:bg-gray-800">
                                {/* Placeholder image since not in schema, or render a pattern */}
                                <Image
                                    src={getAbsoluteImageUrl(item.feature_image_url || item.image)}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white border border-white/10 z-10">
                                    {item.category?.name || "News"}
                                </div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-[10px] text-neutral-400">
                                        <span className="flex items-center gap-1"><Calendar size={10} /> {formatDate(item.date)}</span>
                                        {/* <span className="flex items-center gap-1"><Eye size={10} /> {item.views}</span> */}
                                    </div>
                                    <h4 className="hindi-headline font-bold text-base mb-3 text-neutral-dark dark:text-white group-hover:text-primary transition-colors line-clamp-3">
                                        {item.title}
                                    </h4>
                                </div>
                                <div className="h-0.5 w-8 bg-neutral-200 dark:bg-neutral-700 rounded-full group-hover:w-full group-hover:bg-primary/50 transition-all duration-300"></div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}
