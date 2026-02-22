import React from "react";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-neutral-dark animate-pulse">
            <main className="max-w-7xl mx-auto px-4 py-8 font-display">
                {/* Breadcrumb Skeleton */}
                {/* <div className="flex items-center text-sm mb-8">
                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-16"></div>
                    <div className="mx-2 text-neutral-300">/</div>
                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-12"></div>
                </div> */}

                {/* Category Title Skeleton */}
                {/* <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
                    <div className="h-10 md:h-12 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 md:w-1/3 mb-4"></div>
                    <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-2/3 md:w-1/2"></div>
                </div> */}

                {/* Job Cards Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-black/5 dark:border-white/5 h-[320px] relative flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col gap-2">
                                    <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded-full w-20"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-32"></div>
                                </div>
                                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-24"></div>
                            </div>

                            <div className="h-7 bg-gray-200 dark:bg-neutral-800 rounded w-full mb-3"></div>
                            <div className="h-7 bg-gray-200 dark:bg-neutral-800 rounded w-2/3 mb-4"></div>

                            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/2 mb-6"></div>

                            <div className="space-y-4 mt-auto pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-700">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-neutral-800"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-24"></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-neutral-800"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-32"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
