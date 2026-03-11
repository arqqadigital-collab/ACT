const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface SuccessStoryItem {
  category: string;
  title: string;
  subtitle: string;
  image: string;
  order: number;
}

export interface FnBSuccessStoriesData {
  sectionTitle: string;
  sectionSubtitle: string;
  successStories: SuccessStoryItem[];
}

interface StrapiSuccessStoryItem {
  category: string;
  title: string;
  subtitle: string;
  image: {
    url: string;
    alternativeText?: string;
  } | null;
  order: number;
}

export const fetchFnBSuccessStories = async (): Promise<FnBSuccessStoriesData | null> => {
  try {
    console.log('📡 API Call:', `${STRAPI_URL}/api/fnb-success-stories?populate[successStories][populate]=image`);
    
    const response = await fetch(
      `${STRAPI_URL}/api/fnb-success-stories?populate[successStories][populate]=image`
    );

    if (!response.ok) {
      console.error('❌ Failed to fetch FnB success stories:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('📥 Raw API Response:', data);



    return data
  } catch (error) {
    console.error('Error fetching FnB success stories:', error);
    return null;
  }
};
