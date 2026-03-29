import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle, Mail } from "lucide-react";

const NewsletterSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 relative overflow-hidden border-t border-border/30"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-accent/5" />

      <div className="container-width relative z-10">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 py-6 px-8 rounded-xl bg-green-500/10 border border-green-500/20 max-w-md mx-auto">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-medium">
                Thank you for subscribing!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Left - Text */}
              <div className="flex items-center gap-4 lg:max-w-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Get the latest updates and insights
                  </p>
                </div>
              </div>

              {/* Right - Input */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[450px]">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-12 pr-4 rounded-xl border-border/60 bg-background/50 backdrop-blur-sm focus:bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
