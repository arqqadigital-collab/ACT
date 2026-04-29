import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MessageCircle, Users, ThumbsUp, Headphones, Clock, Upload, ChevronRight, Loader2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/hooks/use-toast";

const statsData = [
  { icon: Users, value: "1500+", label: "Covered Customers Across Regions" },
  { icon: ThumbsUp, value: "90%", label: "Customer Satisfaction Rate" },
  { icon: Headphones, value: "40K+", label: "Annual Support Calls" },
  { icon: Clock, value: "30 Second", label: "Average Response Time" },
];

const systemOptions = [
  "Point of Sale (POS)",
  "Property Management System (PMS)",
  "SUN Financial System",
  "ERP System",
  "Inventory / Procurement",
  "Network / Infrastructure",
];

const faqData = [
  {
    id: "q1",
    question: "What systems and services does ACT provide support for?",
    answer: `ACT provides comprehensive support for a wide range of Oracle systems and hardware infrastructure, including:
    
• Oracle Hospitality Systems: Opera Cloud, Opera On Premise, Opera 5, Suite8, Simphony, Inventory Management, Material Control System, and (E-invoice and E-Receipt) Fatorty.
• Human Resources: SunSystems (infor) and Maestro HR System.
• Specialized Services: Oracle Hospitality Hotels Services and Oracle Hospitality F&B (Food & Beverage) Services.
• Hardware & Infrastructure Support: As an HPE Aruba partner, we provide end-to-end hardware support for servers, networking equipment, and infrastructure components that impact your Oracle systems.`,
  },
  {
    id: "q2",
    question: "What are ACT's standard support hours and availability?",
    answer: `Our standard support hours are regularly 8:00 AM to 4:30 PM Sunday to Thursday (local time). However, we understand that critical business issues do not always occur during standard business hours. We offer flexible Service Level Agreements (SLAs) that include options for extended hours and 24/7/365 coverage for high-priority issues, depending on your service contract. Please contact your Account Manager to discuss support hour options that align with your business needs.`,
  },
  {
    id: "q3",
    question: "How do I know which support plan is right for my organization?",
    answer: `ACT offers customized support plans tailored to your specific business requirements. The right plan depends on several factors, including the criticality of your systems, the number of users, your industry, and your budget. Our support plans typically include options for response time (ranging from 1 hour for critical issues to 24 hours for low-priority issues), resolution time commitments, and the level of proactive monitoring included. We recommend scheduling a consultation with your Account Manager or our Sales team to assess your needs and recommend an appropriate SLA package.`,
  },
  {
    id: "q4",
    question: "How do I open a support ticket with ACT?",
    answer: `You can open a support ticket through any of the following methods:

• Customer Support (Ticket Form): The fastest and most convenient method is to submit a ticket through our dedicated Customer Support form. Fill in the required information and submit. You will receive a ticket number for tracking purposes.

• Email: You can also submit a support request via email to support@act.eg. Please include a clear subject line, detailed description of the issue, and any relevant attachments (screenshots, error messages, log files). Email submissions are typically reviewed within 2 hours during business hours.

• Phone (Support Hotline 19488): For urgent or critical issues, we recommend calling our support hotline directly. This ensures the fastest response and allows you to speak with a support engineer immediately.

• Live Chat: Available through the website during business hours, our live chat feature allows you to connect with a support representative in real-time for quick questions or to initiate a ticket.`,
  },
  {
    id: "q5",
    question: "What information should I include when opening a support ticket to ensure the fastest resolution?",
    answer: `: To help our support team resolve your issue as quickly as possible, please provide the following information in your ticket:
System/Application Name: Clearly identify which system is affected (e.g., Opera Cloud, Simphony, SunSystems, Maestro HR System).
Priority Level: Indicate the severity of the issue using our standard priority classification:
• Critical: System is down or completely non-functional, impacting all users and business operations.
• High: System is partially functional or experiencing significant performance degradation, impacting multiple users or critical business processes.
• Medium: System is functional but with minor issues affecting specific features or a limited number of users.
• Low: General questions, feature requests, or non-urgent issues.
Detailed Description: Provide a clear, comprehensive description of the problem. Include what you were trying to do, what happened instead, when the issue started, and the business impact. For example: "Unable to process guest check-out in Opera Cloud since 2:30 PM today. All front desk staff are unable to complete transactions, affecting guest departures."
Steps to Reproduce: If applicable, provide a clear, step-by-step guide on how to reproduce the issue. This helps our engineers quickly identify and test the problem. Example:
1. Log in to Opera Cloud.
2. Navigate to the Reservations module.
3. Click 'Modify Reservation.'
4. Error message appears: 'Database connection timeout.'
Screenshots or Error Messages: Attach any relevant visual evidence, including screenshots of error messages, dialog boxes, or system behavior. Copy and paste any exact error codes or messages you receive.
System Environment Details: Include information about your system environment, such as the version of the application you are running, your operating system, browser type (if applicable), and any recent changes to your system or configuration.
Affected Users: Specify how many users are affected and which departments or business areas are impacted.
Recent Changes: Mention any recent system updates, patches, configuration changes, or new integrations that may be related to the issue.`,
  },
  {
    id: "q6",
    question: "What is the typical ticket response and resolution timeline?",
    answer: `Response and resolution times depend on your Service Level Agreement (SLA) and the priority level of your ticket:

| Priority Levels | Severity Levels | Impact | Response Time | Descriptions |
|-----------------|-----------------|--------|---------------|--------------|
| P1 | Critical/Sev1 | High | 15 minutes | Major business impact, widespread service outage, or a critical system failure. Requires immediate attention and response. Response Time: Within 15 minutes |
| P2 | High/Sev2 | High | 30 minutes | Significant impact to business operations or a large number of users affected. Requires escalation and expedited resolution. Response Time: Within 30 minutes |
| P3 | Medium/Sev3 | Moderate | 2 hours | Moderate impact, affecting a limited number of users or a non-critical system. Standard response and resolution timelines apply. Response Time: Within 2 hours |
| P4 | Low/Sev4 | Minimal | 8 hours | Such as a request for information or a desktop/user support issue. Lower priority in the queue. Response Time: Within 8 hours (excluding weekends/public holidays) |
| P5 | Low | None | 2 Days | Customization & system configuration changes (Training request, Customization, Reports modification, New Reports and Imbalances before month end or Data Recovery, ...etc). Response Time: Within 2 Days (excluding weekends/public holidays) |
<div style={{ overflowX: 'auto' }}>
  <table className="min-w-full border border-border text-sm">
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
      <tr>
        <td className="border border-border px-3 py-2">P1</td>
        <td className="border border-border px-3 py-2">Critical/Sev1</td>
        <td className="border border-border px-3 py-2">High</td>
        <td className="border border-border px-3 py-2">15 minutes</td>
        <td className="border border-border px-3 py-2">Major business impact, widespread service outage, or a critical system failure. Requires immediate attention and response. Response Time: Within 15 minutes</td>
      </tr>
      <tr>
        <td className="border border-border px-3 py-2">P2</td>
        <td className="border border-border px-3 py-2">High/Sev2</td>
        <td className="border border-border px-3 py-2">High</td>
        <td className="border border-border px-3 py-2">30 minutes</td>
        <td className="border border-border px-3 py-2">Significant impact to business operations or a large number of users affected. Requires escalation and expedited resolution. Response Time: Within 30 minutes</td>
      </tr>
      <tr>
        <td className="border border-border px-3 py-2">P3</td>
        <td className="border border-border px-3 py-2">Medium/Sev3</td>
        <td className="border border-border px-3 py-2">Moderate</td>
        <td className="border border-border px-3 py-2">2 hours</td>
        <td className="border border-border px-3 py-2">Moderate impact, affecting a limited number of users or a non-critical system. Standard response and resolution timelines apply. Response Time: Within 2 hours</td>
      </tr>
      <tr>
        <td className="border border-border px-3 py-2">P4</td>
        <td className="border border-border px-3 py-2">Low/Sev4</td>
        <td className="border border-border px-3 py-2">Minimal</td>
        <td className="border border-border px-3 py-2">8 hours</td>
        <td className="border border-border px-3 py-2">Such as a request for information or a desktop/user support issue. Lower priority in the queue. Response Time: Within 8 hours (excluding weekends/public holidays)</td>
      </tr>
      <tr>
        <td className="border border-border px-3 py-2">P5</td>
        <td className="border border-border px-3 py-2">Low</td>
        <td className="border border-border px-3 py-2">None</td>
        <td className="border border-border px-3 py-2">2 Days</td>
        <td className="border border-border px-3 py-2">Customization & system configuration changes (Training request, Customization, Reports modification, New Reports and Imbalances before month end or Data Recovery, ...etc). Response Time: Within 2 Days (excluding weekends/public holidays)</td>
      </tr>
    </tbody>
  </table>
</div>

Note: Response times for P4 and P5 exclude weekends and public holidays.`,
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
  },
  {
    id: "q8",
    question: "How do I request an online session or remote support from ACT?",
    answer: `ACT offers remote support sessions to help diagnose and resolve issues more efficiently. You can request an online session in the following ways:

• Through the Support form: When opening a ticket, check the box labeled "Request Remote Session" and select your preferred time slot.
• During a Phone Call: If you are speaking with a support engineer by phone, simply ask them to initiate a remote session.
• Via Email: Include "Request for Remote Session" in the subject line of your support email.
• Via Live Chat: Use the live chat feature in the support page to request a remote session.`,
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
  },
];

const formSteps = [
  { id: "contact", title: "Contact Info", description: "Your details" },
  { id: "system", title: "System Selection", description: "Select affected system" },
  { id: "issue", title: "Issue Details", description: "Describe the problem" },
  { id: "priority", title: "Review & Submit", description: "Priority and submit" },
];

const contactChannels = [
  {
    icon: Phone,
    title: "Call Us",
    description: "You can reach our dedicated support line during business hours.",
    action: "19488",
    actionLabel: "Egypt Hotline",
  },
  {
    icon: MessageCircle,
    title: "Chat With Us",
    description: "Use our integrated chatbot for instant assistance or to open a support case.",
    action: "Start Chat",
    actionLabel: "Live Support",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond promptly to address your inquiry.",
    action: "support@act.eg",
    actionLabel: "Email Support",
  },
];

const SupportPage = () => {
  const { toast } = useToast();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });

  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [otherSystem, setOtherSystem] = useState("");
  const [priority, setPriority] = useState("medium");
  const [responseMethod, setResponseMethod] = useState("email");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    actId: "",
    subject: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSystemToggle = (system: string) => {
    setSelectedSystems((prev) => (prev.includes(system) ? prev.filter((s) => s !== system) : [...prev, system]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_SUPPORT_TEMPLATE_ID || "YOUR_SUPPORT_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not provided",
        location: formData.location || "Not provided",
        act_id: formData.actId || "Not provided",
        systems: selectedSystems.join(", ") || "Not specified",
        other_system: otherSystem || "None",
        subject: formData.subject,
        description: formData.description,
        priority: priority.toUpperCase(),
        response_method: responseMethod,
        to_email: "support@act.eg",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Support Ticket Submitted!",
        description: "Our team will respond based on your selected priority level.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        actId: "",
        subject: "",
        description: "",
      });
      setSelectedSystems([]);
      setOtherSystem("");
      setPriority("medium");
      setResponseMethod("email");
      setCurrentStep(0);
    } catch (error) {
      console.error("Failed to submit ticket:", error);
      toast({
        title: "Error",
        description: "Failed to submit ticket. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">ACT Support</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              We're Here to <span className="text-primary">Support You</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At ACT, we're always here to support you. Whether you're searching for quick answers, need expert
              assistance, or want to submit a service request, our support team is ready to help you every step of the
              way.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 border-y border-border/50">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Support in Numbers</h2>
            <p className="text-muted-foreground text-lg">
              Delivering excellence across regions with measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-700 delay-${index * 100} ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section ref={formRef} className="py-20">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Can We Help You Today?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you're experiencing an issue, please fill out the form below to open a support ticket. Our specialized
              support team will get back to you promptly based on the priority of your request.
            </p>
          </div>

          <div
            className={`max-w-5xl mx-auto transition-all duration-700 ${formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
              {/* Steps Sidebar */}
              <div className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-5 top-8 bottom-8 w-px bg-border" />
                    {/* Progress Line */}
                    <div
                      className="absolute left-5 top-8 w-px bg-primary transition-all duration-500"
                      style={{
                        height: `${(currentStep / (formSteps.length - 1)) * 100}%`,
                        maxHeight: "calc(100% - 64px)",
                      }}
                    />

                    <div className="space-y-0">
                      {formSteps.map((step, index) => (
                        <button
                          key={step.id}
                          onClick={() => setCurrentStep(index)}
                          className="w-full flex items-start gap-4 py-4 text-left group"
                        >
                          <div
                            className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                              index < currentStep
                                ? "bg-primary text-primary-foreground"
                                : index === currentStep
                                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                                  : "bg-muted text-muted-foreground border border-border"
                            }`}
                          >
                            {index < currentStep ? (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              index + 1
                            )}
                          </div>
                          <div className="pt-1">
                            <p
                              className={`font-medium transition-colors ${
                                index === currentStep
                                  ? "text-primary"
                                  : index < currentStep
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {step.title}
                            </p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Steps Indicator */}
              <div className="lg:hidden mb-6">
                <div className="flex items-center justify-between mb-4">
                  {formSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <button
                        onClick={() => setCurrentStep(index)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                          index < currentStep
                            ? "bg-primary text-primary-foreground"
                            : index === currentStep
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground border border-border"
                        }`}
                      >
                        {index < currentStep ? "✓" : index + 1}
                      </button>
                      {index < formSteps.length - 1 && (
                        <div
                          className={`w-full h-0.5 mx-1 ${index < currentStep ? "bg-primary" : "bg-border"}`}
                          style={{ minWidth: "20px" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-primary">{formSteps[currentStep].title}</p>
                <p className="text-xs text-muted-foreground">{formSteps[currentStep].description}</p>
              </div>

              {/* Form Content */}
              <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Contact Information */}
                  {currentStep === 0 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="font-display text-xl font-semibold text-foreground">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">
                            Full Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email Address <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Phone Number <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location (City, Branch)</Label>
                          <Input
                            id="location"
                            placeholder="Enter your location"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="actId">ACT ID (if applicable)</Label>
                          <Input
                            id="actId"
                            placeholder="Enter your ACT ID"
                            value={formData.actId}
                            onChange={(e) => handleInputChange("actId", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Select System */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                          Select System for Support
                        </h3>
                        <p className="text-sm text-muted-foreground">You can select more than one if needed</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {systemOptions.map((system) => (
                          <div
                            key={system}
                            className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                              selectedSystems.includes(system)
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                            onClick={() => handleSystemToggle(system)}
                          >
                            <Checkbox
                              id={system}
                              checked={selectedSystems.includes(system)}
                              onCheckedChange={() => handleSystemToggle(system)}
                            />
                            <Label htmlFor={system} className="text-sm font-normal cursor-pointer flex-1">
                              {system}
                            </Label>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="otherSystem">Other System</Label>
                        <Input
                          id="otherSystem"
                          placeholder="Specify other system"
                          value={otherSystem}
                          onChange={(e) => setOtherSystem(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Issue Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="font-display text-xl font-semibold text-foreground">Issue Details</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            Subject <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="subject"
                            placeholder="Enter the subject of your issue"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">
                            Description <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Please describe your issue in as much detail as possible, including any error messages, affected modules, steps taken, etc."
                            className="min-h-[150px]"
                            value={formData.description}
                            onChange={(e) => handleInputChange("description", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Attachments (Optional)</Label>
                          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                            <p className="text-xs text-muted-foreground mt-1">Screenshots, logs, or relevant files</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Priority & Response */}
                  {currentStep === 3 && (
                    <div className="space-y-8 animate-fade-in">
                      <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-foreground">Priority Level</h3>
                        <RadioGroup value={priority} onValueChange={setPriority} className="space-y-3">
                          <div
                            className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                              priority === "low"
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value="low" id="low" className="mt-1" />
                            <div>
                              <Label htmlFor="low" className="font-medium cursor-pointer">
                                Low
                              </Label>
                              <p className="text-sm text-muted-foreground">General inquiry or minor issue</p>
                            </div>
                          </div>
                          <div
                            className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                              priority === "medium"
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value="medium" id="medium" className="mt-1" />
                            <div>
                              <Label htmlFor="medium" className="font-medium cursor-pointer">
                                Medium
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Functionality affected but workaround available
                              </p>
                            </div>
                          </div>
                          <div
                            className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                              priority === "high"
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value="high" id="high" className="mt-1" />
                            <div>
                              <Label htmlFor="high" className="font-medium cursor-pointer">
                                High
                              </Label>
                              <p className="text-sm text-muted-foreground">Business-critical issue, system unusable</p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          Preferred Response Method
                        </h3>
                        <RadioGroup
                          value={responseMethod}
                          onValueChange={setResponseMethod}
                          className="flex flex-wrap gap-4"
                        >
                          <div
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                              responseMethod === "email"
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value="email" id="resp-email" />
                            <Label htmlFor="resp-email" className="cursor-pointer">
                              Email
                            </Label>
                          </div>
                          <div
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                              responseMethod === "phone"
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value="phone" id="resp-phone" />
                            <Label htmlFor="resp-phone" className="cursor-pointer">
                              Phone Call
                            </Label>
                          </div>
                          <div
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                              responseMethod === "whatsapp"
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value="whatsapp" id="resp-whatsapp" />
                            <Label htmlFor="resp-whatsapp" className="cursor-pointer">
                              WhatsApp / Chat
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                      disabled={currentStep === 0}
                      className="gap-2"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Previous
                    </Button>

                    {currentStep < formSteps.length - 1 ? (
                      <Button
                        type="button"
                        variant="accent"
                        onClick={() => setCurrentStep((prev) => Math.min(formSteps.length - 1, prev + 1))}
                        className="gap-2"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="accent" className="gap-2" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Ticket
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prefer Another Way Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-width px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prefer Another Way to Reach Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer multiple channels to make support fast and convenient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactChannels.map((channel) => (
              <div
                key={channel.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <channel.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                <span className="text-primary font-semibold text-lg">{channel.action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;
