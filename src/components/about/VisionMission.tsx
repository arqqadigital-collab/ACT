import { useInView } from '@/hooks/useInView';
import { Target, Lightbulb, Shield, Rocket } from 'lucide-react';

const VisionMission = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const brandPromises = [
    {
      icon: <Target size={32} />,
      title: 'Tailored IT Solutions',
      description: 'We design customized enterprise technology solutions in Egypt and beyond, because one-size-fits-all never drives true business growth.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Expertise & Trust',
      description: 'With 35 years of proven success, our certified IT professionals ensure technology works for you—securely, reliably, and at scale.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Committed to Your Success',
      description: 'From managed IT services to large-scale digital transformation projects, your mission becomes ours, wherever your growth journey takes you.',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 glow-gradient opacity-30" />

      <div className="container-width px-4 md:px-8 relative z-10">
        {/* Vision Section */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-6">
            <Lightbulb size={18} />
            Our Vision
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            The MENA Region's Preferred{" "}
            <span className="text-gradient">IT Partner of Choice</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            To establish ourselves as the preferred choice technology partner
            across the industries we serve, recognized for our unrivaled
            expertise, exceptional service, and unwavering commitment to
            innovation. We aim to set the highest standards in system
            integration and ICT solutions, consistently exceeding expectations
            and driving transformative outcomes for our customers.
          </p>
        </div>

        {/* Brand Promise Section */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Brand Promise
            </h3>
            <p className="text-primary font-semibold text-lg">
              We're on a mission to deliver IT excellence, wherever your
              business operates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {brandPromises.map((promise, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 glow-border hover:card-shadow-hover transition-all duration-500 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {promise.icon}
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  {promise.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
