import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useState, useEffect } from "react";
import {
  fetchHeroSection,
  type HeroSection as HeroSectionType,
} from "@/services/heroService";

const HeroSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [heroData, setHeroData] = useState<HeroSectionType | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data
  const headline =
    heroData?.headline ||
    "Empowering Organizations with Trusted Technology Solutions in Egypt & Beyond";
  const description =
    heroData?.description ||
    "Since 1988, ACT has been at the forefront of Egypt's ICT sector, delivering innovative technology solutions and trusted services that empower businesses, governments, and communities to thrive.";
  const videoUrl = heroData?.backgroundVideo?.url
    ? `${import.meta.env.VITE_STRAPI_URL || "https://positive-actor-b87a792057.strapiapp.com"}${heroData.backgroundVideo.url}`
    : heroData?.videoUrl || "/videos/hero-bg.mp4";

  useEffect(() => {
    const loadHeroData = async () => {
      const data = await fetchHeroSection();
      if (data) {
        setHeroData(data);
      }
      setLoading(false);
    };

    loadHeroData();
  }, []);
  const { displayedText, isComplete } = useTypewriter({
    text: headline,
    speed: 40,
    delay: 500,
    enabled: isInView,
  });

  // Split the displayed text to apply gradient to "Trusted Technology"
  const renderHeadline = () => {
    const gradientPhrase = "Trusted Technology";
    const startIndex = displayedText.indexOf(gradientPhrase);

    if (startIndex === -1) {
      return (
        <>
          {displayedText}
          {!isComplete && (
            <span className="inline-block w-0.5 h-[1em] bg-primary animate-pulse ml-1" />
          )}
        </>
      );
    }

    const before = displayedText.slice(0, startIndex);
    const gradientText = displayedText.slice(
      startIndex,
      startIndex + gradientPhrase.length,
    );
    const after = displayedText.slice(startIndex + gradientPhrase.length);

    return (
      <>
        {before}
        <span className="relative inline-block">
          <span className="text-gradient">{gradientText}</span>
        </span>
        {after}
        {!isComplete && (
          <span className="inline-block w-0.5 h-[1em] bg-primary animate-pulse ml-1" />
        )}
      </>
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Reduced Dark Overlay for more visibility */}
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 glow-gradient opacity-20 z-[1]" />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent z-[1]" />

      {/* Animated Glow Orbs - constrained to prevent overflow */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-primary/10 blur-[100px] animate-glow-pulse z-[1]" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 rounded-full bg-accent/10 blur-[80px] animate-glow-pulse z-[1]"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 container-width px-4 md:px-8 text-center pt-20 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-10"
        }`}
      >
        {/* Headline with Typewriter Effect */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 max-w-5xl mx-auto min-h-[2.5em] md:min-h-[2em]">
          {renderHeadline()}
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            isComplete ? "opacity-100 translate-y-0" : "opacity-1 translate-y-4"
          }`}
        >
          {description}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            isComplete ? "opacity-100 translate-y-0" : "opacity-1 translate-y-4"
          }`}
        >
          <Button variant="hero" size="xl" className="group" asChild>
            <Link to="/solutions">
              Explore Our 
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </Button>
          <Button variant="heroOutline" size="xl" className="group" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
