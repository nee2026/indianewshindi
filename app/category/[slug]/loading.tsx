export default function Loading() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8 font-display animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="flex items-center mb-8">
                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-48"></div>
            </div>

            {/* Category Title Skeleton */}
            <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
                <div className="h-12 bg-gray-200 dark:bg-neutral-800 rounded w-1/3 mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-1/2"></div>
            </div>

            {/* Featured Post Skeleton */}
            <section className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-neutral-dark rounded-3xl overflow-hidden border border-black/5 dark:border-white/5">
                    <div className="lg:col-span-7 relative aspect-video lg:aspect-auto lg:h-[28rem] bg-gray-200 dark:bg-neutral-800"></div>
                    <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-center">
                        <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-32 mb-4"></div>
                        <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded w-full mb-2"></div>
                        <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded w-5/6 mb-4"></div>
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-11/12"></div>
                            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-4/5"></div>
                        </div>
                        <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-32"></div>
                    </div>
                </div>
            </section>

            {/* Post Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col bg-white dark:bg-neutral-dark rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 h-full">
                        <div className="relative aspect-[16/10] bg-gray-200 dark:bg-neutral-800"></div>
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-24 mb-3"></div>
                            <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-full mb-2"></div>
                            <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-4/5 mb-3"></div>
                            <div className="space-y-2 mt-auto">
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-3/4"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
