import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, Cpu, Shield, Network, Server, 
  CloudCog, Layers, Gauge, Activity, BrainCircuit, Bot,
  Wifi, Globe, Radio, Lock, Eye, Mail, AlertTriangle,
  Radar, ShieldCheck, Database, HardDrive, Monitor,
  CheckCircle2
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useTypewriter } from '@/hooks/useTypewriter';
import solutionsHeroBg from '@/assets/solutions/solutions-hero-bg.png';

// Import solution images
import digitalImg from '@/assets/solutions/digital-solutions.jpg';
import networkImg from '@/assets/solutions/networking-solutions.jpg';
import hybridItImg from '@/assets/solutions/hybrid-it.jpg';
import cybersecurityImg from '@/assets/solutions/cyber-security.jpg';

const SolutionsPage = () => {
  const location = useLocation();
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);

  // Section refs for scroll animations
  const [digitalRef, isDigitalInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [networkRef, isNetworkInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [hybridRef, isHybridInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [securityRef, isSecurityInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const { displayedText, isComplete } = useTypewriter({
    text: "Smart, Secure, and Scalable Solutions, Tailored for the Digital Future",
    speed: 40,
    delay: 500,
    enabled: isHeroInView
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const digitalCapabilities = [
    'Virtualization & DR',
    'Data Management',
    'Monitoring & Control',
    'Container Management',
    'IoT Platform',
  ];

  const networkingCapabilities = [
    'Networking Architecture',
    'Enterprise Switching',
    'Data Center Networking',
    'Wireless & Mobility',
    'SD-WAN',
    'GPON Solutions',
  ];

  const hybridItCapabilities = [
    'Compute',
    'Storage',
    'Endpoint Solutions',
  ];

  const cybersecurityCapabilities = [
    'Network Security',
    'Endpoint Security',
    'Cloud Security',
    'Data Security',
    'Vulnerability Management',
    'Identity Security',
    'Application Security',
    'SOC & Analytics',
    'OT & IoT Security',
  ];

  const solutionCategories = [
    { 
      number: '01.', 
      title: 'Digital Solutions', 
      description: 'Streamline operations, unlock agility, and drive innovation.'
    },
    { 
      number: '02.', 
      title: 'Networking Solutions', 
      description: 'AI-Powered Networking Solutions for a Connected, Secure, and Scalable Future.'
    },
    { 
      number: '03.', 
      title: 'Hybrid IT', 
      description: 'Powering Business Agility with Intelligent, Scalable Infrastructure.'
    },
    { 
      number: '04.', 
      title: 'Cybersecurity', 
      description: 'Zero Trust Security for a Borderless World.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
          {/* Background Image with Parallax and Animation */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <img 
              src={solutionsHeroBg} 
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
              isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-6">
              Our Solutions
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto min-h-[1.2em]">
              {displayedText.split("Scalable Solutions,").map((part, i) => 
                i === 0 ? (
                  <span key={i}>
                    {part}
                    {displayedText.includes("Scalable Solutions,") && (
                      <span className="text-gradient">Scalable Solutions,</span>
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
              At ACT, we deliver holistic technology ecosystems designed to empower enterprises, governments, and industries.
              <br /><br />
              From digital modernization and hybrid IT to AI-powered networking and Zero Trust cybersecurity, our solutions ensure your operations are always connected, protected, and ready for what's next.
            </p>

            <div className={`mt-8 transition-all duration-700 delay-700 ${
              isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Let's Talk
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


        {/* Digital Solutions - 2 Column */}
        <section 
          ref={digitalRef}
          id="digital" 
          className="py-20 scroll-mt-24"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Column */}
              <div className={`transition-all duration-700 ${
                isDigitalInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold">01. Digital Solutions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Streamline operations, unlock agility, and drive innovation.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  ACT's Digital Solutions empower enterprises to transform how they work through smarter systems, automated platforms, and real-time insights. From virtualization and disaster recovery to IoT connectivity and AI-driven monitoring, we help organizations modernize their digital core and stay resilient in a rapidly changing world.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Our Core Capabilities:</h3>
                  <ul className="space-y-3">
                    {digitalCapabilities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Image Column */}
              <div className={`relative transition-all duration-700 delay-200 ${
                isDigitalInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={digitalImg} 
                    alt="Digital Solutions" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Networking Solutions - 2 Column (Reversed) */}
        <section 
          ref={networkRef}
          id="networking" 
          className="py-20 bg-card/30 scroll-mt-24"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className={`relative order-2 lg:order-1 transition-all duration-700 delay-200 ${
                isNetworkInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={networkImg} 
                    alt="Networking Solutions" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              </div>
              {/* Text Column */}
              <div className={`order-1 lg:order-2 transition-all duration-700 ${
                isNetworkInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold">02. Networking Solutions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  AI-Powered Networking Solutions for a Connected, Secure, and Scalable Future
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  ACT delivers enterprise-grade networking solutions that empower organizations to stay connected, secure, and future-ready. We design intelligent, cloud-ready infrastructures that combine performance, visibility, and automation, all built on partnerships with Cisco, HPE Aruba, Altai, and Nokia. From campuses and data centers to industrial sites and hybrid clouds, ACT ensures seamless communication and resilience across every environment.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Our Core Capabilities:</h3>
                  <ul className="space-y-3">
                    {networkingCapabilities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
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

        {/* Hybrid IT - 2 Column */}
        <section 
          ref={hybridRef}
          id="hybrid-it" 
          className="py-20 scroll-mt-24"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Column */}
              <div className={`transition-all duration-700 ${
                isHybridInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold">03. Hybrid IT</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Powering Business Agility with Intelligent, Scalable Infrastructure
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  ACT's Hybrid IT Solutions enable enterprises to modernize their IT foundations with the right balance of on-premises performance, cloud flexibility, and edge scalability. We help organizations design and deploy resilient compute, storage, and endpoint systems that deliver seamless integration, operational efficiency, and long-term value.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Our Core Capabilities:</h3>
                  <ul className="space-y-3">
                    {hybridItCapabilities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Image Column */}
              <div className={`relative transition-all duration-700 delay-200 ${
                isHybridInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={hybridItImg} 
                    alt="Hybrid IT Solutions" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity Solutions - 2 Column (Reversed) */}
        <section 
          ref={securityRef}
          id="cybersecurity" 
          className="py-20 bg-card/30 scroll-mt-24"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className={`relative order-2 lg:order-1 transition-all duration-700 delay-200 ${
                isSecurityInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={cybersecurityImg} 
                    alt="Cybersecurity Solutions" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              </div>
              {/* Text Column */}
              <div className={`order-1 lg:order-2 transition-all duration-700 ${
                isSecurityInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold">04. Cybersecurity Solutions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Zero Trust Security for a Borderless World
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In today's hyperconnected world, trust must be earned, not assumed. At ACT, we empower organizations to safeguard their digital ecosystems through next-generation cybersecurity solutions rooted in a Zero Trust framework. By integrating AI, machine learning, and threat intelligence, we help enterprises continuously protect users, data, and applications wherever they operate.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Security Portfolio</h3>
                  <p className="text-muted-foreground mb-4">
                    ACT's Zero Trust model secures every digital interaction, validating identity, assessing context, and protecting assets across your IT environment.
                  </p>
                  <p className="text-muted-foreground mb-4">Our end-to-end security coverage includes:</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {cybersecurityCapabilities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    This adaptive approach ensures that every user, device, and application interaction is continuously verified, minimizing risk and maximizing business continuity.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="accent" asChild>
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
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
