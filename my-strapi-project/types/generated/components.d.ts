import type { Schema, Struct } from '@strapi/strapi';

export interface CareersApplicationField extends Struct.ComponentSchema {
  collectionName: 'components_careers_application_fields';
  info: {
    description: 'Dynamic form field for job applications';
    displayName: 'Application Field';
  };
  attributes: {
    fieldLabel: Schema.Attribute.String & Schema.Attribute.Required;
    fieldName: Schema.Attribute.String & Schema.Attribute.Required;
    fieldType: Schema.Attribute.Enumeration<
      ['text', 'email', 'number', 'textarea', 'select', 'file']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    options: Schema.Attribute.JSON;
    placeholder: Schema.Attribute.String;
    validationRules: Schema.Attribute.JSON;
  };
}

export interface ContactOffice extends Struct.ComponentSchema {
  collectionName: 'components_contact_offices';
  info: {
    description: 'Office location information';
    displayName: 'Office';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    fax: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentBlogItem extends Struct.ComponentSchema {
  collectionName: 'components_content_blog_items';
  info: {
    description: 'Individual blog post entry';
    displayName: 'Blog Item';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    authorRole: Schema.Attribute.String;
    category: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    coverImage: Schema.Attribute.Media<'images'>;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    excerpt: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    readTime: Schema.Attribute.String;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.Component<'content.tag-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentCaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_content_case_study_items';
  info: {
    description: 'Individual case study entry';
    displayName: 'Case Study Item';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    category: Schema.Attribute.String & Schema.Attribute.Required;
    challenge: Schema.Attribute.RichText;
    client: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<'images'>;
    excerpt: Schema.Attribute.Text;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Building'>;
    industry: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'>;
    metrics: Schema.Attribute.Component<'content.metric-item', true>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    results: Schema.Attribute.RichText;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    solution: Schema.Attribute.RichText;
    technologies: Schema.Attribute.Component<'content.tag-item', true>;
    testimonial: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_content_feature_items';
  info: {
    description: 'Feature or expertise item with icon, title and description';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    iconName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CheckCircle'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentIndustryItem extends Struct.ComponentSchema {
  collectionName: 'components_content_industry_items';
  info: {
    description: 'Complete industry entry with all sections';
    displayName: 'Industry Item';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images'>;
    heroSection: Schema.Attribute.Component<'sections.hero-section', false>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    ourExpertise: Schema.Attribute.Component<'content.feature-item', true>;
    partners: Schema.Attribute.Component<'content.partner', true>;
    shortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    successStoriesText: Schema.Attribute.RichText;
    technologySolutions: Schema.Attribute.Component<
      'content.solution-item',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whyChooseUs: Schema.Attribute.Component<'content.feature-item', true>;
  };
}

export interface ContentMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_content_media_items';
  info: {
    description: 'Individual media/news entry';
    displayName: 'Media Item';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    excerpt: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    slug: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentMetricItem extends Struct.ComponentSchema {
  collectionName: 'components_content_metric_items';
  info: {
    description: 'Key metric or statistic';
    displayName: 'Metric Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentPartner extends Struct.ComponentSchema {
  collectionName: 'components_content_partners';
  info: {
    description: 'Partner logo and name';
    displayName: 'Partner';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_content_solution_items';
  info: {
    description: 'Solution with title, description and optional features list';
    displayName: 'Solution Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Cpu'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentTagItem extends Struct.ComponentSchema {
  collectionName: 'components_content_tag_items';
  info: {
    description: 'Simple tag or label';
    displayName: 'Tag Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentTechnologyTag extends Struct.ComponentSchema {
  collectionName: 'components_content_technology_tags';
  info: {
    description: 'Technology or tag label';
    displayName: 'Technology Tag';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: 'Hero section with title, description and background image';
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServicesServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_services_service_items';
  info: {
    description: 'Individual service with all its content and images';
    displayName: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'server'>;
    items: Schema.Attribute.JSON;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    pageDescription: Schema.Attribute.Text;
    pageImage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    pageTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedAddOnAppItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_add_on_app_items';
  info: {
    description: 'A single add-on application card with icon, title, description and optional sub-items list';
    displayName: 'Add-On App Item';
    icon: 'puzzle-piece';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Users'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    subItems: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    description: 'A single benefit card with icon and text';
    displayName: 'Benefit Item';
    icon: 'star';
  };
  attributes: {
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sparkles'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedCaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_case_study_items';
  info: {
    description: 'Individual case study with title, metric, and description';
    displayName: 'Case Study Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    metric: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCoreSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_core_solution_items';
  info: {
    description: 'A single core solution card with icon, title, description and features list';
    displayName: 'Core Solution Item';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.JSON;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Building2'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedEntertainmentWellnessItem
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_entertainment_wellness_items';
  info: {
    description: 'A single entertainment & wellness stacking card item';
    displayName: 'Entertainment Wellness Item';
    icon: 'heart';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ticket'>;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: 'A single FAQ question and answer item';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    showTable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedHardwareFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_hardware_feature_items';
  info: {
    description: 'A single hardware feature card with icon, title, and description';
    displayName: 'Hardware Feature Item';
    icon: 'monitor';
  };
  attributes: {
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Monitor'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHospitalitySolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_hospitality_solutions';
  info: {
    description: 'A hospitality solution card with label, title, description, icon and image';
    displayName: 'Hospitality Solution';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Hotel'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHospitalityStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_hospitality_stats';
  info: {
    description: 'Hospitality statistics item';
    displayName: 'Hospitality Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    suffix: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    value: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedIntelligenceFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_intelligence_feature_items';
  info: {
    description: 'A single business intelligence feature with id, title, description and image';
    displayName: 'Intelligence Feature Item';
    icon: 'chartLine';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    featureId: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPartnerBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_badges';
  info: {
    description: 'A partner badge with logo and alt text';
    displayName: 'Partner Badge';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface SharedProfessionalService extends Struct.ComponentSchema {
  collectionName: 'components_shared_professional_services';
  info: {
    description: 'A professional service item with title, description and image';
    displayName: 'Professional Service';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSecuritySystemItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_security_system_items';
  info: {
    description: 'A single physical security system with icon, title, image and items list';
    displayName: 'Security System Item';
    icon: 'shield';
  };
  attributes: {
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Camera'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.JSON;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    description: 'Individual statistic item';
    displayName: 'Stat Item';
  };
  attributes: {
    end: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Calendar'>;
    iconSize: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<32>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    suffix: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
  };
}

export interface SharedSuccessStoryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_success_story_items';
  info: {
    description: 'A single success story with category, title, subtitle and image';
    displayName: 'Success Story Item';
    icon: 'star';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSupportStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_support_stat_items';
  info: {
    description: 'A single stat item for the support page';
    displayName: 'Support Stat Item';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_items';
  info: {
    description: 'A single reason/item for the Why Choose ACT section';
    displayName: 'Why Choose Item';
    icon: 'check-circle';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Award'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolutionsSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_solutions_solution_items';
  info: {
    description: 'Individual solution with all its content and images';
    displayName: 'Solution Item';
  };
  attributes: {
    additionalContent: Schema.Attribute.JSON;
    capabilities: Schema.Attribute.JSON;
    capabilitiesTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Our Core Capabilities:'>;
    cardImage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MonitorCog'>;
    number: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    pageDescription: Schema.Attribute.Text;
    pageImage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    pageTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    shortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'careers.application-field': CareersApplicationField;
      'contact.office': ContactOffice;
      'content.blog-item': ContentBlogItem;
      'content.case-study-item': ContentCaseStudyItem;
      'content.feature-item': ContentFeatureItem;
      'content.industry-item': ContentIndustryItem;
      'content.media-item': ContentMediaItem;
      'content.metric-item': ContentMetricItem;
      'content.partner': ContentPartner;
      'content.solution-item': ContentSolutionItem;
      'content.tag-item': ContentTagItem;
      'content.technology-tag': ContentTechnologyTag;
      'sections.hero-section': SectionsHeroSection;
      'services.service-item': ServicesServiceItem;
      'shared.add-on-app-item': SharedAddOnAppItem;
      'shared.benefit-item': SharedBenefitItem;
      'shared.case-study-item': SharedCaseStudyItem;
      'shared.core-solution-item': SharedCoreSolutionItem;
      'shared.entertainment-wellness-item': SharedEntertainmentWellnessItem;
      'shared.faq-item': SharedFaqItem;
      'shared.hardware-feature-item': SharedHardwareFeatureItem;
      'shared.hospitality-solution': SharedHospitalitySolution;
      'shared.hospitality-stat': SharedHospitalityStat;
      'shared.intelligence-feature-item': SharedIntelligenceFeatureItem;
      'shared.media': SharedMedia;
      'shared.partner-badge': SharedPartnerBadge;
      'shared.professional-service': SharedProfessionalService;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.security-system-item': SharedSecuritySystemItem;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stat-item': SharedStatItem;
      'shared.success-story-item': SharedSuccessStoryItem;
      'shared.support-stat-item': SharedSupportStatItem;
      'shared.why-choose-item': SharedWhyChooseItem;
      'solutions.solution-item': SolutionsSolutionItem;
    }
  }
}
