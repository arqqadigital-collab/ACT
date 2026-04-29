import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/data/teamData';

const ManagementTeam = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const featuredMembers = teamMembers.slice(0, 4);

  return (
    <section ref={ref} className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container-width px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Management Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders driving ACT's mission to transform Egypt's digital landscape 
            and deliver technology excellence across the region.
          </p>
        </div>

        {/* Team Grid - Featured Members */}
        <div 
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {featuredMembers.map((member, index) => (
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
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mt-1">{member.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More Button */}
        <div 
          className={`text-center transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link 
            to="/management-team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors group"
          >
            <span>Meet The Full Team</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
