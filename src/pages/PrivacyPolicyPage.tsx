import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const PrivacyPolicyPage = () => {
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
              <ShieldCheck className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy{" "}
              <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our policies and procedures on the collection, use and disclosure of Your information when You use the Service.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 28, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div className={`max-w-4xl mx-auto transition-all duration-700 ${isContentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            <p className="text-muted-foreground leading-relaxed mb-12">
              We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection
              and use of information in accordance with this Privacy Policy.
            </p>

            {/* 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">1. Interpretation and Definitions</h2>
              <h3 className="text-lg font-semibold text-foreground mb-3">Interpretation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The words whose initial letters are capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">For the purposes of this Privacy Policy:</p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Account</span>
                  <span className="text-muted-foreground leading-relaxed">means a unique account created for You to access our Service or parts of our Service.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Affiliate</span>
                  <span className="text-muted-foreground leading-relaxed">means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Company</span>
                  <span className="text-muted-foreground leading-relaxed">referred to as either "the Company", "We", "Us" or "Our" refers to ACT, Smart Villages Company, Building B92 - A13, Al Giza Desert, Giza Governorate.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Cookies</span>
                  <span className="text-muted-foreground leading-relaxed">are small files placed on Your device by a website, containing details of Your browsing history among its many uses.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Country</span>
                  <span className="text-muted-foreground leading-relaxed">refers to: Egypt</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Device</span>
                  <span className="text-muted-foreground leading-relaxed">means any device that can access the Service such as a computer, a cell phone or a digital tablet.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Personal Data</span>
                  <span className="text-muted-foreground leading-relaxed">is any information that relates to an identified or identifiable individual.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Service</span>
                  <span className="text-muted-foreground leading-relaxed">refers to the Website.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Service Provider</span>
                  <span className="text-muted-foreground leading-relaxed">means any natural or legal person who processes the data on behalf of the Company.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0 w-40">Usage Data</span>
                  <span className="text-muted-foreground leading-relaxed">refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</span>
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
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">2. Collecting and Using Your Personal Data</h2>
              <h3 className="text-lg font-semibold text-foreground mb-3">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information.
                Personally identifiable information may include, but is not limited to:
              </p>
              <div className="space-y-1 text-sm text-muted-foreground mb-6 ml-4">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Email address</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />First name and last name</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Phone number</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Address, State, Province, ZIP/Postal code, City</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Usage Data is collected automatically when using the Service. Usage Data may include information such as Your
                Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service
                that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and
                other diagnostic data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When You access the Service through a mobile device, We may collect certain information automatically, including
                the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device,
                Your mobile operating system, and other diagnostic data.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">3. Tracking Technologies and Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and
                analyze Our Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your device when You go offline,
                while Session Cookies are deleted as soon as You close Your web browser. Where required by law, we use non-essential
                cookies only with Your consent. You can withdraw or change Your consent at any time through Your browser settings.
              </p>
              <div className="border border-border/50 rounded-xl px-6 py-4 bg-card/50 mb-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-sm">Necessary / Essential Cookies</h4>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded ml-4 shrink-0">Session Cookies</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Essential to provide You with services available through the Website and to enable You to use some of its features. They help authenticate users and prevent fraudulent use of user accounts.</p>
              </div>
              <div className="border border-border/50 rounded-xl px-6 py-4 bg-card/50 mb-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-sm">Cookies Policy / Notice Acceptance Cookies</h4>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded ml-4 shrink-0">Persistent Cookies</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Identify if users have accepted the use of cookies on the Website.</p>
              </div>
              <div className="border border-border/50 rounded-xl px-6 py-4 bg-card/50">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-sm">Functionality Cookies</h4>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded ml-4 shrink-0">Persistent Cookies</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference.</p>
              </div>
            </div>

            {/* 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">4. Use of Your Personal Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The Company may use Personal Data for the following purposes:</p>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">To provide and maintain our Service</span> — including to monitor the usage of our Service.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">To manage Your Account</span> — to manage Your registration as a user of the Service.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">For the performance of a contract</span> — the development, compliance and undertaking of the purchase contract for products or services.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">To contact You</span> — by email, telephone calls, SMS, or other equivalent forms of electronic communication.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">To provide You with news and special offers</span> — about goods, services and events similar to those you have already purchased or inquired about.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">To manage Your requests</span> — to attend and manage Your requests to Us.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">For business transfers</span> — We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, or other sale or transfer of assets.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">For other purposes</span> — such as data analysis, identifying usage trends, and evaluating and improving our Service.</span></div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">We may share Your Personal Data in the following situations:</p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">With Service Providers</span> — to monitor and analyze the use of our Service.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">For business transfers</span> — in connection with any merger, sale of Company assets, or acquisition.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">With Affiliates</span> — who will be required to honor this Privacy Policy.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">With business partners</span> — to offer You certain products, services or promotions.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">With Your consent</span> — We may disclose Your Personal Data for any other purpose with Your consent.</span></div>
              </div>
            </div>

            {/* 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">5. Retention of Your Personal Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
                Privacy Policy. We will retain and use Your Personal Data to comply with our legal obligations, resolve disputes,
                and enforce our legal agreements and policies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">We apply different retention periods to different categories of Personal Data:</p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">User Accounts:</span> retained for the duration of your account relationship plus up to 24 months after account closure.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Support tickets and correspondence:</span> up to 24 months from the date of ticket closure.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Chat transcripts:</span> up to 24 months for quality assurance and staff training purposes.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Website analytics data:</span> up to 24 months from the date of collection.</span></div>
                <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /><span className="text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Server logs:</span> up to 24 months for security monitoring and troubleshooting.</span></div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                When retention periods expire, We securely delete or anonymize Personal Data. Residual copies may remain in
                encrypted backups for a limited period and are not restored except where necessary for security, disaster recovery,
                or legal compliance.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">6. Transfer of Your Personal Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places
                where the parties involved in the processing are located. This means that this information may be transferred to
                computers located outside of Your state, province, country or other governmental jurisdiction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to
                appropriate safeguards. The Company will take all steps reasonably necessary to ensure that Your data is treated
                securely and in accordance with this Privacy Policy.
              </p>
            </div>

            {/* 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">7. Delete Your Personal Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may update, amend, or delete Your information at any time by signing in to Your Account and visiting the account
                settings section. You may also contact Us to request access to, correct, or delete any Personal Data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please note that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
              </p>
            </div>

            {/* 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">8. Disclosure of Your Personal Data</h2>
              <h3 className="text-lg font-semibold text-foreground mb-3">Business Transactions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will
                provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Law Enforcement</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law
                or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Other Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Comply with a legal obligation</div>
                <div className="flex items-center gap-3 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Protect and defend the rights or property of the Company</div>
                <div className="flex items-center gap-3 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Prevent or investigate possible wrongdoing in connection with the Service</div>
                <div className="flex items-center gap-3 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Protect the personal safety of Users of the Service or the public</div>
                <div className="flex items-center gap-3 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Protect against legal liability</div>
              </div>
            </div>

            {/* 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">9. Security of Your Personal Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet,
                or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your
                Personal Data, We cannot guarantee its absolute security.
              </p>
            </div>

            {/* 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable
                information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child
                has provided Us with Personal Data, please contact Us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of
                parental consent, We take steps to remove that information from Our servers.
              </p>
            </div>

            {/* 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">11. Links to Other Websites</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link,
                You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third
                party sites or services.
              </p>
            </div>

            {/* 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">12. Changes to this Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy
                Policy on this page.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and
                update the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>
            </div>

            {/* 13 - Contact */}
            <div className="border border-border/50 rounded-xl px-6 py-8 bg-card/50 border-primary/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, You can contact us:
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

export default PrivacyPolicyPage;
