"use client";

import React from "react";
import { Facebook, Twitter, MessageCircle, Share2 } from "lucide-react";

interface ArticleBodyProps {
    htmlContent: string;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ htmlContent }) => {
    const handleShare = (platform: string) => {
        if (typeof window === 'undefined') return;

        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);

        switch (platform) {
            case "facebook":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400");
                break;
            case "whatsapp":
                window.open(`https://api.whatsapp.com/send?text=${title} ${url}`, "_blank");
                break;
            case "twitter":
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank", "width=600,height=400");
                break;
            case "native":
                const copyToClipboard = (text: string) => {
                    if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(text)
                            .then(() => alert("Link copied to clipboard!"))
                            .catch(console.error);
                    } else {
                        // Fallback for non-secure contexts or unsupported browsers
                        const textArea = document.createElement("textarea");
                        textArea.value = text;
                        textArea.style.position = "fixed";
                        textArea.style.left = "-9999px";
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        try {
                            document.execCommand('copy');
                            alert("Link copied to clipboard!");
                        } catch (err) {
                            console.error('Fallback: Oops, unable to copy', err);
                        }
                        document.body.removeChild(textArea);
                    }
                };

                if (navigator.share) {
                    navigator.share({
                        title: document.title,
                        url: window.location.href,
                    }).catch((error) => {
                        console.error("Error sharing:", error);
                        // If sharing fails (e.g., user cancels, or not fully supported in webview), fallback to copy
                        if (error.name !== "AbortError") {
                            copyToClipboard(window.location.href);
                        }
                    });
                } else {
                    copyToClipboard(window.location.href);
                }
                break;
        }
    };

    return (
        <article className="prose prose-lg max-w-none font-serif prose-headings:font-bold prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:font-serif prose-p:leading-relaxed prose-a:text-primary prose-a:font-serif prose-strong:font-serif prose-li:font-serif prose-blockquote:font-serif prose-img:rounded-xl">
            {/* Social Share Bar (Mobile/Inline) */}
            <div className="flex items-center gap-4 mb-8 not-prose">
                <span className="text-sm font-semibold text-gray-500">Share:</span>
                <div className="flex gap-2">
                    <button onClick={() => handleShare("facebook")} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" aria-label="Share on Facebook">
                        <Facebook className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare("whatsapp")} className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors" aria-label="Share on WhatsApp">
                        <MessageCircle className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare("twitter")} className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors" aria-label="Share on Twitter">
                        <Twitter className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare("native")} className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" aria-label="Share">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

        </article>
    );
};

export default ArticleBody;
