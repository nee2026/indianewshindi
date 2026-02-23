"use client";

import React, { useMemo } from "react";
import parse, { domToReact, Element, DOMNode } from "html-react-parser";
import { Facebook, Twitter, MessageCircle, Share2 } from "lucide-react";

interface ArticleBodyProps {
    htmlContent: string;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ htmlContent }) => {
    /* =====================================================
       HTML TRANSFORM LOGIC
    ===================================================== */
    const processedContent = useMemo(() => {
        if (!htmlContent) return null;

        const parserOptions = {
            replace(domNode: DOMNode) {
                if (!(domNode instanceof Element)) return;

                // Target <p> tags that wrap a single bold/strong element (common for WP/Scraping)
                if (domNode.name === "p") {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const children = (domNode.children as any[]) || [];
                    // Filter out empty text nodes to find real children
                    const realChildren = children.filter(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (c: any) => !(c.type === "text" && "data" in c && !c.data.trim())
                    );

                    if (realChildren.length === 1) {
                        const child = realChildren[0];

                        if (
                            child instanceof Element &&
                            (child.name === "b" || child.name === "strong")
                        ) {
                            const firstChild = child.children?.[0];
                            const text = (firstChild && "data" in firstChild) ? firstChild.data.trim() : "";

                            // Headings usually start with numbers "1. ", "2. "
                            // OR they are short and don't end in punctuation (likely a heading)
                            const isNumbered = /^\d+\.\s/.test(text);
                            const isShortHeading = text.length > 0 && text.length < 100 && !/[.!?]$/.test(text);

                            if (isNumbered || isShortHeading) {
                                return (
                                    <h2 className="group relative flex items-center">
                                        <span className="inline-block py-1">
                                            {domToReact(child.children as DOMNode[])}
                                        </span>
                                    </h2>
                                );
                            }
                        }
                    }
                }
            },
        };

        return parse(htmlContent, parserOptions);
    }, [htmlContent]);

    /* =====================================================
       SHARE FUNCTION
    ===================================================== */
    const handleShare = (platform: string) => {
        if (typeof window === "undefined") return;

        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);

        const copy = () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied!");
        };

        switch (platform) {
            case "facebook":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
                break;
            case "whatsapp":
                window.open(`https://api.whatsapp.com/send?text=${title} ${url}`, "_blank");
                break;
            case "twitter":
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank");
                break;
            case "native":
                if (navigator.share) {
                    navigator.share({ title: document.title, url: window.location.href });
                } else copy();
                break;
        }
    };

    return (
        <article
            className="
    prose max-w-none

    /* BASE TYPOGRAPHY */
    prose-headings:font-bold
    prose-headings:text-gray-900
    prose-headings:font-serif

    /* H2 — MAIN SECTION */
    prose-h2:text-red-900
    prose-h2:border-l-3 prose-h2:border-gray-300
    prose-h2:pl-0
    prose-h2:mt-4 prose-h2:mb-2
    prose-h2:leading-snug

    /* H3 — SUB SECTION */
    prose-h3:text-red-900
    prose-h3:mt-4 prose-h3:mb-2

    /* H4 — MINOR */
    prose-h4:text-red-900
    prose-h4:mt-6 prose-h4:mb-2

    /* PARAGRAPH */
    prose-p:text-gray-700
    prose-p:leading-relaxed
    prose-p:my-4
    prose-p:text-justify md:prose-p:text-left

    /* LISTS */
    prose-li:text-gray-700
    prose-li:my-1

    /* IMAGES */
    prose-img:rounded-xl
    prose-img:shadow-sm
    prose-img:my-8

    /* LINKS */
    prose-a:text-blue-700
    hover:prose-a:text-blue-900 
    prose-a:no-underline hover:prose-a:underline

    /* STRONG */
    prose-strong:text-gray-900
    prose-strong:font-semibold
  "
        >
            {/* SHARE BAR */}
            <div className="flex items-center gap-4 mb-10 not-prose border-b border-gray-100 pb-6">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Share Post:</span>

                <div className="flex gap-3">
                    <button
                        onClick={() => handleShare("facebook")}
                        className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        title="Share on Facebook"
                    >
                        <Facebook className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => handleShare("whatsapp")}
                        className="p-2.5 rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                        title="Share on WhatsApp"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => handleShare("twitter")}
                        className="p-2.5 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300"
                        title="Share on Twitter"
                    >
                        <Twitter className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => handleShare("native")}
                        className="p-2.5 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300"
                        title="More Options"
                    >
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="font-serif">
                {processedContent}
            </div>
        </article>
    );
};


export default ArticleBody;