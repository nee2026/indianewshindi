"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchJobs } from '@/services/api';
import { formatDate, getAbsoluteImageUrl, toTitleCase } from '@/lib/utils';
import {
    Eye,
    ArrowUpRight,
    BadgeCheck,
    AtSign,
    Link as LinkIcon,
    Rss,
    Linkedin,
    Youtube,
    Instagram
} from 'lucide-react';

import { AuthorResponse, Top20Post, HirexJob } from '@/types';

interface ArticleBottomSectionProps {
    author: string;
    authorDetails?: AuthorResponse | null;
    quickReads: Top20Post[];
}

const ArticleBottomSection: React.FC<ArticleBottomSectionProps> = ({ author, authorDetails, quickReads }) => {
    const [apiJobs, setApiJobs] = useState<HirexJob[]>([]);

    useEffect(() => {
        async function loadJobs() {
            try {
                const data = await fetchJobs();
                if (data && data.results) {
                    setApiJobs(data.results);
                }
            } catch (error) {
                console.error("Failed to load jobs", error);
            }
        }
        loadJobs();
    }, []);

    // Get first 4 jobs
    const displayJobs = apiJobs.slice(0, 4);

    // Get author posts from API
    const displayAuthorPosts = authorDetails?.posts || [];

    return (
        <section className="mt-2 masonry-gradient pt-16 pb-0 dark:from-neutral-dark dark:to-neutral-dark/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    {/* Jobs Section */}
                    <div className="space-y-6">
                        <div className="flex items-baseline justify-between">
                            <h2 className="hindi-headline text-3xl font-bold border-l-4 border-primary pl-4 text-neutral-dark dark:text-white">
                                नौकरी <span className="text-sm font-display font-medium text-accent-gray/60 uppercase ml-2">Open Positions</span>
                            </h2>
                            <Link className="text-primary font-bold text-xs uppercase tracking-widest hover:underline" href="/category/job">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {displayJobs.map((job) => (
                                <Link href={`/job/${job.id}`} key={job.id} className="group bg-white dark:bg-neutral-dark p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-white/5 relative overflow-hidden block">
                                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="text-primary bg-primary/10 p-2 rounded-full scale-75">
                                            <Eye size={20} />
                                        </div>
                                    </div>
                                    <h3 className="hindi-headline font-bold text-lg mb-4 leading-tight group-hover:text-primary transition-colors text-neutral-dark dark:text-white line-clamp-2">
                                        {toTitleCase(job.job_title)}
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-2 truncate">{job.posted_by}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-[10px] font-bold text-accent-gray/50 uppercase tracking-widest">{job.expire_date ? `Exp: ${formatDate(job.expire_date)}` : 'Apply Now'}</span>
                                        <span className="inline-flex items-center gap-1 text-primary font-bold text-xs uppercase hover:underline">
                                            View Details <ArrowUpRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Reads Section */}
                    <div className="space-y-6">
                        <div className="flex items-baseline justify-between">
                            <h2 className="hindi-headline text-3xl font-bold border-l-4 border-primary pl-4 text-neutral-dark dark:text-white">
                                ताज़ा खबर <span className="text-sm font-display font-medium text-accent-gray/60 uppercase ml-2">Quick Reads</span>
                            </h2>
                            <Link className="text-primary font-bold text-xs uppercase tracking-widest hover:underline" href="/">Read More</Link>
                        </div>
                        <div className="space-y-4">
                            {quickReads.map((item) => (
                                <Link href={`/post/${item.id}/${item.slug}`} key={item.id} className="group bg-white dark:bg-neutral-dark p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-white/5 flex gap-4 items-center relative overflow-hidden">
                                    <div className="w-20 h-20 relative flex-shrink-0">
                                        <Image
                                            alt={item.title}
                                            className="object-cover rounded-xl"
                                            src={getAbsoluteImageUrl(item.feature_image_url)}
                                            fill
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-primary text-[10px] font-extrabold uppercase tracking-tighter">{item.category?.name || "News"}</span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            <span className="text-[10px] text-gray-400">{formatDate(item.date)}</span>
                                        </div>
                                        <h3 className="hindi-headline font-bold text-base leading-tight group-hover:text-primary transition-colors text-neutral-dark dark:text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Author Section */}
                <div className="relative overflow-hidden rounded-3xl bg-[#321a1a] p-8 md:p-12 text-white shadow-xl border border-white/10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <div className="flex items-center gap-6 min-w-fit border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
                            <div className="relative">
                                {/* Author Image */}
                                <div className="w-24 h-24 rounded-full border-4 border-white/10 shadow-xl overflow-hidden relative bg-white/5 flex items-center justify-center">
                                    {authorDetails?.profile_image ? (
                                        <Image
                                            src={authorDetails.profile_image}
                                            alt={author}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-3xl font-bold text-white/80">{author.charAt(0)}</span>
                                    )}
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-white text-[#321a1a] p-1.5 rounded-full shadow-lg border-2 border-[#321a1a]">
                                    <BadgeCheck size={16} className="fill-[#321a1a] text-white" />
                                </div>
                            </div>
                            <div>
                                <h4 className="hindi-headline font-bold text-2xl mb-1 text-white">{author}</h4>
                                <p className="text-white/40 text-xs uppercase tracking-widest font-display font-bold">Senior Editor</p>
                                <div className="flex gap-4 mt-5">
                                    {authorDetails?.twitter && (
                                        <a className="text-white/40 hover:text-primary transition-colors hover:scale-110 transform duration-200" href={authorDetails.twitter} target="_blank" rel="noopener noreferrer">
                                            <AtSign size={18} />
                                        </a>
                                    )}
                                    {authorDetails?.website && (
                                        <a className="text-white/40 hover:text-primary transition-colors hover:scale-110 transform duration-200" href={authorDetails.website} target="_blank" rel="noopener noreferrer">
                                            <LinkIcon size={18} />
                                        </a>
                                    )}
                                    {authorDetails?.facebook && (
                                        <a className="text-white/40 hover:text-primary transition-colors hover:scale-110 transform duration-200" href={authorDetails.facebook} target="_blank" rel="noopener noreferrer">
                                            <Rss size={18} />
                                        </a>
                                    )}
                                    {authorDetails?.instagram && (
                                        <a className="text-white/40 hover:text-primary transition-colors hover:scale-110 transform duration-200" href={authorDetails.instagram} target="_blank" rel="noopener noreferrer">
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                    {authorDetails?.linkedin && (
                                        <a className="text-white/40 hover:text-primary transition-colors hover:scale-110 transform duration-200" href={authorDetails.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {authorDetails?.youtube && (
                                        <a className="text-white/40 hover:text-primary transition-colors hover:scale-110 transform duration-200" href={authorDetails.youtube} target="_blank" rel="noopener noreferrer">
                                            <Youtube size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow w-full">
                            {authorDetails?.bio && (
                                <>
                                    <div className="flex items-center gap-3 mb-4 opacity-80">
                                        <span className="w-8 h-0.5 bg-primary/50 rounded-full"></span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">About Author</span>
                                    </div>
                                    <p className="text-white/70 text-sm mb-6 max-w-2xl">
                                        {authorDetails.bio}
                                    </p>
                                </>
                            )}
                            <div className="flex items-center gap-3 mb-6 opacity-80">
                                <span className="w-8 h-0.5 bg-primary/50 rounded-full"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Featured Insights</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {displayAuthorPosts.slice(0,3).map((post) => (
                                    <Link key={post.id} className="group block" href={`/post/${post.id}/${post.slug}`}>
                                        <h5 className="hindi-headline font-semibold text-[15px] leading-snug text-white/90 group-hover:text-primary transition-colors line-clamp-3 mb-3">
                                            {post.title}
                                        </h5>
                                        <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold border-t border-white/5 pt-3 group-hover:border-primary/20 transition-colors">
                                            {/* author details posts don't have category, using Author as placeholder or omitting */}
                                            {author}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleBottomSection;
