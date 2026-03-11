import { useInView } from '@/hooks/useInView';
import { Globe, Users, Building2, Award } from 'lucide-react';

const OurStory = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const highlights = [
    { icon: <Globe size={28} />, label: 'Global Presence', value: 'Egypt, UAE, KSA, Germany' },
    { icon: <Users size={28} />, label: 'Customers', value: '3,000+' },
    { icon: <Building2 size={28} />, label: 'Years of Experience', value: '35+' },
    { icon: <Award size={28} />, label: 'Global Recognition', value: 'Oracle Partner' },
  ];

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container-width px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-1 -translate-x-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Three Decades of <span className="text-gradient">Innovation</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our story began in 1988 with a simple belief that technology
                could transform Egypt's future. What started as a small,
                determined team has grown into a regional ICT leader, serving
                over 3,000 customers and powered by more than 500 experts who
                share one mission: to make technology an enabler of progress.
              </p>
              <p>
                For over three decades, we've been at the heart of Egypt's
                digital transformation—building trust, driving innovation, and
                helping businesses and communities thrive in a connected world.
              </p>
              <p>
                Today, with offices in Egypt, Dubai, KSA, and Germany, and
                recognition from Oracle as a Global Partner Industry Solution,
                ACT continues to bridge local roots with global
                ambitions—empowering organizations to grow, innovate, and lead
                into the future.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-1 translate-x-8"
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 glow-border hover:card-shadow-hover transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
