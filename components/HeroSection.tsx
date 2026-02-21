"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight, Briefcase, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { fetchHomepageData } from "../services/api";
import { jobs } from "../data/jobsData";
import { Top20Post } from "@/types";

import { getAbsoluteImageUrl, formatDate } from "@/lib/utils";

export default function HeroSection() {
    const [isJobsExpanded, setIsJobsExpanded] = useState(false);
    const [isStoriesExpanded, setIsStoriesExpanded] = useState(false);
    const [top20, setTop20] = useState<Top20Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchHomepageData();
                if (data.top_20) {
                    setTop20(data.top_20);
                }
            } catch (error) {
                console.error("Error loading ticker data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, []);

    return (
        <section className="font-display mb-12">
            <div className="grid grid-cols-12 gap-6">

                {/* Left Column: Jobs (Government & Private) */}
                <div className="col-span-12 lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6">
                    <div className="bg-white dark:bg-neutral-dark rounded-2xl p-5 border border-black/5 dark:border-white/5 shadow-soft h-auto lg:h-[34rem] flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                                <Briefcase size={16} />
                                New Jobs
                            </h4>
                            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">10 New</span>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-hide">
                            {jobs.map((job, idx) => (
                                <div
                                    key={job.id}
                                    className={`group p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-transparent hover:border-primary/20 hover:shadow-sm transition-all cursor-pointer ${idx >= 3 && !isJobsExpanded ? 'hidden lg:block' : 'block'}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${job.type === 'Government' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {job.type}
                                        </span>
                                        <span className="text-[10px] text-neutral-500">{job.deadline}</span>
                                    </div>
                                    <h5 className="font-bold text-sm text-neutral-dark dark:text-white leading-relaxed mb-1 group-hover:text-primary transition-colors">
                                        {job.title}
                                    </h5>
                                    <p className="text-xs text-neutral-500 mb-2">{job.organization}</p>
                                    <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                                        <MapPin size={10} />
                                        {job.location}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsJobsExpanded(!isJobsExpanded)}
                            className="w-full mt-4 py-2 text-xs font-bold uppercase text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors lg:hidden flex items-center justify-center gap-2"
                        >
                            {isJobsExpanded ? (
                                <>Show Less <ChevronUp size={14} /></>
                            ) : (
                                <>View All Jobs <ChevronDown size={14} /></>
                            )}
                        </button>

                        {/* Desktop View All Link (Hidden on Mobile) */}
                        <button className="hidden lg:block w-full mt-4 py-2 text-xs font-bold uppercase text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                            View All Jobs
                        </button>
                    </div>
                </div>

                {/* Center Column: Featured Story */}
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                    {isLoading ? (
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

                {/* Right Column: Top Stories (Expanded to 10) */}
                <div className="col-span-12 lg:col-span-3 order-3 lg:order-3 flex flex-col gap-6">
                    <div className="bg-white dark:bg-neutral-dark rounded-2xl p-5 border border-black/5 dark:border-white/5 shadow-soft h-auto lg:h-[34rem] flex flex-col">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Top 20 Stories
                        </h4>
                        <div className="flex-1 overflow-y-auto pr-1 space-y-4 scrollbar-hide">
                            {isLoading ? (
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

                {/* Bottom Row - Must Read (kept as is) */}
                {/* <div className="col-span-12 order-4">
                    <div className="bg-neutral-light dark:bg-neutral-dark/50 rounded-2xl p-6 sm:p-8 border border-black/5 dark:border-white/5">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-dark dark:text-white">
                                <span className="w-1 h-6 bg-primary rounded-full"></span>
                                Must Read
                            </h3>
                            <button className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80">View All</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mustRead.map((item, idx) => (
                                <div key={item.id} className="group cursor-pointer p-4 rounded-xl bg-white dark:bg-neutral-dark hover:shadow-medium transition-all border border-transparent hover:border-black/5 dark:hover:border-white/5">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded-md">{item.category}</span>
                                        <span className="text-4xl font-black text-neutral-dark/5 dark:text-white/5 group-hover:text-primary/10 transition-colors">0{idx + 1}</span>
                                    </div>
                                    <h5 className="hindi-headline font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors leading-relaxed">
                                        {item.title}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}


