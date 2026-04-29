import { ArrowLeft, Newspaper, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mediaItems } from '@/data/mediaData';
import { useInView } from '@/hooks/useInView';
import insightsHeroBg from '@/assets/insights/insights-hero-bg.jpg';
import mediaThumbnail from '@/assets/insights/media-thumbnail.jpg';

const AllMediaPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [mediaRef, isMediaInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

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
            alt="Media background"
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
              <Link to="/insights#media">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </Button>

            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Newspaper className="w-3 h-3 mr-1" />
              All Media
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              News & <span className="text-primary">Media</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest news, partnerships, and achievements from ACT.
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section ref={mediaRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, idx) => (
              <Card
                key={item.id}
                className={`group border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-500 overflow-hidden ${
                  isMediaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(idx % 6) * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={mediaThumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-foreground hover:text-primary transition-colors line-clamp-3 cursor-pointer block mb-4"
                  >
                    {item.title}
                  </a>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Read Article
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllMediaPage;
