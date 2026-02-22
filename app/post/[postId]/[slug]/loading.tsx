export default function Loading() {
    return (
        <div className="bg-white min-h-screen pb-20 animate-pulse">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column + Center Column Wrapper */}
                    <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {/* Left Column - Table of Contents (Desktop Sticky) */}
                        <aside className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-24 space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                            </div>
                        </aside>

                        {/* Center Column - Main Article */}
                        <main className="lg:col-span-3 space-y-8">
                            {/* Header Skeleton */}
                            <div className="space-y-4 mb-6">
                                <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                                <div className="h-10 md:h-12 bg-gray-200 rounded w-full"></div>
                                <div className="h-10 md:h-12 bg-gray-200 rounded w-5/6 mb-6"></div>

                                {/* Meta Info Skeleton */}
                                <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-100">
                                    {/* Author */}
                                    <div className="flex items-center gap-2">
                                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                                    </div>
                                    <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>

                                    {/* Date */}
                                    <div className="flex items-center gap-1">
                                        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                                    </div>
                                    <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>

                                    {/* Location */}
                                    <div className="flex items-center gap-1">
                                        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image Skeleton */}
                            <div className="w-full aspect-[16/9] bg-gray-200 rounded-2xl"></div>

                            {/* Body Text Skeletons */}
                            <div className="space-y-4 pt-4">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                            </div>
                        </main>
                    </div>

                    {/* Right Column - Trending Posts (Sticky) */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-24 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>

                            <div className="space-y-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-16 w-16 bg-gray-200 rounded-lg shrink-0"></div>
                                        <div className="space-y-2 w-full">
                                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                                            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
