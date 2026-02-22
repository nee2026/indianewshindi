"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { fetchHomepageData } from "../services/api";
import { Top20Post } from "@/types";
import { getAbsoluteImageUrl, formatDate } from "@/lib/utils";
import JobsSidebar from "./JobsSidebar";

export default function HeroSection() {
    const [isStoriesExpanded, setIsStoriesExpanded] = useState(false);
    const [top20, setTop20] = useState<Top20Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const homepageData = await fetchHomepageData();

                if (homepageData && homepageData.top_20) {
                    setTop20(homepageData.top_20);
                }
            } catch (error) {
                console.error("Error loading hero data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, []);

    // Category grouping logic removed as requested

    return (
        <section className="font-display mb-12">
            <div className="grid grid-cols-12 gap-6">

                {/* Left Column: Jobs */}
                <div className="col-span-12 lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6">
                    <JobsSidebar />
                </div>

                {/* Center Column: Featured Story */}
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                    {isLoading && top20.length === 0 ? (
                        <div className="relative h-[20rem] sm:h-[34rem] w-full rounded-2xl overflow-hidden shadow-medium bg-gray-200 dark:bg-gray-800 animate-pulse">
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 w-full space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                                    <div className="w-24 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                </div>
                                <div className="w-full h-16 bg-gray-300 dark:bg-gray-700 rounded hidden sm:block"></div>
                            </div>
                        </div>
                    ) : top20.length > 0 ? (
                        <Link href={`/post/${top20[0].id}/${top20[0].slug}`} className="block relative h-[20rem] sm:h-[34rem] w-full rounded-2xl overflow-hidden group shadow-medium cursor-pointer">
                            <div className="relative w-full h-full">
                                {top20[0].feature_image_url || top20[0].image ? (
                                    <Image
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt={top20[0].title}
                                        src={getAbsoluteImageUrl(top20[0].feature_image_url || top20[0].image)}
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                                        <span className="text-4xl">No Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

                                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                                    <div className="flex items-center gap-3 mb-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{top20[0].category?.name}</span>
                                        <span className="text-white/80 text-xs flex items-center gap-1"><Clock size={12} /> {formatDate(top20[0].date)}</span>
                                    </div>
                                    <h1 className="hindi-headline text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-3 group-hover:underline decoration-primary decoration-4 underline-offset-8 transition-all">
                                        {top20[0].title}
                                    </h1>
                                    {top20[0].excerpt && (
                                        <p className="text-white/80 text-sm line-clamp-2 max-w-xl mb-4 hidden sm:block">
                                            {top20[0].excerpt}
                                        </p>
                                    )}
                                </div>

                                {/* Corner Action */}
                                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </Link>
                    ) : null}
                </div>

                {/* Right Column: Top Stories */}
                <div className="col-span-12 lg:col-span-3 order-3 lg:order-3 flex flex-col gap-6">
                    <div className="bg-white dark:bg-neutral-dark rounded-2xl p-5 border border-black/5 dark:border-white/5 shadow-soft h-auto lg:h-[34rem] flex flex-col">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Top 20 Stories
                        </h4>
                        <div className="flex-1 overflow-y-auto pr-1 space-y-4 scrollbar-hide">
                            {isLoading && top20.length === 0 ? (
                                // Skeleton Loader
                                [...Array(6)].map((_, i) => (
                                    <div key={i} className="flex gap-3 pb-3 border-b border-dashed border-neutral-200 dark:border-neutral-700 last:border-0 animate-pulse">
                                        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-3 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mt-1"></div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                top20.map((story, idx) => (
                                    <Link
                                        href={`/post/${story.id}/${story.slug}`}
                                        key={story.id}
                                        className={`group flex gap-3 cursor-pointer pb-3 border-b border-dashed border-neutral-200 dark:border-neutral-700 last:border-0 ${idx >= 3 && !isStoriesExpanded ? 'hidden lg:flex' : 'flex'}`}
                                    >
                                        <span className="text-2xl font-black text-neutral-200 dark:text-neutral-700 group-hover:text-primary/20 transition-colors">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-primary uppercase mb-0.5">{story.category?.name}</span>
                                            <h3 className="text-sm font-bold font-serif text-neutral-dark dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                                                {story.title}
                                            </h3>
                                            <span className="text-[10px] text-neutral-400 mt-1">{formatDate(story.date)}</span>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>

                        {/* Mobile Toggle Button for Stories */}
                        <button
                            onClick={() => setIsStoriesExpanded(!isStoriesExpanded)}
                            className="w-full mt-4 py-2 text-xs font-bold uppercase text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors lg:hidden flex items-center justify-center gap-2"
                        >
                            {isStoriesExpanded ? (
                                <>Show Less <ChevronUp size={14} /></>
                            ) : (
                                <>View All Stories <ChevronDown size={14} /></>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
