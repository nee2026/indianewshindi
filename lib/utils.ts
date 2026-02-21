import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getAbsoluteImageUrl(url: string | undefined | null): string {
    if (!url) return "/placeholder.jpg";
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) return url;

    // Fallback to https://indianewshindi.com if NEXT_PUBLIC_SITE_URL is undefined
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

    if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
    }
    return `${baseUrl}/${url}`;
}

export function formatDate(dateString: string | undefined | null): string {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
