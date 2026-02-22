export default function Loading() {
    return (
        <div className="min-h-screen bg-background-light text-neutral-dark animate-pulse">
            <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-left">
                {/* Back Button Skeleton */}
                <div className="mb-6">
                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-24"></div>
                </div>

                {/* Profile Hero Skeleton */}
                <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 border border-black/5 shadow-soft">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                        {/* Avatar Skeleton */}
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gray-200 dark:bg-neutral-800 shrink-0"></div>

                        {/* Details Skeleton */}
                        <div className="flex-1 text-center md:text-left w-full space-y-4">
                            <div className="h-10 md:h-12 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 md:w-1/2 mx-auto md:mx-0 mb-4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/4 mx-auto md:mx-0 mb-6"></div>

                            <div className="space-y-2 mb-8 max-w-3xl mx-auto md:mx-0">
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-11/12"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-4/5"></div>
                            </div>

                            {/* Social Links Skeleton */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-[46px] h-[46px] rounded-xl bg-gray-200 dark:bg-neutral-800"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles Section Skeleton */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-8 bg-gray-200 dark:bg-neutral-800 rounded w-64"></div>
                        <div className="h-px flex-1 bg-black/5"></div>
                        <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-soft">
                                <div className="relative h-48 bg-gray-200 dark:bg-neutral-800"></div>
                                <div className="p-6 text-left">
                                    <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-24 mb-3"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-full mb-2"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-4/5"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
