import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://indianewshindi.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'],
        },
        sitemap: [
            `${baseUrl}/sitemap.xml`,
            `${baseUrl}/news-sitemap.xml`
        ],
    };
}
