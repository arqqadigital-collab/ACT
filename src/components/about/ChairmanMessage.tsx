import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import chairmanImage from '@/assets/chairman.png';

const ChairmanMessage = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-primary/15 blur-[80px]" />

      <div className="container-width px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
            A New Generation, A Greater Future
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Message from the <span className="text-gradient">Chairman</span>
          </h2>
        </div>

        {/* Main Card */}
        <div
          className={`max-w-5xl mx-auto relative glass-card rounded-2xl p-8 md:p-12 lg:p-16 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Side - Photo and Name */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-border bg-secondary">
                  <img
                    src={chairmanImage}
                    alt="Mr. Hassanein Tawfiq - Chairman"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center lg:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                  Hassanein Tawfiq
                </h3>
                <p className="text-muted-foreground text-lg">(Chairman)</p>
              </div>
            </div>

            {/* Right Side - Quote */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              {/* Main Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground leading-snug mb-6">
                "Together, we can build more than just a company. We can help
                shape an Egypt that leads with innovation, stands tall in the
                face of challenges, and serves as a beacon of hope and
                opportunity."
              </blockquote>

              {/* Supporting Text */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                Since founding our company in 1988, I have seen how vision,
                perseverance, and hard work can turn ambition into lasting
                achievement. Today, as I reflect on this journey, I am filled
                with pride—not only in what we have built, but in the promise of
                what lies ahead.
              </p>

              {/* Read More Button */}
              <Link
                to="/chairman-message"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
              >
                <span>Read Full Message</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Decorative Elements - Orange Shapes */}
          <div className="absolute bottom-8 right-8 hidden lg:flex gap-2">
            <div className="w-16 h-16 bg-primary rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl" />
            <div className="w-16 h-16 bg-primary rounded-tl-3xl rounded-tr-3xl rounded-br-3xl mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
