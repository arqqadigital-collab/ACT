import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const TermsConditionsPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [contentRef, isContentInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container-width px-4 md:px-8 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <FileText className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms &{" "}
              <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Please read these terms and conditions carefully before using Our Service.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 28, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div className={`max-w-4xl mx-auto transition-all duration-700 ${isContentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">1. Interpretation and Definitions</h2>
              <h3 className="text-lg font-semibold text-foreground mb-3">Interpretation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The words whose initial letters are capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">For the purposes of these Terms and Conditions:</p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Affiliate</span>
                  <span className="text-muted-foreground leading-relaxed">means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Country</span>
                  <span className="text-muted-foreground leading-relaxed">refers to: Egypt</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Company</span>
                  <span className="text-muted-foreground leading-relaxed">referred to as either "the Company", "We", "Us" or "Our" refers to ACT, Smart Villages Company, Building B92 - A13, Al Giza Desert, Giza Governorate.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Device</span>
                  <span className="text-muted-foreground leading-relaxed">means any device that can access the Service such as a computer, a cell phone or a digital tablet.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Service</span>
                  <span className="text-muted-foreground leading-relaxed">refers to the Website.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Terms and Conditions</span>
                  <span className="text-muted-foreground leading-relaxed">means these Terms and Conditions which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Third-Party Social Media Service</span>
                  <span className="text-muted-foreground leading-relaxed">means any services or content provided by a third party that is displayed, included, made available, or linked to through the Service.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Website</span>
                  <span className="text-muted-foreground leading-relaxed">refers to ACT, accessible from https://www.advancedcomputertechnology.com/</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">You</span>
                  <span className="text-muted-foreground leading-relaxed">means the individual accessing or using the Service, or the legal entity on behalf of which such individual is accessing or using the Service.</span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">2. Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company.
                These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using the Service You agree to be bound by these Terms and Conditions.
                If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use,
                and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">3. Links to Other Websites</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices
                of any third-party websites or services. You acknowledge and agree that the Company shall not be responsible or
                liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with
                the use of or reliance on any such content, goods or services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">4. Links from a Third-Party Social Media Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service may display, include, make available, or link to content or services provided by a Third-Party Social
                Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does
                not endorse or assume responsibility for any Third-Party Social Media Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You acknowledge and agree that the Company shall not be responsible or liable for any damage or loss caused by or
                in connection with Your access to or use of any Third-Party Social Media Service. Your use of any Third-Party
                Social Media Service is governed by that service's own terms and privacy policies.
              </p>
            </div>

            {/* 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">5. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever,
                including without limitation if You breach these Terms and Conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers
                shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
                anything through the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for
                any special, incidental, indirect, or consequential damages whatsoever, even if the Company or any supplier has
                been advised of the possibility of such damages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or
                consequential damages. In these states, each party's liability will be limited to the greatest extent permitted by law.
              </p>
            </div>

            {/* 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">7. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of
                any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties,
                whether express, implied, statutory or otherwise, with respect to the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Neither the Company nor any of the company's providers makes any representation or warranty that the Service will
                be uninterrupted or error-free, or that the Service is free of viruses, scripts, trojan horses, worms, malware,
                timebombs or other harmful components.
              </p>
            </div>

            {/* 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                The laws of Egypt, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
                Your use of the Service may also be subject to other local, state, national, or international laws.
              </p>
            </div>

            {/* 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">9. Disputes Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally
                by contacting the Company.
              </p>
            </div>

            {/* 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">10. For European Union (EU) Users</h2>
              <p className="text-muted-foreground leading-relaxed">
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country
                in which You are resident.
              </p>
            </div>

            {/* 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">11. United States Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                You represent and warrant that (i) You are not located in a country that is subject to the United States
                government embargo, or that has been designated as a "terrorist supporting" country, and (ii) You are not
                listed on any United States government list of prohibited or restricted parties.
              </p>
            </div>

            {/* 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">12. Severability and Waiver</h2>
              <h3 className="text-lg font-semibold text-foreground mb-3">Severability</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
                interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law
                and the remaining provisions will continue in full force and effect.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Waiver</h3>
              <p className="text-muted-foreground leading-relaxed">
                The failure to exercise a right or to require performance of an obligation under these Terms shall not affect a
                party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of
                a breach constitute a waiver of any subsequent breach.
              </p>
            </div>

            {/* 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">13. Translation Interpretation</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions may have been translated if We have made them available to You on our Service.
                You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </div>

            {/* 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">14. Changes to These Terms and Conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
                material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the
                revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
              </p>
            </div>

            {/* 15 - Contact */}
            <div className="border border-border/50 rounded-xl px-6 py-8 bg-card/50 border-primary/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <a href="mailto:support@act.eg" className="text-primary hover:underline font-medium">
                support@act.eg
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditionsPage;
