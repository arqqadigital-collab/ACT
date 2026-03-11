import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/useInView';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '@/data/teamData';

const ManagementTeamPage = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });

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
              className={`text-center mb-16 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-1 translate-y-8"
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
                Leadership
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our <span className="text-gradient">Management Team</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the visionary leaders driving ACT's mission to transform
                Egypt's digital landscape and deliver technology excellence
                across the region.
              </p>
            </div>

            {/* Team Grid */}
            <div
              className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-1 translate-y-8"
              }`}
            >
              {teamMembers.map((member, index) => (
                <Link
                  key={member.id}
                  to={`/team/${member.id}`}
                  className="glass-card rounded-2xl overflow-hidden group hover:card-shadow-hover transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mt-1">
                      {member.title}
                    </p>
                    <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                      {member.shortBio}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ManagementTeamPage;
