import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/useInView';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getTeamMemberById, teamMembers } from '@/data/teamData';

const TeamMemberPage = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  
  const member = memberId ? getTeamMemberById(memberId) : undefined;
  
  if (!member) {
    return <Navigate to="/management-team" replace />;
  }

  // Get next and previous members for navigation
  const currentIndex = teamMembers.findIndex(m => m.id === memberId);
  const prevMember = currentIndex > 0 ? teamMembers[currentIndex - 1] : null;
  const nextMember = currentIndex < teamMembers.length - 1 ? teamMembers[currentIndex + 1] : null;

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
              to="/management-team"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Management Team</span>
            </Link>

            {/* Member Content */}
            <div
              className={`max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 lg:p-16 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-1 translate-y-8"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Side - Photo */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="aspect-square w-full max-w-sm rounded-2xl overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2 text-center">
                    {member.name}
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium text-center">
                    {member.title}
                  </p>
                </div>

                {/* Right Side - Bio */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    {member.fullBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation to other members */}
            <div className="max-w-5xl mx-auto mt-8 flex justify-between items-center">
              {prevMember ? (
                <Link
                  to={`/team/${prevMember.id}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider">Previous</p>
                    <p className="font-medium">{prevMember.name}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextMember ? (
                <Link
                  to={`/team/${nextMember.id}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider">Next</p>
                    <p className="font-medium">{nextMember.name}</p>
                  </div>
                  <ArrowLeft
                    size={20}
                    className="rotate-180 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
