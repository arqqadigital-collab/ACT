import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Ship, Radio, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import agibaBg from "@/assets/success-stories/agiba-bg.jpg";
import agibaLogo from "@/assets/success-stories/agiba-logo.png";
import redseaBg from "@/assets/success-stories/redsea-bg.jpg";
import redseaLogo from "@/assets/success-stories/redsea-logo.jpg";
import telecomBg from "@/assets/success-stories/telecom-bg.jpg";
import telecomLogo from "@/assets/success-stories/telecom-logo.png";
import sewedyBg from "@/assets/success-stories/sewedy-bg.jpg";
import sewedyLogo from "@/assets/success-stories/sewedy-logo.jpg";

const stories = [
  {
    icon: Building,
    category: "Oil & Gas",
    title: "AGIBA Data Center Renovation",
    subtitle: "IT Migration and Business Continuity Without Downtime",
    backgroundImage: agibaBg,
    logo: agibaLogo,
    caseStudyId: "agiba-data-center",
  },
  {
    icon: Ship,
    category: "Public Sector",
    title: "Red Sea Container Terminal",
    subtitle: "Cloud VOIP Solution with Cisco to Boost Efficiency and Scalability",
    backgroundImage: redseaBg,
    logo: redseaLogo,
    caseStudyId: "redsea-container-voip",
  },
  {
    icon: Radio,
    category: "Telecom",
    title: "Telecom Egypt Data Backup",
    subtitle: "Cloud Integration Success with Commvault",
    backgroundImage: telecomBg,
    logo: telecomLogo,
    caseStudyId: "telecom-egypt-data",
  },
  {
    icon: GraduationCap,
    category: "Education",
    title: "El Sewedy Education's Knowledge Hub",
    subtitle: "Transforms Connectivity with ACT's HPE Aruba Network Solution",
    backgroundImage: sewedyBg,
    logo: sewedyLogo,
    caseStudyId: "knowledge-hub-aruba",
  },
];

const SuccessStoriesSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-card/30 relative overflow-hidden">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-primary text-base md:text-lg font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Success Stories</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from our partnerships with leading organizations
          </p> */}
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {stories.map((story, index) => (
              <Link
                key={index}
                to={`/case-study/${story.caseStudyId}`}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer w-[280px] flex-shrink-0 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card with Background Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={story.backgroundImage}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                  {/* Logo Top Right */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-14 h-14 bg-white/95 rounded-xl p-2 flex items-center justify-center shadow-lg">
                      <img src={story.logo} alt={`${story.title} logo`} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <story.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      {story.category}
                    </span>
                  </div>

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display text-lg font-bold text-white mb-2">{story.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{story.subtitle}</p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-white/60">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <Link
              key={index}
              to={`/case-study/${story.caseStudyId}`}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card with Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* Background Image */}
                <img
                  src={story.backgroundImage}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                {/* Logo Top Right */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/95 rounded-xl p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <img src={story.logo} alt={`${story.title} logo`} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <story.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                    {story.category}
                  </span>
                </div>

                {/* Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
                    {story.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">{story.subtitle}</p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
