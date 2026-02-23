"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Briefcase, IndianRupee, Clock } from "lucide-react";
import { fetchJobs } from "@/services/api";
import { HirexJob } from "@/types";
import { formatDate, toTitleCase, cn } from "@/lib/utils";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Loading from "./loading";
import { useRouter } from "next/navigation";

interface Props {
    initialJobs: HirexJob[]
    initialPage: number
    totalCount: number
}

export default function JobsCategoryPage({
    initialJobs,
    initialPage,
    totalCount: initialTotalCount
}: Props) {

    const [jobs, setJobs] = useState(initialJobs)
    const [currentPage, setCurrentPage] = useState(initialPage)
    const [totalCount, setTotalCount] = useState(initialTotalCount)
    const [loading, setLoading] = useState(false)

    const jobsPerPage = 10

    useEffect(() => {

        // ✅ prevent double fetch after SSR hydration
        if (currentPage === initialPage) return

        async function loadJobs() {
            setLoading(true)
            try {
                const data = await fetchJobs(currentPage)
                if (data) {
                    setJobs(data.results)
                    setTotalCount(data.count)
                }
            } catch (error) {
                console.error("Failed to fetch jobs page", error)
            } finally {
                setLoading(false)
                window.scrollTo({ top: 0, behavior: "instant" })
            }
        }

        loadJobs()

    }, [currentPage, initialPage])

    const totalPages = Math.min(10, Math.ceil(totalCount / jobsPerPage)); // Cap at 10 as requested or by API limit

    const router = useRouter()

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            router.push(`/category/job?page=${page}`)
        }
    }


    return (
        <main className="max-w-7xl mx-auto px-4 py-8 font-display bg-background-light dark:bg-neutral-dark min-h-screen">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-neutral-500 mb-8 capitalize">
                <Link href="/" className="hover:text-primary">Home</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-neutral-900 dark:text-white font-medium">Jobs</span>
            </div>

            {/* Category Title */}
            <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
                <h1 className="text-4xl md:text-5xl font-black text-neutral-dark dark:text-white mb-4 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
                    Latest Jobs
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">Browse the latest job opportunities across India.</p>
            </div>

            {loading ? (
                <Loading />
            ) : jobs.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-neutral-dark rounded-3xl border border-black/5 dark:border-white/5">
                    <Briefcase className="mx-auto h-12 w-12 text-neutral-300 mb-4" />
                    <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-2">No Jobs Found</h3>
                    <p className="text-neutral-500">We couldn&apos;t find any job listings at the moment. Please check back later.</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => {
                            const salaryText = job.salary_min && job.salary_max
                                ? `₹${job.salary_min.toLocaleString()} - ₹${job.salary_max.toLocaleString()} / mo`
                                : 'Salary not disclosed';

                            return (
                                <Link
                                    href={`/job/${job.id}?p=${currentPage}`}
                                    key={job.id}
                                    className="group flex flex-col bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-black/5 dark:border-white/5 h-full p-6 relative"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>

                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-bold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider w-fit">
                                                {job.job_type_display}
                                            </span>
                                            <span className="text-[9px] font-medium text-neutral-400 pl-1">
                                                {job.job_category_display.split('(')[0].trim()}
                                            </span>
                                        </div>
                                        {job.expire_date && (
                                            <span className="text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded-md flex items-center gap-1">
                                                <Clock size={10} />
                                                Exp: {formatDate(job.expire_date)}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                                        {toTitleCase(job.job_title)}
                                    </h3>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-4">
                                        {job.posted_by || "Hiring Company"}
                                    </p>

                                    <div className="space-y-2 mt-auto pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-700">
                                        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                            <MapPin size={14} className="text-neutral-400" />
                                            <span className="truncate">{job.city_display}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                            <IndianRupee size={14} className="text-neutral-400" />
                                            <span>{salaryText}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <span className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                                            View Details <ChevronRight size={14} className="ml-1" />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-16">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(currentPage - 1);
                                            }}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>

                                    {/* Desktop: Show all pages if totalPages is small, or use ellipsis */}
                                    {/* Mobile: Show minimal pages */}
                                    {[...Array(totalPages)].map((_, i) => {
                                        const pageNumber = i + 1;

                                        // Simple logic for responsiveness:
                                        // Always show first, last, current, and one around current.
                                        const shouldShow =
                                            pageNumber === 1 ||
                                            pageNumber === totalPages ||
                                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

                                        if (!shouldShow) {
                                            if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                                                return (
                                                    <PaginationItem key={pageNumber} className="hidden sm:inline-block">
                                                        <PaginationEllipsis />
                                                    </PaginationItem>
                                                );
                                            }
                                            return null;
                                        }

                                        return (
                                            <PaginationItem key={pageNumber} className={cn(
                                                "hidden sm:inline-block",
                                                (pageNumber === currentPage || pageNumber === 1 || pageNumber === totalPages) && "inline-block"
                                            )}>
                                                <PaginationLink
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(pageNumber);
                                                    }}
                                                    isActive={currentPage === pageNumber}
                                                    className="cursor-pointer"
                                                >
                                                    {pageNumber}
                                                </PaginationLink>
                                            </PaginationItem>
                                        );
                                    })}

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(currentPage + 1);
                                            }}
                                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </>
            )}
        </main>
    );
}
