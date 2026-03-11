import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  fetchBlogBySlug,
  getStrapiImageUrl,
  Blog,
} from "@/services/blogsService";
import { useInView } from "@/hooks/useInView";
import insightsHeroBg from "@/assets/insights/insights-hero-bg.jpg";

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [contentRef, isContentInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      if (!blogId) return;

      try {
        const data = await fetchBlogBySlug(blogId);
        setBlog(data);
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlog();
  }, [blogId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-width px-4 md:px-8 py-32 text-center">
          <p className="text-muted-foreground text-lg">Loading blog post...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-width px-4 md:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Blog Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild variant="hero">
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={insightsHeroBg}
            alt="Blog background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              isHeroInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <Link to="/insights#blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </Button>

            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              {blog.category}
            </Badge>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString()}
              </span>
              {blog.readTime && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              )}
              {blog.author && (
                <span className="flex items-center gap-2">
                  By {blog.author}
                  {blog.authorRole && ` - ${blog.authorRole}`}
                </span>
              )}
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container-width px-4 md:px-8">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              isContentInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            {/* Cover Image */}
            {blog.coverImage && (
              <div className="mb-10 rounded-2xl overflow-hidden">
                <img
                  src={getStrapiImageUrl(blog.coverImage.url)}
                  alt={blog.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg prose-invert max-w-none">
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {blog.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-card/50 text-foreground border border-border/50"
                  >
                    {tag.label}
                  </Badge>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact ACT today to learn how we can help you leverage
                technology for growth.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
