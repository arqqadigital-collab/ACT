import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { faqData } from "@/data/faqData";

const PriorityTable = () => (
  <div style={{ overflowX: 'auto' }}>
    <table className="min-w-full border border-border text-sm mb-4">
      <thead>
        <tr className="bg-muted">
          <th className="border border-border px-3 py-2 font-semibold">Priority Levels</th>
          <th className="border border-border px-3 py-2 font-semibold">Severity Levels</th>
          <th className="border border-border px-3 py-2 font-semibold">Impact</th>
          <th className="border border-border px-3 py-2 font-semibold">Response Time</th>
          <th className="border border-border px-3 py-2 font-semibold">Descriptions</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-border px-3 py-2">P1</td><td className="border border-border px-3 py-2">Critical/Sev1</td><td className="border border-border px-3 py-2">High</td><td className="border border-border px-3 py-2">15 minutes</td><td className="border border-border px-3 py-2">Major business impact, widespread service outage, or a critical system failure.</td></tr>
        <tr><td className="border border-border px-3 py-2">P2</td><td className="border border-border px-3 py-2">High/Sev2</td><td className="border border-border px-3 py-2">High</td><td className="border border-border px-3 py-2">30 minutes</td><td className="border border-border px-3 py-2">Significant impact to business operations or a large number of users affected.</td></tr>
        <tr><td className="border border-border px-3 py-2">P3</td><td className="border border-border px-3 py-2">Medium/Sev3</td><td className="border border-border px-3 py-2">Moderate</td><td className="border border-border px-3 py-2">2 hours</td><td className="border border-border px-3 py-2">Moderate impact, affecting a limited number of users or a non-critical system.</td></tr>
        <tr><td className="border border-border px-3 py-2">P4</td><td className="border border-border px-3 py-2">Low/Sev4</td><td className="border border-border px-3 py-2">Minimal</td><td className="border border-border px-3 py-2">8 hours</td><td className="border border-border px-3 py-2">Request for information or desktop/user support issue. Excludes weekends/holidays.</td></tr>
        <tr><td className="border border-border px-3 py-2">P5</td><td className="border border-border px-3 py-2">Low</td><td className="border border-border px-3 py-2">None</td><td className="border border-border px-3 py-2">2 Days</td><td className="border border-border px-3 py-2">Customization & system configuration changes. Excludes weekends/holidays.</td></tr>
      </tbody>
    </table>
    <div className="text-xs text-muted-foreground">Note: Response times for P4 and P5 exclude weekends and public holidays.</div>
  </div>
);

const ContactTable = () => (
  <div style={{ overflowX: 'auto' }}>
    <table className="min-w-full border border-border text-sm mb-4">
      <thead>
        <tr className="bg-muted">
          <th className="border border-border px-3 py-2 font-semibold">Contact Method</th>
          <th className="border border-border px-3 py-2 font-semibold">Details</th>
          <th className="border border-border px-3 py-2 font-semibold">Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-border px-3 py-2">Support Portal</td><td className="border border-border px-3 py-2">https://support.act.eg</td><td className="border border-border px-3 py-2">Opening tickets, tracking status, accessing resources</td></tr>
        <tr><td className="border border-border px-3 py-2">Email</td><td className="border border-border px-3 py-2">support@act.eg</td><td className="border border-border px-3 py-2">Non-urgent issues, detailed inquiries</td></tr>
        <tr><td className="border border-border px-3 py-2">Escalations</td><td className="border border-border px-3 py-2">CX@act.eg</td><td className="border border-border px-3 py-2">Complaints, escalations, serious concerns</td></tr>
        <tr><td className="border border-border px-3 py-2">Sales Inquiries</td><td className="border border-border px-3 py-2">sales@act.eg</td><td className="border border-border px-3 py-2">New contracts, upgrades, additional services</td></tr>
      </tbody>
    </table>
    <div className="text-xs text-muted-foreground">Support Hours: 8:00 AM to 5:00 PM, Sunday to Thursday (local time).</div>
  </div>
);

const FAQPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [faqRef, isFaqInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  // Group FAQs by section
  const sections: { title: string; items: typeof faqData }[] = [];
  let currentSection = { title: "", items: [] as typeof faqData };

  faqData.forEach((faq) => {
    if (faq.section) {
      if (currentSection.items.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { title: faq.section, items: [faq] };
    } else {
      currentSection.items.push(faq);
    }
  });
  if (currentSection.items.length > 0) {
    sections.push(currentSection);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container-width px-4 md:px-8 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <HelpCircle className="w-3 h-3 mr-1" />
              Help Center
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore step-by-step guides, troubleshooting tips, and helpful articles curated for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div className={`max-w-4xl mx-auto transition-all duration-700 ${isFaqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.items.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border border-border/50 rounded-xl px-6 bg-card/50 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line pb-5">
                        {faq.answer === "table_priority" ? (
                          <PriorityTable />
                        ) : faq.answer === "table_contact" ? (
                          <ContactTable />
                        ) : (
                          faq.answer
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
