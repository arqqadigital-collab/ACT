const API_URL = import.meta.env.VITE_API_URL || "https://positive-actor-b87a792057.strapiapp.com";

export interface CaseStudyItem {
  title: string;
  metric: string;
  description: string;
  order: number;
}

export interface HotelsCaseStudiesData {
  sectionTitle?: string;
  sectionSubtitle?: string;
  caseStudies: CaseStudyItem[];
}

interface StrapiCaseStudyItem {
  title: string;
  metric: string;
  description: string;
  order?: number;
}

export async function fetchHotelsCaseStudies(): Promise<HotelsCaseStudiesData | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/hotels-case-studies?populate=caseStudies`
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch hotels case studies: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const json = await response.json();
    const data = json.data;

    if (!data) {
      return null;
    }

    const caseStudies = (data.caseStudies || [])
      .map((item: StrapiCaseStudyItem) => ({
        title: item.title,
        metric: item.metric,
        description: item.description,
        order: item.order || 0,
      }))
      .sort((a: CaseStudyItem, b: CaseStudyItem) => a.order - b.order);

    return {
      sectionTitle: data.sectionTitle,
      sectionSubtitle: data.sectionSubtitle,
      caseStudies,
    };
  } catch (error) {
    console.error("Error fetching hotels case studies:", error);
    return null;
  }
}
