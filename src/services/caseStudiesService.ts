const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyTag {
  label: string;
}

export interface CaseStudy {
  id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  industry: string;
  client?: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
  backgroundImage?: {
    url: string;
    alternativeText?: string;
  };
  logo?: {
    url: string;
    alternativeText?: string;
  };
  iconName?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  testimonial?: string;
  technologies?: CaseStudyTag[];
  metrics?: CaseStudyMetric[];
  order?: number;
}

export const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/case-studies`);
    if (!response.ok) {
      throw new Error('Failed to fetch case studies');
    }
    const data = await response.json();
    return data.data?.caseStudies || [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
};

export const fetchCaseStudyBySlug = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const caseStudies = await fetchCaseStudies();
    return caseStudies.find(cs => cs.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching case study by slug:', error);
    return null;
  }
};

export const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};
