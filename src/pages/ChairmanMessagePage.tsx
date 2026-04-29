import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/useInView';
import chairmanImage from '@/assets/chairman.png';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChairmanMessagePage = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <section ref={ref} className="py-12 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />

          <div className="container-width px-4 md:px-8 relative z-10">
            {/* Back Link */}
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to About Us</span>
            </Link>

            {/* Section Header */}
            <div 
              className={`text-center mb-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
                A New Generation, A Greater Future
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Message from the <span className="text-gradient">Chairman</span>
              </h1>
            </div>

            {/* Content Card */}
            <div 
              className={`max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 lg:p-16 transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Side - Photo and Name */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-border bg-secondary mb-6">
                    <img 
                      src={chairmanImage} 
                      alt="Mr. Hassanein Tawfiq - Chairman"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-1 text-center">
                    Hassanein Tawfiq
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    (Chairman)
                  </p>
                </div>

                {/* Right Side - Full Message */}
                <div className="lg:col-span-8">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Since founding our company in 1988, I have seen how vision, perseverance, and hard work 
                      can turn ambition into lasting achievement. Today, as I reflect on this journey, I am 
                      filled with pride—not only in what we have built, but in the promise of what lies ahead. 
                      I believe deeply that the future belongs to the younger generations who will carry forward 
                      our values, our dreams, and our determination.
                    </p>
                    
                    <p>
                      These younger generations are not waiting for tomorrow—they are already shaping today. 
                      Their energy, creativity, and resilience inspire us all. In a world of constant change 
                      and growing challenges, their fresh ideas and bold spirit are exactly what we need to 
                      drive progress and innovation. But it is our duty, as those who came before, to provide 
                      them with every tool and opportunity to succeed. We must stand by them—not just as mentors, 
                      but as partners—sharing our experience, offering our support, and placing our trust in their potential.
                    </p>
                    
                    <p>
                      Our commitment to empowering younger generations is rooted in something greater than 
                      ourselves: our loyalty to our country. Egypt's strength has always come from the 
                      determination of its people, the belief that through unity, hard work, and courage, 
                      we can overcome any obstacle. This belief has guided our company from the beginning, 
                      and it will continue to guide us as we work hand in hand with the next generation to 
                      achieve even greater success.
                    </p>
                    
                    <p className="text-foreground font-medium text-lg italic border-l-4 border-primary pl-6">
                      "Together, we can build more than just a company. We can help shape an Egypt that 
                      leads with innovation, stands tall in the face of challenges, and serves as a beacon 
                      of hope and opportunity."
                    </p>

                    <p>
                      By investing in younger generations, we are investing in a future filled with possibility—one 
                      where hard work, integrity, and shared purpose will continue to drive us forward.
                    </p>

                    <p>
                      The future is bright because it belongs to them, and with our commitment, loyalty, 
                      and belief in hard work, there is no limit to what we can achieve together.
                    </p>

                    <p className="text-foreground font-semibold pt-4">
                      Mr. Hassanein Tawfiq – Chairman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChairmanMessagePage;
