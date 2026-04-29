import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import VisionMission from '@/components/about/VisionMission';
import Milestones from '@/components/about/Milestones';
import ChairmanMessage from '@/components/about/ChairmanMessage';
import ManagementTeam from '@/components/about/ManagementTeam';

const HospitalityAboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <VisionMission />
        <Milestones />
        <ChairmanMessage />
        <ManagementTeam />
      </main>
      <Footer />
    </div>
  );
};

export default HospitalityAboutPage;
