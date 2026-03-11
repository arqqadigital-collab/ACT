import { Phone, Mail, MessageCircle, LucideIcon } from 'lucide-react';

const API_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

// Icon mapping for contact channels
const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MessageCircle,
  phone: Phone,
  mail: Mail,
  messagecircle: MessageCircle,
  message: MessageCircle,
};

export interface HeroSection {
  badge: string;
  title: string;
  highlightedText: string;
  description: string;
}

export interface FormStep {
  id: string;
  title: string;
  description: string;
}

export interface SystemOption {
  name: string;
  order?: number;
}

export interface ContactChannel {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  actionLabel: string;
}

export interface FormSection {
  title: string;
  subtitle: string;
  steps: FormStep[];
}

export interface ContactSection {
  title: string;
  subtitle: string;
}

interface StepItem {
  id?: string;
  stepId?: string;
  title: string;
  description: string;
  order?: number;
}

interface ChannelItem {
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLabel: string;
  order?: number;
}

export interface SupportPageData {
  heroSection: HeroSection;
  formSection: FormSection;
  systemOptions: string[];
  contactSection: ContactSection;
  contactChannels: ContactChannel[];
}

export const getSupportPageData = async (): Promise<SupportPageData | null> => {
  try {
    const response = await fetch(
      `${API_URL}/api/support-page?populate[heroSection]=*&populate[formSection][populate]=steps&populate[systemOptions]=*&populate[contactSection]=*&populate[contactChannels]=*`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch support page data');
    }

    const result = await response.json();
    const data = result.data;

    if (!data) {
      return null;
    }

    // Parse hero section
    const heroSection: HeroSection = {
      badge: data.heroSection?.badge || 'ACT Support',
      title: data.heroSection?.title || "We're Here to",
      highlightedText: data.heroSection?.highlightedText || 'Support You',
      description:
        data.heroSection?.description ||
        "At ACT, we're always here to support you. Whether you're searching for quick answers, need expert assistance, or want to submit a service request, our support team is ready to help you every step of the way.",
    };

    // Parse form section
    const formSteps: FormStep[] = (data.formSection?.steps || [])
      .sort((a: StepItem, b: StepItem) => (a.order || 0) - (b.order || 0))
      .map((step: StepItem) => ({
        id: step.id || step.stepId,
        title: step.title,
        description: step.description,
      }));

    const formSection: FormSection = {
      title: data.formSection?.title || 'How Can We Help You Today?',
      subtitle:
        data.formSection?.subtitle ||
        "If you're experiencing an issue, please fill out the form below to open a support ticket. Our specialized support team will get back to you promptly based on the priority of your request.",
      steps: formSteps.length > 0 ? formSteps : [
        { id: 'contact', title: 'Contact Info', description: 'Your details' },
        { id: 'system', title: 'System Selection', description: 'Select affected system' },
        { id: 'issue', title: 'Issue Details', description: 'Describe the problem' },
      ],
    };

    // Parse system options
    const systemOptions: string[] = (data.systemOptions || [])
      .sort((a: SystemOption, b: SystemOption) => (a.order || 0) - (b.order || 0))
      .map((option: SystemOption) => option.name);

    // Parse contact section
    const contactSection: ContactSection = {
      title: data.contactSection?.title || 'Prefer Another Way to Reach Us?',
      subtitle:
        data.contactSection?.subtitle ||
        'We offer multiple channels to make support fast and convenient.',
    };

    // Parse contact channels
    const contactChannels: ContactChannel[] = (data.contactChannels || [])
      .sort((a: ChannelItem, b: ChannelItem) => (a.order || 0) - (b.order || 0))
      .map((channel: ChannelItem) => ({
        icon: iconMap[channel.icon?.toLowerCase()] || Phone,
        title: channel.title,
        description: channel.description,
        action: channel.action,
        actionLabel: channel.actionLabel,
      }));

    return {
      heroSection,
      formSection,
      systemOptions: systemOptions.length > 0 ? systemOptions : [
        'Point of Sale (POS)',
        'Property Management System (PMS)',
        'SUN Financial System',
        'ERP System',
        'Inventory / Procurement',
        'Network / Infrastructure',
      ],
      contactSection,
      contactChannels: contactChannels.length > 0 ? contactChannels : [
        {
          icon: Phone,
          title: 'Call Us',
          description: 'You can reach our dedicated support line during business hours.',
          action: '19488',
          actionLabel: 'Egypt Hotline',
        },
        {
          icon: MessageCircle,
          title: 'Chat With Us',
          description: 'Use our integrated chatbot for instant assistance or to open a support case.',
          action: 'Start Chat',
          actionLabel: 'Live Support',
        },
        {
          icon: Mail,
          title: 'Email Us',
          description: 'Our team will respond promptly to address your inquiry.',
          action: 'support@act.eg',
          actionLabel: 'Email Support',
        },
      ],
    };
  } catch (error) {
    console.error('Error fetching support page data:', error);
    return null;
  }
};
