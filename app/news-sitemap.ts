import { fetchHomepageData } from '@/services/api';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://indianewshindi.com';

    try {
        // For Google News, we need articles from the last 48 hours. 
        // We'll use the homepage recent articles as a proxy for the latest news.
        const homepageData = await fetchHomepageData();
        const articles = [...(homepageData.top_20 || []), ...(homepageData.trending_posts || [])];

        // Remove duplicates
        const uniqueArticles = Array.from(new Map(articles.map(item => [item.id, item])).values());

        const now = new Date();
        const fortyEightHoursAgo = new Date(now.getTime() - (48 * 60 * 60 * 1000));

        // Filter for articles published within the last 48 hours
        const recentArticles = uniqueArticles.filter(post => {
            if (!post.date) return false;
            const postDate = new Date(post.date);
            return postDate >= fortyEightHoursAgo;
        });

        // Next.js currently lacks native `<news:news>` namespace objects in `MetadataRoute.Sitemap` typing cleanly,
        // but we can pass unknown extension properties or we can just return standard URLs which Google News Publisher Center can still ingest if Publisher Center is configured.
        // As of Next 14/15, there is experimental support, but we map standard sitemap schema.

        return recentArticles.map((post) => ({
            url: `${baseUrl}/post/${post.id}/${post.slug}`,
            lastModified: new Date(post.date).toISOString(),
            priority: 0.9,
            // Next.js standard doesn't natively expose the Google News specific XML tags without custom XML generation.
            // A standard sitemap is usually sufficient for Publisher Center if submitted directly.
        }));

    } catch (e) {
        console.error("Error generating news sitemap:", e);
        return [];
    }
}
