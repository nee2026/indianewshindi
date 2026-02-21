export interface ArticleBlock {
    type: "heading" | "paragraph" | "image" | "quote" | "list";
    text?: string;
    src?: string;
    items?: string[];
}

export interface ArticlePost {
    id: number;
    slug: string;
    title: string;
    category: string;
    featuredImage: string;
    caption?: string;
    publishedAt: string;
    location: string;
    author: string;
    body: ArticleBlock[];
    tags: string[];
}

export interface TrendingPostOld {
    id: number;
    title: string;
    slug: string;
    date: string;
    views: number | string;
    category: string | Category; // Adjusted to be flexible
    image?: string;
    timeAgo?: string;
    snippet?: string;
}

export interface HighlightPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    views: number;
    category: Category;
    feature_image_url: string;
}

export interface Article {
    id: string;
    title: string;
    slug: string;
    category: string;
    image: string;
    excerpt: string;
    content?: string;
    author: string;
    publishedAt: string;
    views?: string;
}

export interface Category {
    id: number
    name: string;
    slug: string;
    subCategories?: { name: string; slug: string }[];
}

export interface Job {
    id: string;
    title: string;
    organization: string;
    location: string;
    salary?: string;
    deadline?: string;
    type: 'Government' | 'Private' | 'Army' | 'Bank' | 'Railway';
    logo?: string;
}

export interface Author {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    socials: {
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
    articlesCount: number;
}

export interface AuthorPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    feature_image_url: string | null;
}

export interface AuthorResponse {
    first_name: string;
    bio: string | null;
    profile_image: string | null;
    website: string | null;
    twitter: string | null;
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
    youtube: string | null;
    posts?: AuthorPost[];
}

export interface AuthorsListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: AuthorResponse[];
}

export interface CategoryArticle {
    id: string;
    title: string;
    image?: string; // Only for featured
    link: string;
}

export interface NewsCategory {
    id: string;
    title: string;
    slug: string;
    featured: CategoryArticle;
    items: CategoryArticle[];
}

export interface CategoryShort {
    id: number;
    name: string;
    slug: string;
}

export interface TickerItem {
    id: number;
    title: string;
    slug: string;
    date: string;
    views: number;
    category: CategoryShort;
}

export interface Headline {
    id: number;
    title: string;
    slug: string;
    date: string;
    views: number;
    category: CategoryShort;
    feature_image_url: string;
}

export interface HomeCategorySection {
    category: string;
    slug: string;
    posts: Post[];
}


export interface PostCategory {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    date: string;
    intro: string;
    body: string;
    blog_type: string;
    blog_type_display: string;
    status: string;
    status_display: string;
    category: PostCategory | null;
    feature_image: number;
    feature_image_url: string;
    custom_seo_keywords: string[];
    custom_seo_description: string;
    views: number;
    show_in_ticker: boolean;
    is_headline: boolean;
    is_today_highlight: boolean;
    author: number;
    author_name: string;
    author_slug: string;
    location?: string; // API doesn't seem to return location
    tags: string[];
    news_keywords: string[];
}

export interface PostDetail {
    post: Post;
    related_posts: Post[];
    trending_posts: Post[];
}

export interface TrendingPost { // Re-defining to match the API's "trending_posts" which seem to share structure with "Post"
    id: number;
    title: string;
    slug: string;
    date: string;
    intro: string;
    body: string;
    blog_type: string;
    blog_type_display: string;
    status: string;
    status_display: string;
    category: PostCategory | null;
    feature_image: number;
    feature_image_url: string;
    custom_seo_keywords: string[];
    custom_seo_description: string;
    views: number;
    show_in_ticker: boolean;
    is_headline: boolean;
    is_today_highlight: boolean;
    timeAgo?: string; // Optional for compatibility if we compute it on client
    image?: string; // Optional for compatibility
    snippet?: string; // Optional for compatibility
}

export interface Top20Post {
    id: number
    title: string
    slug: string
    date: string   // ISO date string
    views: number
    category: Category | null
    image?: string
    feature_image_url: string
    excerpt?: string
}




export type CategoryPostsResponse = Post[];
