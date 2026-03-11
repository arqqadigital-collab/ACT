import { useRef, useEffect, useState } from "react";

const steps = [
  { step: 1, title: "Discovery", description: "Assessing your environment & risks." },
  { step: 2, title: "Solution Build", description: "Designing a tailored package." },
  { step: 3, title: "Customized Plan", description: "Roadmap with strategy & security." },
  { step: 4, title: "Delivery", description: "Deploying experts & monitoring systems." },
  { step: 5, title: "Fine-Tuning", description: "Continuous optimization & reporting." },
];

const HowItWorksTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on container position
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Start when container enters, complete when it's about to leave
      if (containerTop < windowHeight && rect.bottom > 0) {
        const scrolledIntoView = windowHeight - containerTop;
        const totalScrollDistance = containerHeight + windowHeight * 0.5;
        const progress = Math.min(Math.max(scrolledIntoView / totalScrollDistance, 0), 1);
        setScrollProgress(progress);
      } else if (containerTop >= windowHeight) {
        setScrollProgress(0);
      } else if (rect.bottom <= 0) {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate which steps should be visible based on scroll progress
  const getStepVisibility = (index: number) => {
    const stepThreshold = (index + 0.5) / steps.length;
    const visibility = Math.min(Math.max((scrollProgress - stepThreshold * 0.8) / 0.15, 0), 1);
    return visibility;
  };

  // Calculate line height based on scroll progress
  const lineHeight = Math.min(scrollProgress * 1.2, 1) * 100;

  return (
    <div ref={containerRef} className="relative min-h-[500px]">
      {/* Background Timeline Line (faded) */}
      <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border/20 rounded-full" />

      {/* Animated Progress Line */}
      <div
        className="absolute left-6 top-6 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50 rounded-full origin-top transition-all duration-150 ease-out"
        style={{
          height: `${lineHeight}%`,
          maxHeight: "calc(100% - 48px)",
          opacity: scrollProgress > 0.05 ? 1 : 0,
        }}
      />

      <div className="space-y-10">
        {steps.map((item, idx) => {
          const visibility = getStepVisibility(idx);
          const isVisible = visibility > 0.1;

          return (
            <div
              key={idx}
              className="relative flex items-start gap-6 transition-all duration-300 ease-out"
              style={{
                opacity: visibility,
                transform: `translateX(${(1 - visibility) * 30}px) translateY(${(1 - visibility) * 10}px)`,
              }}
            >
              {/* Step Number Circle */}
              <div
                className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: isVisible ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.2)",
                  boxShadow: isVisible ? "0 10px 25px -5px hsl(var(--primary) / 0.4)" : "none",
                  transform: `scale(${0.7 + visibility * 0.3})`,
                }}
              >
                <span
                  className="font-bold transition-all duration-300"
                  style={{
                    color: isVisible ? "hsl(var(--primary-foreground))" : "hsl(var(--primary) / 0.4)",
                  }}
                >
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                  style={{
                    color: `hsl(var(--primary) / ${0.2 + visibility * 0.4})`,
                  }}
                >
                  Step 0{item.step}
                </span>
                <h3
                  className="text-xl font-bold mb-2 transition-all duration-300"
                  style={{
                    color: isVisible ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground) / 0.3)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed transition-all duration-300"
                  style={{
                    color: isVisible ? "hsl(var(--muted-foreground))" : "hsl(var(--muted-foreground) / 0.2)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorksTimeline;
