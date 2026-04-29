import { useInView } from '@/hooks/useInView';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useEffect, useState } from 'react';
import actBuilding from '@/assets/about/act-building.jpg';

const AboutHero = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);
  
  const { displayedText, isComplete } = useTypewriter({
    text: "Empowering Egypt's Digital Future Since 1988",
    speed: 40,
    delay: 500,
    enabled: isInView
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img 
          src={actBuilding} 
          alt="ACT Building" 
          className="w-full h-[120%] object-cover object-center"
        />
        {/* Dark Overlay - reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 container-width px-4 md:px-8 text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-6">
          About ACT
        </span>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto min-h-[1.2em]">
          {displayedText.split("Digital Future").map((part, i) => 
            i === 0 ? (
              <span key={i}>
                {part}
                {displayedText.includes("Digital Future") && (
                  <span className="text-gradient">Digital Future</span>
                )}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
          {!isComplete && (
            <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
          )}
        </h1>

        <p className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
          isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          From a small, determined team to a regional ICT leader serving over 3,000 customers 
          with more than 500 experts sharing one mission: making technology an enabler of progress.
        </p>
      </div>

      {/* Parallax Transition to Next Section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
    </section>
  );
};

export default AboutHero;
