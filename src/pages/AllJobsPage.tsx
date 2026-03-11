import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  TrendingUp,
  Search,
  Loader2,
  Filter,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { fetchJobOpenings, type JobOpening } from '@/services/careersService';

const AllJobsPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>();
  const [jobsRef, isJobsInView] = useInView<HTMLDivElement>();

  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      setIsLoading(true);
      const jobs = await fetchJobOpenings();
      setJobOpenings(jobs);
      setIsLoading(false);
    };
    loadJobs();
  }, []);

  const departments = [...new Set(jobOpenings.map((job) => job.department))];
  const locations = [...new Set(jobOpenings.map((job) => job.location))];
  const types = [...new Set(jobOpenings.map((job) => job.type))];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDepartment = !departmentFilter || job.department === departmentFilter;
    const matchesLocation = !locationFilter || job.location === locationFilter;
    const matchesType = !typeFilter || job.type === typeFilter;
    return matchesDepartment && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 border-b border-border/50">
          <div
            ref={heroRef}
            className={`container-width px-4 md:px-8 transition-all duration-700 ${
              isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-3xl">
              <Link
                to="/careers"
                className="inline-flex items-center text-sm text-primary hover:underline mb-4"
              >
                ← Back to Careers
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Current <span className="text-gradient">Openings</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore all available positions at ACT and find your next career opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-12 md:py-16">
          <div
            ref={jobsRef}
            className="container-width px-4 md:px-8"
          >
            {/* Filters */}
            <div className="mb-8 p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Filter Jobs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Department Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Department
                  </label>
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Departments</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Location
                  </label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Locations</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Job Type
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              {(departmentFilter || locationFilter || typeFilter) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setDepartmentFilter('');
                    setLocationFilter('');
                    setTypeFilter('');
                  }}
                  className="mt-4"
                >
                  Clear All Filters
                </Button>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                {isLoading ? (
                  'Loading...'
                ) : (
                  <>
                    Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span>{' '}
                    {filteredJobs.length === 1 ? 'position' : 'positions'}
                  </>
                )}
              </p>
            </div>

            {/* Jobs List */}
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-20">
                <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No positions found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDepartmentFilter('');
                    setLocationFilter('');
                    setTypeFilter('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredJobs.map((job, idx) => (
                  <Link
                    key={job.id}
                    to={`/careers/${job.slug}`}
                    className={`block transition-all duration-500 ${
                      isJobsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <Card className="group border-border/50 bg-card/50 hover:border-primary hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                {job.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {job.department}
                              </p>
                              <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  {job.type}
                                </span>
                                {job.experienceLevel && (
                                  <span className="flex items-center gap-1.5 text-muted-foreground">
                                    <TrendingUp className="h-4 w-4" />
                                    {job.experienceLevel}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllJobsPage;
