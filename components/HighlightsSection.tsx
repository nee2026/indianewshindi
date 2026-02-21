"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap, Calendar } from "lucide-react";
import Image from "next/image";
import { fetchHomepageData } from "../services/api";
import { HighlightPost } from "../types";
import { getAbsoluteImageUrl, formatDate } from "@/lib/utils";

export default function HighlightsSection() {
    const [highlights, setHighlights] = useState<HighlightPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchHomepageData();
                if (data.today_highlight) {
                    setHighlights(data.today_highlight);
                }
            } catch (error) {
                console.error("Error loading highlights data:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    if (!isLoading && highlights.length === 0) return null;

    return (
        <section className="py-16 border-t border-black/5 dark:border-white/5 font-display">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-black text-neutral-dark dark:text-white flex items-center gap-2">
                        <Zap className="fill-primary text-primary" /> Today&apos;s Highlights
                    </h2>
                    <p className="text-neutral-dark/60 dark:text-white/60 mt-2">Top stories curated for you</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {isLoading ? (
                    // Skeleton Loader
                    [...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col h-full animate-pulse">
                            <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 dark:bg-gray-800 shadow-soft">
                                <div className="absolute top-3 left-3 w-16 h-5 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                            </div>

                            <div className="flex-grow space-y-3">
                                <div className="h-6 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
                                <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>
                                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    highlights.map((item) => (
                        <Link href={`/post/${item.id}/${item.slug}`} key={item.id} className="group cursor-pointer flex flex-col h-full">
                            <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[4/3] shadow-soft md:group-hover:shadow-medium transition-shadow duration-300 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                                {/* Placeholder for missing image */}
                                <Image
                                    src={getAbsoluteImageUrl(item.feature_image_url)}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <span className="absolute top-3 left-3 bg-white/90 pointer-events-none text-neutral-dark text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest shadow-sm z-10">
                                    {item.category.name}
                                </span>
                            </div>

                            <div className="flex-grow">
                                <h3 className="hindi-headline font-bold text-xl text-neutral-dark dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-3">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-neutral-dark/50 dark:text-white/50 font-medium">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(item.date)}</span>
                                {/* <span className="flex items-center gap-1"><TrendingUp size={12} /> {item.views} Views</span> */}
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}
