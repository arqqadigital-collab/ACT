import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "Subscribed!", description: "Thank you for subscribing to our newsletter." });
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-card/50 border-t border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container-width relative z-10 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest updates and insights
              </p>
            </div>
          </div>

          {/* Right */}
          <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 h-12 rounded-lg"
                required
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="group h-12 px-6">
              Subscribe
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
