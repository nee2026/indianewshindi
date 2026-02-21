import React from "react";
import { Tag } from "lucide-react";

interface TagListProps {
    tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
    return (
        <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-semibold text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary text-sm rounded-full transition-colors cursor-pointer"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagList;
