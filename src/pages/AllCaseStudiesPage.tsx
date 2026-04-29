import { useState } from 'react';
import { ArrowLeft, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { caseStudies, getIndustryColor, getCaseStudyImage } from '@/data/caseStudiesData';
import { useInView } from '@/hooks/useInView';
import insightsHeroBg from '@/assets/insights/insights-hero-bg.jpg';

const AllCaseStudiesPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [studiesRef, isStudiesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Get unique industries
  const industries = ['All', ...Array.from(new Set(caseStudies.map((cs) => cs.industry)))];

  // Filter case studies based on active filter
  const filteredCaseStudies = activeFilter === 'All' 
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
              isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Award className="w-3 h-3 mr-1" />
              All Case Studies
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore how ACT has helped organizations across industries transform their operations and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border/50 sticky top-[72px] bg-background/95 backdrop-blur-sm z-40">
        <div className="container-width px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={activeFilter === industry ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(industry)}
                className={`transition-all duration-300 ${
                  activeFilter === industry 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-border/50 hover:border-primary/50 hover:text-primary'
                }`}
              >
                {industry}
                {industry !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    ({caseStudies.filter((cs) => cs.industry === industry).length})
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={studiesRef} className="py-16 md:py-24">
        <div className="container-width px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((caseStudy, idx) => (
              <Link key={caseStudy.id} to={`/case-study/${caseStudy.id}`}>
                <Card
                  className={`group h-full border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden ${
                    isStudiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(idx % 6) * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={getCaseStudyImage(caseStudy)} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge className={`${getIndustryColor(caseStudy.industry)} border`}>
                        {caseStudy.industry}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{caseStudy.company}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                      {caseStudy.description}
                    </p>
                    {caseStudy.technologies && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {caseStudy.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-background/50">
                            {tech}
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

          {/* No results message */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCaseStudiesPage;
