import { MetadataRoute } from 'next';
import { fetchHomepageData } from '@/services/api'; // Mock or actual API functions

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://indianewshindi.com';

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms-conditions',
        '/disclaimer',
        '/cookie-policy'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    try {
        // Fetch Categories to add to sitemap
        // Assuming we rely on the categories defined in data/categories.ts for generic sitemap
        const categories = [
            "india", "world", "entertainment", "sports",
            "technology", "business", "health", "automobile",
            "education", "religion"
        ];

        const categoryPages = categories.map((slug) => ({
            url: `${baseUrl}/category/${slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        }));

        // Fetch Recent Articles (e.g. from homepage top-20 and trending)
        const homepageData = await fetchHomepageData();
        const articles = [...(homepageData.top_20 || []), ...(homepageData.trending_posts || [])];

        // Remove duplicates by ID
        const uniqueArticles = Array.from(new Map(articles.map(item => [item.id, item])).values());

        const articlePages = uniqueArticles.map((post) => ({
            url: `${baseUrl}/post/${post.id}/${post.slug}`,
            lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
            changeFrequency: 'hourly' as const,
            priority: 0.8,
        }));

        return [...staticPages, ...categoryPages, ...articlePages];
    } catch (e) {
        console.error("Error generating sitemap:", e);
        // Fallback to just static pages if API fails
        return staticPages;
    }
}
