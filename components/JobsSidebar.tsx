"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Briefcase, MapPin, ChevronDown, ChevronRight } from "lucide-react";
import { fetchJobs } from "@/services/api";
import { HirexJob } from "@/types";
import { toTitleCase } from "@/lib/utils";

export default function JobsSidebar() {
    const router = useRouter();
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);
    const [apiJobs, setApiJobs] = useState<HirexJob[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadJobs() {
            try {
                const jobsData = await fetchJobs();
                if (jobsData && jobsData.results) {
                    setApiJobs(jobsData.results.slice(0, 10)); // Take top 10 as per API/requirement
                }
            } catch (error) {
                console.error("Error loading jobs in sidebar:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadJobs();
    }, []);

    const handleMobileToggle = () => {
        if (isMobileExpanded) {
            router.push("/category/job");
        } else {
            setIsMobileExpanded(true);
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-dark rounded-2xl p-5 border border-black/[0.05] dark:border-white/[0.05] shadow-sm h-auto lg:h-[34rem] flex flex-col group/sidebar overflow-hidden relative">
            <div className="flex items-center justify-between mb-4 relative z-10">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                    <Briefcase size={16} />
                    Jobs
                </h4>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-3 scrollbar-hide relative z-10">
                {apiJobs.length === 0 && !isLoading && (
                    <p className="text-xs text-neutral-500 text-center py-4 font-display">No jobs available right now.</p>
                )}

                {isLoading && apiJobs.length === 0 ? (
                    [...Array(4)].map((_, i) => (
                        <div key={i} className="animate-pulse p-4 rounded-xl bg-neutral-50 dark:bg-white/5">
                            <div className="w-16 h-3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div>
                            <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div>
                            <div className="w-2/3 h-3 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                        </div>
                    ))
                ) : (
                    apiJobs.map((job, idx) => (
                        <Link
                            href={`/job/${job.id}`}
                            key={job.id}
                            className={`block group p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-transparent hover:border-primary/10 hover:bg-white dark:hover:bg-neutral-800 transition-all cursor-pointer ${idx >= 4 && !isMobileExpanded ? 'hidden lg:block' : 'block'}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary tracking-wider uppercase">
                                    {job.job_type_display}
                                </span>
                            </div>

                            <h5 className="font-bold text-[13px] text-neutral-dark dark:text-white leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                {toTitleCase(job.job_title)}
                            </h5>

                            <p className="text-[10px] text-neutral-400 mb-2 truncate font-medium">{job.posted_by || ""}</p>

                            <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 mt-2 pt-2 border-t border-black/[0.02] dark:border-white/[0.02]">
                                <MapPin size={10} className="text-primary/60" />
                                <span className="truncate">
                                    {job.city_display?.split(",")?.[0] ?? "Location not specified"}
                                </span>
                            </div>
                        </Link>
                    ))
                )}
            </div>

            {/* Mobile Action Button */}
            {apiJobs.length > 4 && (
                <button
                    onClick={handleMobileToggle}
                    className="w-full mt-4 py-2 text-[10px] font-bold uppercase text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors lg:hidden flex items-center justify-center gap-2"
                >
                    {isMobileExpanded ? (
                        <>View More <ChevronRight size={14} /></>
                    ) : (
                        <>View All Jobs <ChevronDown size={14} /></>
                    )}
                </button>
            )}

            {/* Desktop View All Link */}
            <Link
                href="/category/job"
                className="hidden lg:block w-full mt-4 py-2 text-center text-[10px] font-bold uppercase text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
                View All Jobs
            </Link>
        </div>
    );
}
