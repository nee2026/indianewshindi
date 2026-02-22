import React from "react";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-neutral-dark animate-pulse py-8 px-4 font-display">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb Skeleton */}
                <div className="flex flex-wrap items-center text-sm mb-8">
                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-12"></div>
                    <div className="mx-2 text-neutral-300">/</div>
                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-12"></div>
                    <div className="mx-2 text-neutral-300">/</div>
                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-32"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area Skeleton */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Header Section Skeleton */}
                        <section className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-soft">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded-full w-24"></div>
                                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded-full w-24"></div>
                                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded-full w-32"></div>
                            </div>
                            <div className="h-8 md:h-12 bg-gray-200 dark:bg-neutral-800 rounded w-full mb-4"></div>
                            <div className="h-8 md:h-12 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 mb-8"></div>
                            <div className="flex items-center gap-4">
                                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-48"></div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-soft">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-10 bg-gray-200 dark:bg-neutral-800 rounded-xl w-full"></div>
                                ))}
                            </div>
                        </section>

                        {/* Description Skeleton */}
                        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-soft min-h-[400px]">
                            <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-48 mb-6"></div>
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-4/5"></div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 border border-black/5 dark:border-white/5 shadow-soft">
                            <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-32 mb-6"></div>
                            <div className="space-y-6">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex gap-3">
                                        <div className="w-5 h-5 bg-gray-200 dark:bg-neutral-800 rounded shrink-0"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 bg-gray-200 dark:bg-neutral-800 rounded w-16"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="h-px bg-black/5 dark:bg-white/5 my-6"></div>
                            <div className="h-14 bg-gray-200 dark:bg-neutral-800 rounded-xl w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
