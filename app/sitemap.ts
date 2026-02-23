import { MetadataRoute } from "next"
import { fetchHomepageData } from "@/services/api"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseUrl = "https://indianewshindi.com"
    const now = new Date().toISOString()

    /* ===============================
       STATIC CORE PAGES
    =============================== */
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 1
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.5
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.5
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${baseUrl}/terms-conditions`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${baseUrl}/disclaimer`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3
        }
    ]

    /* ===============================
       CATEGORY PAGES (HIGH SEO VALUE)
    =============================== */


    /* ===============================
   CATEGORY PAGES (REAL STRUCTURE)
=============================== */

    const categories: MetadataRoute.Sitemap = [

        // INDIA parent
        {
            url: `${baseUrl}/category/india`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.95
        },

        // INDIA states
        {
            url: `${baseUrl}/category/india/haryana`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/india/punjab`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/india/uttar-pradesh`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/india/rajasthan`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/india/delhi`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/india/bihar`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },

        // Other top categories
        {
            url: `${baseUrl}/category/business`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/finance`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/health`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/tech`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/education`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/law`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/sports`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/politics`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/category/crime`,
            lastModified: now,
            changeFrequency: "hourly",
            priority: 0.9
        }
    ]

    /* ===============================
       ARTICLE PAGES
    =============================== */
    try {
        const homepageData = await fetchHomepageData()

        const articles = [
            ...(homepageData.top_20 || []),
            ...(homepageData.trending_posts || [])
        ]

        const uniqueArticles = Array.from(
            new Map(articles.map(p => [p.id, p])).values()
        )

        const articlePages: MetadataRoute.Sitemap = uniqueArticles.map(post => {

            const published = post.date
                ? new Date(post.date)
                : new Date()

            const ageHours =
                (Date.now() - published.getTime()) / (1000 * 60 * 60)

            return {
                url: `${baseUrl}/post/${post.id}/${post.slug}`,
                lastModified: published.toISOString(),

                // fresh articles crawled more often
                changeFrequency: ageHours < 24 ? "hourly" : "daily",

                // fresh = higher priority
                priority: ageHours < 24 ? 0.9 : 0.7
            }
        })

        return [
            ...staticPages,
            ...categories,
            ...articlePages
        ]

    } catch (err) {
        console.error("Sitemap generation failed:", err)
        return [...staticPages, ...categories]
    }
}