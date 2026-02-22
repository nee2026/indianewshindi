import { TickerItem, Top20Post, TrendingPost, HighlightPost, HomeCategorySection } from '../types';

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://indianewshindi.com').replace(/\/$/, '');

export interface HomepageData {
    ticker: TickerItem[];
    top_20: Top20Post[];
    trending_posts: TrendingPost[];
    today_highlight: HighlightPost[];
    home_category_sections: HomeCategorySection[];
    // Add other homepage data types here as needed
}

export async function fetchHomepageData(): Promise<HomepageData> {
    try {
        const response = await fetch(`${API_BASE_URL}/homepage/`, {
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        const data = await response.json();

        // Derive data from home_category_sections
        const derivedTicker: TickerItem[] = [];
        const derivedTop20: Top20Post[] = []; // Headlines
        const derivedHighlights: HighlightPost[] = [];

        if (data.home_category_sections && Array.isArray(data.home_category_sections)) {
            data.home_category_sections.forEach((section: HomeCategorySection) => {
                if (section.posts && Array.isArray(section.posts)) {
                    section.posts.forEach((post: import('../types').Post) => {
                        // Type guards and casting to ensure compatibility
                        if (post.show_in_ticker) {
                            // Check for duplicates in ticker
                            if (!derivedTicker.some(p => p.id === post.id)) {
                                if (post.category) {
                                    derivedTicker.push(post as unknown as TickerItem);
                                }
                            }
                        }
                        if (post.is_headline) {
                            if (!derivedTop20.some(p => p.id === post.id)) {
                                derivedTop20.push(post as unknown as Top20Post);
                            }
                        }
                        if (post.is_today_highlight) {
                            if (!derivedHighlights.some(p => p.id === post.id)) {
                                if (post.category) {
                                    derivedHighlights.push(post as unknown as HighlightPost);
                                }
                            }
                        }
                    });
                }
            });
        }

        // Return derived data, overriding API response for these fields
        // trending_posts is kept from API as requested
        return {
            ...data,
            ticker: derivedTicker,
            top_20: derivedTop20,
            today_highlight: derivedHighlights,
        };
    } catch (error) {
        console.error("Failed to fetch homepage data:", error);
        // Return empty structure to avoid breaking UI
        return {
            ticker: [],
            top_20: [],
            trending_posts: [],
            today_highlight: [],
            home_category_sections: []
        };
    }
}

export async function fetchPostDetails(id: string, slug: string) {

    const url = `${API_BASE_URL}/post/${id}/${slug}/`
    console.log("SERVER FETCH URL:", url)

    try {
        const response = await fetch(url, {
            next: { revalidate: 60 },
        });

        console.log("STATUS:", response.status)

        if (!response.ok) return null;

        return await response.json();

    } catch (error) {
        console.error("Error fetching post details:", error);
        return null;
    }
}

export async function fetchCategoryPosts(slug: string): Promise<import('../types').Post[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/${slug}/`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            // Try without trailing slash if failed (optional, but good for robustness)
            const response2 = await fetch(`${API_BASE_URL}/categories/${slug}`, {
                next: { revalidate: 60 },
            });
            if (!response2.ok) {
                return [];
            }
            const data = await response2.json();
            if (Array.isArray(data)) {
                return data;
            } else if (data.results && Array.isArray(data.results)) {
                return data.results;
            }
            return [];
        }

        const data = await response.json();

        // Handle different possible response structures
        if (Array.isArray(data)) {
            return data;
        } else if (data.results && Array.isArray(data.results)) {
            return data.results;
        } else if (data.posts && Array.isArray(data.posts)) {
            return data.posts;
        }

        return [];
    } catch (error) {
        console.error(`Failed to fetch category posts for slug ${slug}:`, error);
        return [];
    }
}
export async function fetchAuthorDetails(slug: string): Promise<import('../types').AuthorResponse | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/author/${slug}/`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching author details for ${slug}:`, error);
        return null;
    }
}

export async function fetchAuthorsList(): Promise<import('../types').AuthorsListResponse | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/authors/`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching authors list:", error);
        return null;
    }
}

export async function fetchJobs(page: number = 1): Promise<import('../types').JobsResponse> {
    try {
        const url = page > 1
            ? `https://thehirex.com/api/jobs/?page=${page}`
            : "https://thehirex.com/api/jobs/";

        const response = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            return { count: 0, next: null, previous: null, results: [] };
        }

        const data = await response.json();
        if (Array.isArray(data)) {
            return { count: data.length, next: null, previous: null, results: data };
        }
        return {
            count: data.count || 0,
            next: data.next || null,
            previous: data.previous || null,
            results: data.results || []
        };
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return { count: 0, next: null, previous: null, results: [] };
    }
}

export async function fetchJobDetails(id: string, page: number = 1): Promise<import('../types').HirexJob | null> {
    try {
        // The direct detail endpoint /jobs/ID/ returns 404, so we must fetch the list
        // and find the job within the results.
        const data = await fetchJobs(page);

        if (!data || !data.results) {
            return null;
        }

        const job = data.results.find((j: import('../types').HirexJob) => j.id.toString() === id);

        // If not found on the expected page, we could technically search others, 
        // but for now we trust the page parameter passed from the listing.
        return job || null;
    } catch (error) {
        console.error(`Error fetching job details for ${id} on page ${page}:`, error);
        return null;
    }
}
