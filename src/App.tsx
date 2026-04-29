import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ChairmanMessagePage from "./pages/ChairmanMessagePage";
import ManagementTeamPage from "./pages/ManagementTeamPage";
import TeamMemberPage from "./pages/TeamMemberPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import CareersPage from "./pages/CareersPage";
import ContactUsPage from "./pages/ContactUsPage";
import InsightsPage from "./pages/InsightsPage";
import AllBlogsPage from "./pages/AllBlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AllCaseStudiesPage from "./pages/AllCaseStudiesPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import AllMediaPage from "./pages/AllMediaPage";
import OilGasPage from "./pages/industries/OilGasPage";
import EducationPage from "./pages/industries/EducationPage";
import TelecomPage from "./pages/industries/TelecomPage";
import PublicSectorPage from "./pages/industries/PublicSectorPage";
import HospitalityPage from "./pages/HospitalityPage";
import HotelsResortsPage from "./pages/HotelsResortsPage";
import FnBPage from "./pages/FnBPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import HospitalityAboutPage from "./pages/HospitalityAboutPage";
import HospitalityCareersPage from "./pages/HospitalityCareersPage";
import HospitalityInsightsPage from "./pages/HospitalityInsightsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFound from "./pages/NotFound";
import ChatAgent from "./components/ChatAgent";
import TermsConditionsPage from './pages/TermsConditionsPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/blogs" element={<AllBlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          <Route path="/case-studies" element={<AllCaseStudiesPage />} />
          <Route path="/case-study/:caseStudyId" element={<CaseStudyDetailPage />} />
          <Route path="/media" element={<AllMediaPage />} />
          <Route path="/industries/oil-gas" element={<OilGasPage />} />
          <Route path="/industries/education" element={<EducationPage />} />
          <Route path="/industries/telecom" element={<TelecomPage />} />
          <Route path="/industries/public-sector" element={<PublicSectorPage />} />
          <Route path="/hospitality" element={<HospitalityPage />} />
          <Route path="/hotels-resorts" element={<HotelsResortsPage />} />
          <Route path="/fnb" element={<FnBPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/hospitality/about" element={<HospitalityAboutPage />} />
          <Route path="/hospitality/careers" element={<HospitalityCareersPage />} />
          <Route path="/hospitality/insights" element={<HospitalityInsightsPage />} />
          <Route path="/chairman-message" element={<ChairmanMessagePage />} />
          <Route path="/management-team" element={<ManagementTeamPage />} />
          <Route path="/team/:memberId" element={<TeamMemberPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatAgent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;