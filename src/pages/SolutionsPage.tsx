import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  Shield,
  Network,
  Server,
  CloudCog,
  Layers,
  Gauge,
  Activity,
  BrainCircuit,
  Bot,
  CheckCircle2,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useTypewriter } from "@/hooks/useTypewriter";
import {
  fetchSolutions,
  fetchSolutionsPageHero,
  getStrapiImageUrl,
  type Solution,
  type SolutionsPageHero,
} from "@/services/solutionsService";
import solutionsHeroBg from "@/assets/solutions/solutions-hero-bg.png";

// Import default solution image
import digitalImg from "@/assets/solutions/digital-solutions.jpg";

const SolutionsPage = () => {
  const location = useLocation();
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);
  const [heroData, setHeroData] = useState<SolutionsPageHero | null>(null);
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  const { displayedText, isComplete } = useTypewriter({
    text:
      heroData?.headline ||
      "Smart, Secure, and Scalable Solutions, Tailored for the Digital Future",
    speed: 40,
    delay: 500,
    enabled: isHeroInView && !!heroData,
  });

  useEffect(() => {
    const loadData = async () => {
      const [heroContent, solutionsData] = await Promise.all([
        fetchSolutionsPageHero(),
        fetchSolutions(),
      ]);
      setHeroData(heroContent);
      setSolutions(solutionsData);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Dynamic icon mapping (you can expand this as needed)
  const getIconForSolution = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      cpu: <Cpu className="h-6 w-6 text-primary" />,
      network: <Network className="h-6 w-6 text-primary" />,
      server: <Server className="h-6 w-6 text-primary" />,
      shield: <Shield className="h-6 w-6 text-primary" />,
      cloudcog: <CloudCog className="h-6 w-6 text-primary" />,
      layers: <Layers className="h-6 w-6 text-primary" />,
      gauge: <Gauge className="h-6 w-6 text-primary" />,
      activity: <Activity className="h-6 w-6 text-primary" />,
      braincircuit: <BrainCircuit className="h-6 w-6 text-primary" />,
      bot: <Bot className="h-6 w-6 text-primary" />,
    };
    // Fallback to Cpu icon if icon not found or empty
    return (
      icons[iconName?.toLowerCase()] || <Cpu className="h-6 w-6 text-primary" />
    );
  };

  // Dynamic Solution Section Component
  const SolutionSection = ({
    solution,
    index,
  }: {
    solution: Solution;
    index: number;
  }) => {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
    const isReversed = index % 2 !== 0;
    const bgClass = isReversed ? "bg-card/30" : "";

    return (
      <section
        ref={ref}
        id={solution.slug}
        className={`py-20 scroll-mt-24 ${bgClass}`}
      >
        <div className="container-width px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div
              className={`relative ${isReversed ? "order-2 lg:order-1" : "order-2"} transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : `opacity-1 ${isReversed ? "-translate-x-10" : "translate-x-10"}`
              }`}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={solution.pageImage}
                  alt={solution.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className={`absolute -bottom-4 ${isReversed ? "-right-4" : "-left-4"} w-24 h-24 bg-primary/20 rounded-2xl -z-10`}
              />
              <div
                className={`absolute -top-4 ${isReversed ? "-left-4" : "-right-4"} w-32 h-32 bg-accent/10 rounded-full -z-10`}
              />
            </div>

            {/* Text Column */}
            <div
              className={`${isReversed ? "order-1 lg:order-2" : "order-1"} transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : `opacity-1 ${isReversed ? "translate-x-10" : "-translate-x-10"}`
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {getIconForSolution(solution.icon)}
                </div>
                <span className="text-primary font-semibold">
                  {solution.number}. {solution.title}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {solution.pageTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {solution.pageDescription}
              </p>
              {solution.capabilities && solution.capabilities.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {solution.capabilitiesTitle || "Our Core Capabilities:"}
                  </h3>
                  {solution.additionalContent && (
                    <p className="text-muted-foreground mb-4">
                      {solution.additionalContent}
                    </p>
                  )}
                  <ul
                    className={`space-y-3 ${solution.capabilities.length > 6 ? "grid grid-cols-2 gap-3" : ""}`}
                  >
                    {solution.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2
                          className={`${solution.capabilities!.length > 6 ? "h-4 w-4" : "h-5 w-5"} text-primary flex-shrink-0`}
                        />
                        <span
                          className={`${solution.capabilities!.length > 6 ? "text-sm" : ""} text-foreground`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-8">
                <Button
                  variant={index % 2 === 0 ? "outline" : "accent"}
                  asChild
                >
                  <Link to="/contact">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        {loading ? (
          <section className="relative min-h-[90vh] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </section>
        ) : (
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Background Image with Parallax and Animation */}
            <div
              className="absolute inset-0 z-0"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <img
                src={
                  heroData?.backgroundImage?.url
                    ? getStrapiImageUrl(heroData.backgroundImage.url)
                    : solutionsHeroBg
                }
                alt="Solutions Background"
                className="w-full h-[120%] object-cover object-center animate-float-slow"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />
            </div>

            {/* Content */}
            <div
              ref={heroRef}
              className={`relative z-10 container-width px-4 md:px-8 text-center transition-all duration-1000 ${
                isHeroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-1 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-6">
                {heroData?.badge || "Our Solutions"}
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto min-h-[1.2em]">
                {heroData?.highlightText
                  ? displayedText
                      .split(heroData.highlightText)
                      .map((part, i) =>
                        i === 0 ? (
                          <span key={i}>
                            {part}
                            {displayedText.includes(
                              heroData.highlightText!,
                            ) && (
                              <span className="text-gradient">
                                {heroData.highlightText}
                              </span>
                            )}
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        ),
                      )
                  : displayedText}
                {!isComplete && (
                  <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
                )}
              </h1>

              <p
                className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
                  isComplete
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-4"
                }`}
              >
                {heroData?.description}
                {heroData?.subDescription && (
                  <>
                    <br />
                    <br />
                    {heroData.subDescription}
                  </>
                )}
              </p>

              <div
                className={`mt-8 transition-all duration-700 delay-700 ${
                  isComplete
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-4"
                }`}
              >
                <Button variant="accent" size="lg" asChild>
                  <Link to={heroData?.ctaLink || "/contact"}>
                    {heroData?.ctaText || "Let's Talk"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Parallax Transition */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
          </section>
        )}

        {/* Dynamic Solutions Sections */}
        {!loading &&
          solutions.map((solution, index) => (
            <SolutionSection
              key={solution.id}
              solution={solution}
              index={index}
            />
          ))}
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
