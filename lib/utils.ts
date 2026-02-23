import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HirexJob } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAbsoluteImageUrl(url: string | undefined | null): string {
  if (!url) return "/placeholder.png";
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

export function toTitleCase(str: string | undefined | null): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateJobWhatsAppLink(job: HirexJob, pageNum: number = 1): string {
  const phone = "919467858156";
  const title = toTitleCase(job.job_title);
  const company = job.posted_by || "Hiring Company";
  const location = job.city_display || "Not Specified";
  const salary = (job.salary_min && job.salary_max)
    ? `₹${job.salary_min.toLocaleString()} - ₹${job.salary_max.toLocaleString()} / mo`
    : 'Salary not disclosed';

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jobUrl = `${baseUrl}/job/${job.id}?p=${pageNum}`;

  const message = `Hello, I am applying from the India News Hindi website for this job:

📌 *Job Title:* ${title}
🏢 *Company:* ${company}
📍 *Location:* ${location}
💰 *Salary:* ${salary}
🆔 *Job ID:* ${job.id}
🔗 *Post Link:* ${jobUrl}

Please let me know the next steps. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}