import { ArrowRight, Calendar, Clock, FileText, Award, Building2, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { blogPosts } from "@/data/blogData";
import { caseStudies, getIndustryColor, getCaseStudyImage } from "@/data/caseStudiesData";
import { mediaItems } from "@/data/mediaData";

// Import assets
import insightsHeroBg from "@/assets/insights/insights-hero-bg.jpg";
import mediaThumbnail from "@/assets/insights/media-thumbnail.jpg";

// Import logos for case study cards
import agibaLogo from "@/assets/success-stories/agiba-logo.png";
import redseaLogo from "@/assets/success-stories/redsea-logo.jpg";
import telecomLogo from "@/assets/success-stories/telecom-logo.png";
import sewedyLogo from "@/assets/success-stories/sewedy-logo.jpg";

const caseStudyLogos: Record<string, string> = {
  "agiba-data-center": agibaLogo,
  "sopc-data-center": agibaLogo,
  "ethydco-infrastructure": agibaLogo,
  "redsea-container-voip": redseaLogo,
  "telecom-egypt-data": telecomLogo,
  "knowledge-hub-aruba": sewedyLogo,
};

const InsightsPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [blogRef, isBlogInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [mediaRef, isMediaInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [caseStudiesRef, isCaseStudiesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  // Show only first 4 blogs on insights page
  const displayedBlogs = blogPosts.slice(0, 4);

  // Show only first 4 case studies on insights page
  const displayedCaseStudies = caseStudies.slice(0, 4);

  // Show only first 3 media items on insights page
  const displayedMedia = mediaItems.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={insightsHeroBg} alt="Insights background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              Insights & Resources
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Stay Informed with <span className="text-primary">ACT Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our latest thoughts, news, and success stories from the world of technology and digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section ref={mediaRef} id="media" className="py-20 md:py-28 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div
            className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12 transition-all duration-700 ${isMediaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                <Newspaper className="w-3 h-3 mr-1" />
                Media
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">News & Media</h2>
            </div>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/media">
                View All Media
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMedia.map((item, idx) => (
              <Card
                key={item.id}
                className={`group border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-500 overflow-hidden ${
                  isMediaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={mediaThumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-foreground hover:text-primary transition-colors line-clamp-3 cursor-pointer"
                  >
                    {item.title}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} id="blog" className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div
            className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12 transition-all duration-700 ${isBlogInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                <FileText className="w-3 h-3 mr-1" />
                Blog
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Latest Articles</h2>
            </div>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/blogs">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedBlogs.map((post, idx) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card
                  className={`group h-full border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                    isBlogInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0 w-fit">
                      {post.category}
                    </Badge>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies & Success Stories Section */}
      <section ref={caseStudiesRef} id="case-studies" className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div
            className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12 transition-all duration-700 ${isCaseStudiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                <Award className="w-3 h-3 mr-1" />
                Case Studies
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Success Stories</h2>
            </div>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/case-studies">
                View All Stories
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCaseStudies.map((study, idx) => (
              <Link key={study.id} to={`/case-study/${study.id}`}>
                <Card
                  className={`group h-full border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden ${
                    isCaseStudiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={getCaseStudyImage(study)}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    {caseStudyLogos[study.id] && (
                      <div className="absolute top-3 right-3 w-12 h-12 rounded-lg overflow-hidden">
                        <img
                          src={caseStudyLogos[study.id]}
                          alt={study.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <Badge className={`${getIndustryColor(study.industry)} border`}>{study.industry}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{study.company}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-secondary/80 p-0 h-auto group/btn w-fit mt-auto"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsPage;
