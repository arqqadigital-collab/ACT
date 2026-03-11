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
import JobDetailPage from "./pages/JobDetailPage";
import AllJobsPage from "./pages/AllJobsPage";
import ContactUsPage from "./pages/ContactUsPage";
import InsightsPage from "./pages/InsightsPage";
import AllBlogsPage from "./pages/AllBlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AllCaseStudiesPage from "./pages/AllCaseStudiesPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import AllMediaPage from "./pages/AllMediaPage";
import DynamicIndustryPage from "./pages/DynamicIndustryPage";
import HospitalityPage from "./pages/HospitalityPage";
import HotelsResortsPage from "./pages/HotelsResortsPage";
import FnBPage from "./pages/FnBPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";

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
          <Route path="/careers/openings" element={<AllJobsPage />} />
          <Route path="/careers/:slug" element={<JobDetailPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/blogs" element={<AllBlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          <Route path="/case-studies" element={<AllCaseStudiesPage />} />
          <Route
            path="/case-study/:caseStudyId"
            element={<CaseStudyDetailPage />}
          />
          <Route path="/media" element={<AllMediaPage />} />
          <Route path="/industries/:slug" element={<DynamicIndustryPage />} />
          <Route path="/hospitality" element={<HospitalityPage />} />
          <Route path="/hotels-resorts" element={<HotelsResortsPage />} />
          <Route path="/fnb" element={<FnBPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/chairman-message" element={<ChairmanMessagePage />} />
          <Route path="/management-team" element={<ManagementTeamPage />} />
          <Route path="/team/:memberId" element={<TeamMemberPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
