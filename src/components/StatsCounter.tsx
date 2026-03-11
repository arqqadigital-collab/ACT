import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";
import { fetchStats, type Stat } from "@/services/statsService";

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
        hasStarted ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-white">{icon}</div>
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
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchStats();
      if (data.length > 0) {
        setStats(data);
      }
      setLoading(false);
    };

    loadStats();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic icon renderer
  const renderIcon = (iconName: string, size: number) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in lucide-react`);
      return null;
    }
    return <IconComponent size={size} />;
  };

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
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
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
              key={stat.id}
              end={+stat.end}
              suffix={stat.suffix}
              label={stat.label}
              icon={renderIcon(stat.icon, stat.iconSize)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
