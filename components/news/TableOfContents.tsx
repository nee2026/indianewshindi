"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
    headings: { text: string; id: string }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -60% 0px" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [headings]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for header height + padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveId(id);
        }
    };

    return (
        <nav className="hidden lg:block">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-primary pl-3">
                In this Article
            </h3>
            <ul className="space-y-3 text-sm border-l border-gray-200">
                {headings.map((heading) => (
                    <li key={heading.id} className="relative">
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => handleClick(e, heading.id)}
                            className={cn(
                                "block pl-4 py-1 transition-colors duration-200 hover:text-primary font-serif",
                                activeId === heading.id
                                    ? "text-primary font-semibold border-l-2 border-primary -ml-[1px]"
                                    : "text-gray-600"
                            )}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
