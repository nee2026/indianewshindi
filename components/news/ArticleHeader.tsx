import React from "react";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";

import { AuthorResponse } from "@/types";

interface ArticleHeaderProps {
    category: string;
    title: string;
    author: string;
    authorDetails?: AuthorResponse | null;
    publishedAt: string; // Assuming string for now, could be Date
    location: string;
    featuredImage: string;
    caption?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
    category,
    title,
    author,
    authorDetails,
    publishedAt,
    location,
    featuredImage,
    caption,
}) => {
    return (
        <header className="mb-8">
            {/* Breadcrumb / Category */}
            <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                <span className="text-primary uppercase tracking-wide">{category}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500">News</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight mb-6">
                {title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    {authorDetails?.profile_image && (
                        <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image
                                src={authorDetails.profile_image}
                                alt={author}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div className="font-semibold text-gray-900">By {author}</div>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{formatDate(publishedAt)}</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{location}</span>
                </div>
            </div>

            {/* Hero Image */}
            <figure className="relative w-full aspect-video rounded-xl overflow-hidden mb-2 shadow-sm">
                <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </figure>
            {caption && (
                <figcaption className="text-xs text-center text-gray-500 italic mt-2">
                    {caption}
                </figcaption>
            )}
        </header>
    );
};

export default ArticleHeader;
