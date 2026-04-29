import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, Lightbulb, Award, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { caseStudies, getIndustryColor, getCaseStudyImage } from '@/data/caseStudiesData';
import { useInView } from '@/hooks/useInView';

const CaseStudyDetailPage = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [contentRef, isContentInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const caseStudy = caseStudies.find((cs) => cs.id === caseStudyId);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-width px-4 md:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild variant="hero">
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related case studies (same industry, excluding current)
  const relatedCaseStudies = caseStudies
    .filter((cs) => cs.industry === caseStudy.industry && cs.id !== caseStudy.id)
    .slice(0, 3);

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
            src={getCaseStudyImage(caseStudy)}
            alt="Case Study background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
              <Badge className={`${getIndustryColor(caseStudy.industry)} border`}>
                {caseStudy.industry}
              </Badge>
              <Badge variant="outline" className="border-primary/50 text-primary">
                <Building2 className="w-3 h-3 mr-1" />
                {caseStudy.company}
              </Badge>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Technologies */}
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {caseStudy.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-card/50 text-foreground border border-border/50">
                    {tech}
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
              isContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Challenges */}
            <Card className="border-border/50 bg-card/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Challenges</h2>
                </div>
                <ul className="space-y-3">
                  {caseStudy.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-border/50 bg-card/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Solution</h2>
                </div>
                <ul className="space-y-3">
                  {caseStudy.solution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-border/50 bg-card/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Results</h2>
                </div>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact ACT today to learn how we can help you achieve similar results.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container-width px-4 md:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Related Case Studies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-study/${cs.id}`}
                  className="group block p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`${getIndustryColor(cs.industry)} border text-xs`}>
                      {cs.industry}
                    </Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cs.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{cs.company}</p>
                  <div className="flex items-center gap-1 text-primary text-sm">
                    <Award className="w-3 h-3" />
                    Read Case Study
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
