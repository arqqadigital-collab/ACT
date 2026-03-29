import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import PartnersSection from '@/components/PartnersSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsCounter />
        <SolutionsSection />
        <ServicesSection />
        <IndustriesSection />
        <SuccessStoriesSection />
        <PartnersSection />
        <GlobalMapSection />
        <CTASection />
      </main>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
