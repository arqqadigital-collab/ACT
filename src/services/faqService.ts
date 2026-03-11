const API_URL =  'https://positive-actor-b87a792057.strapiapp.com';

/**
 * FAQ Service for fetching FAQ data from Strapi CMS
 * 
 * Strapi Structure Required:
 * - Single Type: "faq"
 * - Fields:
 *   - title (Text)
 *   - subtitle (Text)
 *   - faqs (Component - Repeatable: "faq.faq-item")
 *     - question (Text)
 *     - answer (Rich Text / Long Text)
 *     - order (Number)
 *     - showTable (Boolean) - Set to true for Q6 to display priority table
 * 
 * To manage FAQs in Strapi:
 * 1. Go to Content Manager > Single Types > FAQ
 * 2. Add/Edit/Delete FAQ items in the "faqs" component
 * 3. Set the order field to control display sequence
 * 4. Enable "showTable" for questions that need the priority table
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order?: number;
  showTable?: boolean;
}

export interface FAQPageData {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export const getFAQs = async (): Promise<FAQPageData | null> => {
  try {
    // Single type endpoint for FAQ
    const response = await fetch(`${API_URL}/api/faq?populate=faqs`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }

    const result = await response.json();
    const data = result.data;

    if (!data) {
      return null;
    }

    // Sort FAQs by order
    const faqs = (data.faqs || [])
      .sort((a: FAQItem, b: FAQItem) => (a.order || 0) - (b.order || 0))
      .map((faq: FAQItem) => ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
        showTable: faq.showTable || false,
      }));

    return {
      title: data.title || 'Frequently Asked Questions',
      subtitle: data.subtitle || 'Explore step-by-step guides, troubleshooting tips, and helpful articles curated for your business needs.',
      faqs,
    };
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return null;
  }
};
