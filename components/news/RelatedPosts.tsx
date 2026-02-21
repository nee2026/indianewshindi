import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types";
import { getAbsoluteImageUrl, formatDate } from "@/lib/utils";

interface RelatedPostsProps {
    posts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
    if (!posts || posts.length === 0) return null;

    return (
        <div className="mt-12 border-t border-gray-100 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link key={post.id} href={`/post/${post.id}/${post.slug}`} className="group">
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                            <Image
                                src={getAbsoluteImageUrl(post.feature_image_url)}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h4 className="font-semibold font-serif text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>{formatDate(post.date)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedPosts;
