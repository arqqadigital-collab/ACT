import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { Calendar, FolderCheck, Users, Handshake, UsersRound, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
  icon: React.ReactNode;
}

const StatItem = ({ end, suffix, label, delay, icon }: StatItemProps) => {
  const { formattedCount, elementRef, hasStarted } = useCountUp({
    end,
    duration: 2500,
    suffix,
    startOnView: true,
  });

  return (
    <div 
      ref={elementRef}
      className={`flex flex-col items-center text-center gap-3 transition-all duration-700 hover:scale-105 ${
        hasStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-white">
        {icon}
      </div>
      <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
        {formattedCount}
      </span>
      <p className="text-sm md:text-base text-muted-foreground font-medium leading-tight">
        {label}
      </p>
    </div>
  );
};

const StatsCounter = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { end: 35, suffix: '+', label: 'Years of ICT Market Leadership', icon: <Calendar size={32} /> },
    { end: 150000, suffix: '+', label: 'Projects Delivered Globally', icon: <FolderCheck size={32} /> },
    { end: 5, suffix: '', label: 'Global Offices Connecting Egypt, MENA & International Markets', icon: <Globe size={32} /> },
    { end: 3000, suffix: '+', label: 'Global Clients', icon: <Users size={32} /> },
    { end: 50, suffix: '+', label: 'Global Technology Partners and Alliances', icon: <Handshake size={32} /> },
    { end: 500, suffix: '+', label: 'Employees', icon: <UsersRound size={32} /> },
  ];

  // Calculate parallax offset (negative to move upward as user scrolls)
  const parallaxOffset = Math.min(scrollY * 0.15, 150);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
      style={{
        transform: `translateY(-${parallaxOffset}px)`,
        marginTop: `-${parallaxOffset}px`,
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 glow-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Parallax Background Layer - constrained for mobile */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
        }}
      >
        <div className="absolute top-1/2 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full bg-accent/5 blur-[80px]" />
      </div>
      
      <div className="container-width relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-primary text-base md:text-lg font-semibold mb-4">
            ACT at a Glance
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Impact in <span className="text-gradient">Numbers</span>
          </h2>
        </div>

        {/* Stats Grid - Two Rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              {...stat}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
