import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { getFAQs, type FAQPageData } from "@/services/faqService";

/**
 * FAQ Page Component
 * 
 * This page displays Frequently Asked Questions managed from Strapi CMS.
 * 
 * Data Source: Strapi Single Type "faq" (API: /api/faq?populate=faqs)
 * 
 * The FAQ data is fully dynamic and can be managed from Strapi:
 * - Add new FAQs by adding items to the "faqs" component
 * - Edit questions and answers directly in Strapi
 * - Delete FAQs by removing them from the component
 * - Reorder FAQs using the "order" field
 * - Enable priority table for specific questions using "showTable" field
 * 
 * Fallback data is provided below in case Strapi is unavailable.
 */

// Default FAQ data as fallback when Strapi is unavailable
const defaultFaqData = [
  {
    id: "q1",
    question: "What systems and services does ACT provide support for?",
    answer: `ACT provides comprehensive support for a wide range of Oracle systems and hardware infrastructure, including:
    
• Oracle Hospitality Systems: Opera Cloud, Opera On Premise, Opera 5, Suite8, Simphony, Inventory Management, Material Control System, and (E-invoice and E-Receipt) Fatorty.
• Human Resources: SunSystems (infor) and Maestro HR System.
• Specialized Services: Oracle Hospitality Hotels Services and Oracle Hospitality F&B (Food & Beverage) Services.
• Hardware & Infrastructure Support: As an HPE Aruba partner, we provide end-to-end hardware support for servers, networking equipment, and infrastructure components that impact your Oracle systems.`,
    showTable: false,
  },
  {
    id: "q2",
    question: "What are ACT's standard support hours and availability?",
    answer: `Our standard support hours are regularly 8:00 AM to 4:30 PM Sunday to Thursday (local time). However, we understand that critical business issues do not always occur during standard business hours. We offer flexible Service Level Agreements (SLAs) that include options for extended hours and 24/7/365 coverage for high-priority issues, depending on your service contract. Please contact your Account Manager to discuss support hour options that align with your business needs.`,
    showTable: false,
  },
  {
    id: "q3",
    question: "How do I know which support plan is right for my organization?",
    answer: `ACT offers customized support plans tailored to your specific business requirements. The right plan depends on several factors, including the criticality of your systems, the number of users, your industry, and your budget. Our support plans typically include options for response time (ranging from 1 hour for critical issues to 24 hours for low-priority issues), resolution time commitments, and the level of proactive monitoring included. We recommend scheduling a consultation with your Account Manager or our Sales team to assess your needs and recommend an appropriate SLA package.`,
    showTable: false,
  },
  {
    id: "q4",
    question: "How do I open a support ticket with ACT?",
    answer: `You can open a support ticket through any of the following methods:

• Customer Support (Ticket Form): The fastest and most convenient method is to submit a ticket through our dedicated Customer Support form. Fill in the required information and submit. You will receive a ticket number for tracking purposes.

• Email: You can also submit a support request via email to support@act.eg. Please include a clear subject line, detailed description of the issue, and any relevant attachments (screenshots, error messages, log files). Email submissions are typically reviewed within 2 hours during business hours.

• Phone (Support Hotline 19488): For urgent or critical issues, we recommend calling our support hotline directly. This ensures the fastest response and allows you to speak with a support engineer immediately.

• Live Chat: Available through the website during business hours, our live chat feature allows you to connect with a support representative in real-time for quick questions or to initiate a ticket.`,
    showTable: false,
  },
  {
    id: "q5",
    question:
      "What information should I include when opening a support ticket to ensure the fastest resolution?",
    answer: `To help our support team resolve your issue as quickly as possible, please provide the following information in your ticket:

• System/Application Name: Clearly identify which system is affected (e.g., Opera Cloud, Simphony, SunSystems, Maestro HR System).

• Priority Level: Indicate the severity of the issue using our standard priority classification:
  - Critical: System is down or completely non-functional, impacting all users and business operations.
  - High: System is partially functional or experiencing significant performance degradation, impacting multiple users or critical business processes.
  - Medium: System is functional but with minor issues affecting specific features or a limited number of users.
  - Low: General questions, feature requests, or non-urgent issues.

• Detailed Description: Provide a clear, comprehensive description of the problem. Include what you were trying to do, what happened instead, when the issue started, and the business impact.

• Steps to Reproduce: If applicable, provide a clear, step-by-step guide on how to reproduce the issue.

• Screenshots or Error Messages: Attach any relevant visual evidence, including screenshots of error messages, dialog boxes, or system behavior.

• System Environment Details: Include information about your system environment, such as the version of the application you are running, your operating system, browser type (if applicable), and any recent changes.

• Affected Users: Specify how many users are affected and which departments or business areas are impacted.

• Recent Changes: Mention any recent system updates, patches, configuration changes, or new integrations that may be related to the issue.`,
    showTable: false,
  },
  {
    id: "q6",
    question: "What is the typical ticket response and resolution timeline?",
    answer: `Response and resolution times depend on your Service Level Agreement (SLA) and the priority level of your ticket. Please refer to the table below for detailed information.`,
    showTable: true,
  },
  {
    id: "q7",
    question: "How do I track the status of my support ticket?",
    answer: `You can track your ticket status at any time by sending an e-mail to Support, or following up through calls.

• Ticket Number: Your unique ticket identifier for reference.
• Status: Current status of the ticket (Open, In Progress, Awaiting Customer Response, Resolved, Closed).
• Priority: The priority level assigned to the ticket.
• Assigned Engineer: The name of the support engineer working on your ticket.
• Last Update: The date and time of the most recent activity on the ticket.
• Comments/Notes: A detailed history of all communications and actions taken on the ticket.

You will also receive email notifications whenever there is an update to your ticket. If you prefer not to receive email notifications, you can adjust your notification preferences in the portal settings.`,
    showTable: false,
  },
  {
    id: "q8",
    question: "How do I request an online session or remote support from ACT?",
    answer: `ACT offers remote support sessions to help diagnose and resolve issues more efficiently. You can request an online session in the following ways:

• Through the Support form: When opening a ticket, check the box labeled "Request Remote Session" and select your preferred time slot.
• During a Phone Call: If you are speaking with a support engineer by phone, simply ask them to initiate a remote session.
• Via Email: Include "Request for Remote Session" in the subject line of your support email.
• Via Live Chat: Use the live chat feature in the support page to request a remote session.`,
    showTable: false,
  },
  {
    id: "q9",
    question: "What do I need to prepare for an online support session?",
    answer: `To ensure a productive and efficient remote support session, please prepare the following:

• System Access: Ensure you have administrative or sufficient access to the system that needs to be diagnosed.
• Stable Internet Connection: A reliable, high-speed internet connection is essential for a smooth remote session.
• Contact Information: Have your phone number ready in case the support engineer needs to call you during the session.
• Documentation: Gather any relevant documentation, such as recent error messages, system logs, configuration files, or screenshots.
• Availability: Ensure that the person(s) who will participate in the session are available at the scheduled time.
• Quiet Environment: Choose a quiet location where you can focus on the session without distractions.
• Browser Compatibility: If the session will be conducted through a web-based remote access tool, ensure your browser is compatible.`,
    showTable: false,
  },
];

const FAQPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [faqPageData, setFaqPageData] = useState<FAQPageData | null>(null);

  useEffect(() => {
    const loadFAQs = async () => {
      const data = await getFAQs();
      if (data) {
        setFaqPageData(data);
      }
    };
    loadFAQs();
  }, []);

  const faqs = faqPageData?.faqs || defaultFaqData;
  const title = faqPageData?.title || "Frequently Asked Questions";
  const subtitle =
    faqPageData?.subtitle ||
    "Explore step-by-step guides, troubleshooting tips, and helpful articles curated for your business needs.";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Help Center</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-muted/30">
        <div className="container-width px-4 md:px-8">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border/50 rounded-xl px-6 bg-card/50 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line pb-5">
                    {faq.showTable ? (
                      <div>
                        <p className="mb-4">{faq.answer}</p>
                        <div style={{ overflowX: "auto" }}>
                          <table className="min-w-full border border-border text-sm mb-4">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border border-border px-3 py-2 font-semibold">
                                  Priority Levels
                                </th>
                                <th className="border border-border px-3 py-2 font-semibold">
                                  Severity Levels
                                </th>
                                <th className="border border-border px-3 py-2 font-semibold">
                                  Impact
                                </th>
                                <th className="border border-border px-3 py-2 font-semibold">
                                  Response Time
                                </th>
                                <th className="border border-border px-3 py-2 font-semibold">
                                  Descriptions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-border px-3 py-2">
                                  P1
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Critical/Sev1
                                </td>
                                <td className="border border-border px-3 py-2">
                                  High
                                </td>
                                <td className="border border-border px-3 py-2">
                                  15 minutes
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Major business impact, widespread service
                                  outage, or a critical system failure. Requires
                                  immediate attention and response. Response
                                  Time: Within 15 minutes
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border px-3 py-2">
                                  P2
                                </td>
                                <td className="border border-border px-3 py-2">
                                  High/Sev2
                                </td>
                                <td className="border border-border px-3 py-2">
                                  High
                                </td>
                                <td className="border border-border px-3 py-2">
                                  30 minutes
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Significant impact to business operations or a
                                  large number of users affected. Requires
                                  escalation and expedited resolution. Response
                                  Time: Within 30 minutes
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border px-3 py-2">
                                  P3
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Medium/Sev3
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Moderate
                                </td>
                                <td className="border border-border px-3 py-2">
                                  2 hours
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Moderate impact, affecting a limited number of
                                  users or a non-critical system. Standard
                                  response and resolution timelines apply.
                                  Response Time: Within 2 hours
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border px-3 py-2">
                                  P4
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Low/Sev4
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Minimal
                                </td>
                                <td className="border border-border px-3 py-2">
                                  8 hours
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Such as a request for information or a
                                  desktop/user support issue. Lower priority in
                                  the queue. Response Time: Within 8 hours
                                  (excluding weekends/public holidays)
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border px-3 py-2">
                                  P5
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Low
                                </td>
                                <td className="border border-border px-3 py-2">
                                  None
                                </td>
                                <td className="border border-border px-3 py-2">
                                  2 Days
                                </td>
                                <td className="border border-border px-3 py-2">
                                  Customization & system configuration changes
                                  (Training request, Customization, Reports
                                  modification, New Reports and Imbalances
                                  before month end or Data Recovery, ...etc).
                                  Response Time: Within 2 Days (excluding
                                  weekends/public holidays)
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="text-xs text-muted-foreground">
                            Note: Response times for P4 and P5 exclude weekends
                            and public holidays.
                          </div>
                        </div>
                      </div>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
