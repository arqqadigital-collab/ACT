import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight, Users, Heart, Lightbulb, Zap, 
  Target, Handshake, GraduationCap, Briefcase,
  CheckCircle2, Trophy, Globe, BookOpen,
  TrendingUp, Sparkles, Star, Puzzle, Search,
  MapPin, Clock, Quote
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useTypewriter } from '@/hooks/useTypewriter';
import careersHero from '@/assets/careers/careers-hero.jpg';
import cultureImage from '@/assets/careers/culture-image.jpg';
import whyActImage from '@/assets/careers/why-act.jpg';
import internshipsImage from '@/assets/careers/internships.jpg';

const CareersPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);
  const [cultureRef, isCultureInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [valuesRef, isValuesInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [whyRef, isWhyInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [openingsRef, isOpeningsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [academyRef, isAcademyInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [reviewsRef, isReviewsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  const { displayedText, isComplete } = useTypewriter({
    text: "Life at ACT",
    speed: 60,
    delay: 500,
    enabled: isHeroInView
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll for reviews
  useEffect(() => {
    const scrollContainer = reviewsScrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(scroll); };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const culturePoints = [
    { icon: Heart, text: 'Respect, collaboration, and continuous learning.' },
    { icon: Lightbulb, text: 'A community where your ideas matter and your growth is prioritized.' },
    { icon: Users, text: 'An environment designed to empower people across generations.' },
  ];

  const coreValues = [
    { title: 'Growth Mindset', icon: TrendingUp },
    { title: 'Collaboration for Impact', icon: Handshake },
    { title: 'Innovation with Purpose', icon: Lightbulb },
    { title: 'Customer Centricity', icon: Users },
    { title: 'Service Excellence', icon: Star },
    { title: 'Integrity in Action', icon: Puzzle },
  ];

  const whyACT = [
    { icon: Globe, text: 'Work with cutting-edge ICT technologies and global tech leaders.' },
    { icon: Trophy, text: 'Be part of 35 years of innovation leadership in Egypt\'s ICT industry.' },
    { icon: GraduationCap, text: 'Access continuous learning through ACT Graduate Academy, internships, training & coaching.' },
    { icon: Users, text: 'Collaborate in an inclusive environment where your contributions drive real impact.' },
    { icon: Briefcase, text: 'Benefit from competitive compensation and clear growth opportunities.' },
  ];

  const [departmentFilter, setDepartmentFilter] = useState('');

  const currentOpenings = [
    { title: 'Senior Security Engineer', department: 'Cybersecurity', location: 'Cairo, Egypt', type: 'Full Time' },
    { title: 'Data Analysts', department: 'Digital Solutions', location: 'Cairo, Egypt', type: 'Full Time' },
    { title: 'Network Administrator', department: 'Infrastructure', location: 'Alexandria, Egypt', type: 'Full Time' },
  ];

  const departments = [...new Set(currentOpenings.map(job => job.department))];

  const filteredOpenings = currentOpenings.filter(job => 
    departmentFilter === '' || job.department === departmentFilter
  );

  const academyFeatures = [
    'Structured training & mentorship',
    'Hands-on projects with real business impact',
    'Development of technical and soft skills',
    'Pathway to full-time employment at ACT',
  ];

  const employeeReviews = [
    {
      quote: "ACT has given me incredible opportunities to grow both technically and professionally. The mentorship culture here is unmatched.",
      name: "Ahmed M.",
      title: "Senior Solutions Architect",
      years: "5 years at ACT"
    },
    {
      quote: "What I love most about ACT is the collaborative environment. Everyone is willing to help and share knowledge.",
      name: "Sarah K.",
      title: "Cybersecurity Engineer",
      years: "3 years at ACT"
    },
    {
      quote: "The Graduate Academy program was a game-changer for my career. I learned so much in just four months!",
      name: "Omar H.",
      title: "Network Engineer",
      years: "2 years at ACT"
    },
    {
      quote: "ACT invests in its people. From training to certifications, they truly support your professional development.",
      name: "Mona A.",
      title: "Project Manager",
      years: "4 years at ACT"
    },
    {
      quote: "Working with cutting-edge technologies and global partners has accelerated my learning beyond expectations.",
      name: "Youssef R.",
      title: "Cloud Solutions Specialist",
      years: "3 years at ACT"
    },
    {
      quote: "The work-life balance and supportive management make ACT an amazing place to build a career.",
      name: "Nadia F.",
      title: "Data Analyst",
      years: "2 years at ACT"
    },
  ];

  const duplicatedReviews = [...employeeReviews, ...employeeReviews];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <img 
              src={careersHero} 
              alt="Life at ACT" 
              className="w-full h-[120%] object-cover object-center"
            />
            {/* Dark Overlay - reduced opacity for better image visibility */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
          </div>

          {/* Content */}
          <div 
            ref={heroRef}
            className={`relative z-10 container-width px-4 md:px-8 text-center transition-all duration-1000 ${
              isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-6">
              Careers
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto min-h-[1.2em]">
              <span className="text-gradient">{displayedText}</span>
              {!isComplete && (
                <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
              )}
            </h1>

            <p className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
              isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              At ACT, our people are at the heart of everything we do. We believe in cultivating a workplace 
              where every individual feels valued, empowered, and inspired to grow.
            </p>

          </div>

          {/* Parallax Transition */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </section>

        {/* Our Culture Section */}
        <section 
          ref={cultureRef}
          className="py-20"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-700 ${
                isCultureInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Culture</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  "We ACT" isn't just our tagline, <span className="text-gradient">it's who we are.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're a team of passionate innovators united by the vision of being the First-choice technology partner.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">What makes our culture unique:</h3>
                  {culturePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <point.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground pt-2">{point.text}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-foreground font-medium">
                  Join ACT and be part of how "We ACT" — for our customers, for our communities, and for the future.
                </p>
              </div>

              <div className={`relative transition-all duration-700 delay-200 ${
                isCultureInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={cultureImage} 
                    alt="ACT Team Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section 
          ref={valuesRef}
          className="py-20 bg-card/30"
        >
          <div className="container-width px-4 md:px-8">
            <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
              isValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {coreValues.map((value, idx) => (
                <Card 
                  key={idx}
                  className={`group border-border/50 bg-card/50 hover:bg-primary hover:border-primary transition-all duration-500 ${
                    isValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                      <value.icon className="h-7 w-7 md:h-8 md:w-8 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Build Your Career at ACT */}
        <section 
          ref={whyRef}
          className="py-20"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 lg:order-1 relative transition-all duration-700 delay-200 ${
                isWhyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={whyActImage} 
                    alt="ACT Building" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>

              <div className={`order-1 lg:order-2 transition-all duration-700 ${
                isWhyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why ACT?</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
                  Why Build Your Career at <span className="text-gradient">ACT?</span>
                </h2>
                
                <ul className="space-y-4">
                  {whyACT.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground pt-2">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Current Openings - commented out */}

        {/* ACT Graduate Academy */}
        <section 
          ref={academyRef}
          className="py-20"
        >
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-700 ${
                isAcademyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold">Internships & Graduate Programs</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ACT <span className="text-gradient">Graduate Academy</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our flagship four-month graduate program helps young professionals build a successful career in ICT.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {academyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground mb-6 italic">
                  This is more than training — it's your first step toward a meaningful ICT career in Egypt.
                </p>

              </div>

              <div className={`relative transition-all duration-700 delay-200 ${
                isAcademyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={internshipsImage} 
                    alt="ACT Graduate Academy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Employee Reviews Section */}
        <section 
          ref={reviewsRef}
          className="py-20 bg-card/30 overflow-hidden"
        >
          <div className="container-width px-4 md:px-8 mb-12">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
              isReviewsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Our Team Says</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Employee <span className="text-gradient">Reviews</span>
              </h2>
            </div>
          </div>

          {/* Auto-scrolling Reviews */}
          <div 
            ref={reviewsScrollRef}
            className={`w-full overflow-x-auto transition-all duration-700 ${
              isReviewsInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ scrollBehavior: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-4 md:px-8 py-4 w-max">
              {duplicatedReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Stars */}
                  {/* <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div> */}
                  
                  {/* Quote */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{review.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.title}</p>
                      <p className="text-xs text-muted-foreground">{review.years}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container-width px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to <span className="text-gradient">ACT</span> and make a difference?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore opportunities, grow with us, and help shape what's next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg">
                  View All Openings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Submit Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
