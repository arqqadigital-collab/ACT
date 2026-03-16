const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface MediaItem {
  id?: number;
  title: string;
  slug?: string;
  excerpt?: string;
  link: string;
  thumbnail?: {
    url: string;
    alternativeText?: string;
  };
  date?: string;
  category?: string;
  featured?: boolean;
  order?: number;
}

export const fetchMediaItems = async (): Promise<MediaItem[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/media`);
    if (!response.ok) {
      throw new Error('Failed to fetch media items');
    }
    const data = await response.json();
    return data.data?.mediaItems || [];
  } catch (error) {
    console.error('Error fetching media items:', error);
    return [];
  }
};

export const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};
