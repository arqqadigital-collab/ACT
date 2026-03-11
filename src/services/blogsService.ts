const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface BlogTag {
  label: string;
}

export interface Blog {
  id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime?: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
  category: string;
  tags?: BlogTag[];
  featured?: boolean;
  order?: number;
}

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();
    return data.data?.blogs || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const blogs = await fetchBlogs();
    return blogs.find(blog => blog.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
};

export const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};
