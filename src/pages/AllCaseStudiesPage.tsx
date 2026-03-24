import { useState, useEffect } from "react";
import { ArrowLeft, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  fetchCaseStudies,
  getStrapiImageUrl,
  CaseStudy,
} from "@/services/caseStudiesService";
import { useInView } from "@/hooks/useInView";
import insightsHeroBg from "@/assets/insights/insights-hero-bg.jpg";

const AllCaseStudiesPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [studiesRef, isStudiesInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        const data = await fetchCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error loading case studies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCaseStudies();
  }, []);

  // Get unique industries plus hospitality filters
  const industries = [
    "All",
    ...Array.from(new Set(caseStudies.map((cs) => cs.industry))),
    "F&B",
    "Hotels & Resorts",
  ];

  // Filter case studies based on active filter
  const filteredCaseStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={insightsHeroBg}
            alt="Case Studies background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              isHeroInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <Link to="/insights">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </Button>

            <Badge
              variant="outline"
              className="mb-6 border-primary/50 text-primary"
            >
              <Award className="w-3 h-3 mr-1" />
              All Case Studies
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore how ACT has helped organizations across industries
              transform their operations and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 border-b border-border/50 sticky top-[72px] bg-background/95 backdrop-blur-sm z-40">
        <div className="container-width px-4 md:px-8">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-muted-foreground font-medium">
              Filter by Industry
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => {
                const isActive = activeFilter === industry;
                const count = industry === "All" 
                  ? caseStudies.length 
                  : caseStudies.filter((cs) => cs.industry === industry).length;
                
                return (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                        : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {industry}
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive 
                          ? "bg-white/20 text-white" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {count}
                      </span>
                    </span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={studiesRef} className="py-16 md:py-24">
        <div className="container-width px-4 md:px-8">
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Loading case studies...
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((caseStudy, idx) => (
                <Link key={caseStudy.slug} to={`/case-study/${caseStudy.slug}`}>
                  <Card
                    className={`group h-full border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden ${
                      isStudiesInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(idx % 6) * 50}ms` }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={
                          getStrapiImageUrl(caseStudy.coverImage?.url) ||
                          getStrapiImageUrl(caseStudy.backgroundImage?.url)
                        }
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      {/* Client Logo Overlay */}
                      {caseStudy.logo && (
                        <div className="absolute top-3 right-3 w-12 h-12 rounded-lg bg-white/90 backdrop-blur-sm p-1.5 shadow-lg">
                          <img
                            src={getStrapiImageUrl(caseStudy.logo?.url)}
                            alt={caseStudy.client || "Client logo"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-primary/90 text-white border-0">
                          {caseStudy.industry}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5 flex flex-col">
                      {caseStudy.client && (
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {caseStudy.client}
                          </span>
                        </div>
                      )}
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {caseStudy.title}
                      </h3>
                      {caseStudy.excerpt && (
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                          {caseStudy.excerpt}
                        </p>
                      )}
                      {caseStudy.technologies &&
                        caseStudy.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {caseStudy.technologies
                              .slice(0, 3)
                              .map((tech, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs bg-background/50"
                                >
                                  {tech.label}
                                </Badge>
                              ))}
                          </div>
                        )}
                      <div className="flex items-center gap-1 text-primary text-sm mt-auto">
                        <Award className="w-3 h-3" />
                        Read Case Study
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* No results message */}
          {!isLoading && filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No case studies found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCaseStudiesPage;
