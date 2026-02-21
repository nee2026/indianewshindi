"use client";

import React from "react";


interface MobileTableOfContentsProps {
    headings: { text: string; id: string }[];
}

const MobileTableOfContents: React.FC<MobileTableOfContentsProps> = ({ headings }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 130; // Mobile specific offset
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="block lg:hidden mb-8 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <details className="group">
                <summary className="flex justify-between items-center font-bold font-serif text-gray-900 list-none cursor-pointer">
                    <span>Table of Contents</span>
                    <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <ul className="space-y-2 text-sm">
                        {headings.map((heading) => (
                            <li key={heading.id}>
                                <a
                                    href={`#${heading.id}`}
                                    onClick={(e) => handleClick(e, heading.id)}
                                    className="block text-primary hover:underline font-serif"
                                >
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </details>
        </div>
    );
};

export default MobileTableOfContents;
