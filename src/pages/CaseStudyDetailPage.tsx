import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Award,
  Building2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  fetchCaseStudyBySlug,
  getStrapiImageUrl,
  CaseStudy,
} from "@/services/caseStudiesService";
import { useInView } from "@/hooks/useInView";

const CaseStudyDetailPage = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [contentRef, isContentInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!caseStudyId) return;

      try {
        const data = await fetchCaseStudyBySlug(caseStudyId);
        setCaseStudy(data);
      } catch (error) {
        console.error("Error loading case study:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCaseStudy();
  }, [caseStudyId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-width px-4 md:px-8 py-32 text-center">
          <p className="text-muted-foreground text-lg">Loading case study...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-width px-4 md:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Case Study Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Button asChild variant="hero">
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

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
            src={
              getStrapiImageUrl(caseStudy.backgroundImage?.url) ||
              getStrapiImageUrl(caseStudy.coverImage?.url)
            }
            alt="Case Study background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${
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
              <Link to="/insights#case-studies">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-primary/90 text-white border-0">
                {caseStudy.industry}
              </Badge>
              {caseStudy.client && (
                <Badge
                  variant="outline"
                  className="border-primary/50 text-primary"
                >
                  <Building2 className="w-3 h-3 mr-1" />
                  {caseStudy.client}
                </Badge>
              )}
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            {caseStudy.excerpt && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.excerpt}
              </p>
            )}

            {/* Technologies */}
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {caseStudy.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-card/50 text-foreground border border-border/50"
                  >
                    {tech.label}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container-width px-4 md:px-8">
          <div
            className={`max-w-4xl mx-auto space-y-12 transition-all duration-700 ${
              isContentInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            {/* Challenges */}
            {caseStudy.challenge && (
              <Card className="border-border/50 bg-card/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Challenges
                    </h2>
                  </div>
                  <div
                    className="prose prose-invert max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
                  />
                </CardContent>
              </Card>
            )}

            {/* Solution */}
            {caseStudy.solution && (
              <Card className="border-border/50 bg-card/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Solution
                    </h2>
                  </div>
                  <div
                    className="prose prose-invert max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
                  />
                </CardContent>
              </Card>
            )}

            {/* Results */}
            {caseStudy.results && (
              <Card className="border-border/50 bg-card/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Results
                    </h2>
                  </div>
                  <div
                    className="prose prose-invert max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: caseStudy.results }}
                  />

                  {/* Metrics */}
                  {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-card/50 border border-border/50"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <Card className="border-border/50 bg-primary/5">
                <CardContent className="p-8">
                  <div
                    className="prose prose-invert max-w-none text-foreground italic"
                    dangerouslySetInnerHTML={{ __html: caseStudy.testimonial }}
                  />
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact ACT today to learn how we can help you achieve similar
                results.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
