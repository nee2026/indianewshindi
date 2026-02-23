import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {

    const baseUrl = "https://indianewshindi.com"

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/_next/",
                    "/admin/",
                    "/private/",
                    "/*?*utm_",
                    "/*?*fbclid"
                ]
            },

            {
                userAgent: "Googlebot-News",
                allow: "/"
            }
        ],

        sitemap: [
            `${baseUrl}/sitemap.xml`,
            `${baseUrl}/news-sitemap.xml`
        ]
    }
}