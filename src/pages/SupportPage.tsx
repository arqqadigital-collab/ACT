import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MessageCircle,
  Users,
  ThumbsUp,
  Headphones,
  Clock,
  Upload,
  ChevronRight,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import {
  submitSupportTicket,
  SupportTicketData,
} from "@/services/supportTicketService";
import {
  getSupportStats,
  SupportStatsData,
} from "@/services/supportStatsService";
import {
  getSupportPageData,
  SupportPageData,
} from "@/services/supportPageService";

const statsData = [
  { icon: Users, value: "1500+", label: "Covered Customers Across Regions" },
  { icon: ThumbsUp, value: "90%", label: "Customer Satisfaction Rate" },
  { icon: Headphones, value: "40K+", label: "Annual Support Calls" },
  { icon: Clock, value: "30 Second", label: "Average Response Time" },
];

// Default fallback data
const defaultSystemOptions = [
  "Point of Sale (POS)",
  "Property Management System (PMS)",
  "SUN Financial System",
  "ERP System",
  "Inventory / Procurement",
  "Network / Infrastructure",
];

const defaultFormSteps = [
  { id: "contact", title: "Contact Info", description: "Your details" },
  {
    id: "system",
    title: "System Selection",
    description: "Select affected system",
  },
  { id: "issue", title: "Issue Details", description: "Describe the problem" },
];

const defaultContactChannels = [
  {
    icon: Phone,
    title: "Call Us",
    description:
      "You can reach our dedicated support line during business hours.",
    action: "19488",
    actionLabel: "Egypt Hotline",
  },
  {
    icon: MessageCircle,
    title: "Chat With Us",
    description:
      "Use our integrated chatbot for instant assistance or to open a support case.",
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
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();

  const [supportStatsData, setSupportStatsData] =
    useState<SupportStatsData | null>(null);
  const [supportPageData, setSupportPageData] =
    useState<SupportPageData | null>(null);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [otherSystem, setOtherSystem] = useState("");
  const [priority, setPriority] = useState("medium");
  const [responseMethod, setResponseMethod] = useState("email");
  const [currentStep, setCurrentStep] = useState(0);
  const [showPriorityDialog, setShowPriorityDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSystemToggle = (system: string) => {
    setSelectedSystems((prev) => {
      if (prev.includes(system)) {
        return prev.filter((s) => s !== system);
      } else {
        return [...prev, system];
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateCurrentStep = (): boolean => {
    if (currentStep === 0) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast({
          title: "Missing Required Fields",
          description:
            "Please fill in your full name, email, and phone number.",
          variant: "destructive",
        });
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.subject || !formData.description) {
        toast({
          title: "Missing Required Fields",
          description:
            "Please fill in the subject and description of your issue.",
          variant: "destructive",
        });
        return false;
      }
    }
    return true;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.description
    ) {
      toast({
        title: "Missing Required Fields",
        description:
          "Please fill in all required fields (Full Name, Email, Phone, Subject, and Description).",
        variant: "destructive",
      });
      return;
    }

    // Show priority dialog after form validation
    setShowPriorityDialog(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [statsData, pageData] = await Promise.all([
        getSupportStats(),
        getSupportPageData(),
      ]);
      if (statsData) {
        setSupportStatsData(statsData);
      }
      if (pageData) {
        setSupportPageData(pageData);
      }
    };
    fetchData();
  }, []);

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    const ticketData: SupportTicketData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      location: formData.location,
      actId: formData.actId,
      selectedSystems: selectedSystems,
      otherSystem: otherSystem,
      subject: formData.subject,
      description: formData.description,
      priority: priority as "low" | "medium" | "high",
      responseMethod: responseMethod as "email" | "phone" | "whatsapp",
      submittedAt: new Date().toISOString(),
    };

    const result = await submitSupportTicket(ticketData);

    if (result.success) {
      toast({
        title: "Ticket Submitted Successfully",
        description:
          "We've received your support ticket and will get back to you soon.",
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
      setShowPriorityDialog(false);
    } else {
      toast({
        title: "Submission Failed",
        description:
          result.error || "Failed to submit support ticket. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  // Extract dynamic data with fallbacks
  const heroSection = supportPageData?.heroSection || {
    badge: 'ACT Support',
    title: "We're Here to",
    highlightedText: 'Support You',
    description: "At ACT, we're always here to support you. Whether you're searching for quick answers, need expert assistance, or want to submit a service request, our support team is ready to help you every step of the way.",
  };

  const formSection = supportPageData?.formSection || {
    title: 'How Can We Help You Today?',
    subtitle: "If you're experiencing an issue, please fill out the form below to open a support ticket. Our specialized support team will get back to you promptly based on the priority of your request.",
    steps: defaultFormSteps,
  };

  const systemOptions = supportPageData?.systemOptions || defaultSystemOptions;
  const formSteps = formSection.steps;

  const contactSection = supportPageData?.contactSection || {
    title: 'Prefer Another Way to Reach Us?',
    subtitle: 'We offer multiple channels to make support fast and convenient.',
  };

  const contactChannels = supportPageData?.contactChannels || defaultContactChannels;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                {heroSection.badge}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {heroSection.title} <span className="text-primary">{heroSection.highlightedText}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {heroSection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 border-y border-border/50">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${statsInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {supportStatsData?.sectionTitle || "Our Support in Numbers"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {supportStatsData?.sectionDescription ||
                "Delivering excellence across regions with measurable impact."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(supportStatsData?.stats || statsData).map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-700 delay-${index * 100} ${statsInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
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
            className={`text-center mb-12 transition-all duration-700 ${formInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {formSection.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {formSection.subtitle}
            </p>
          </div>

          <div
            className={`max-w-5xl mx-auto transition-all duration-700 ${formInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"}`}
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
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
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
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
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
                <p className="text-sm font-medium text-primary">
                  {formSteps[currentStep].title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formSteps[currentStep].description}
                </p>
              </div>

              {/* Form Content */}
              <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Step 1: Contact Information */}
                  {currentStep === 0 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">
                            Location (City, Branch)
                          </Label>
                          <Input
                            id="location"
                            placeholder="Enter your location"
                            value={formData.location}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="actId">ACT ID (if applicable)</Label>
                          <Input
                            id="actId"
                            placeholder="Enter your ACT ID"
                            value={formData.actId}
                            onChange={handleInputChange}
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
                        <p className="text-sm text-muted-foreground">
                          You can select more than one if needed
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {systemOptions.map((system) => (
                          <div
                            key={system}
                            className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                              selectedSystems.includes(system)
                                ? "border-primary bg-primary/5"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <Checkbox
                              id={system}
                              checked={selectedSystems.includes(system)}
                              onCheckedChange={() => handleSystemToggle(system)}
                            />
                            <Label
                              htmlFor={system}
                              className="text-sm font-normal cursor-pointer flex-1"
                              onClick={() => handleSystemToggle(system)}
                            >
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
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Issue Details
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            Subject <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="subject"
                            placeholder="Enter the subject of your issue"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">
                            Description{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Please describe your issue in as much detail as possible, including any error messages, affected modules, steps taken, etc."
                            className="min-h-[150px]"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Attachments (Optional)</Label>
                          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Screenshots, logs, or relevant files
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() =>
                        setCurrentStep((prev) => Math.max(0, prev - 1))
                      }
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
                        onClick={() => {
                          if (validateCurrentStep()) {
                            setCurrentStep((prev) =>
                              Math.min(formSteps.length - 1, prev + 1),
                            );
                          }
                        }}
                        className="gap-2"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="accent" className="gap-2">
                        Continue
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Priority & Response Dialog */}
          <Dialog
            open={showPriorityDialog}
            onOpenChange={setShowPriorityDialog}
          >
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  Priority & Response Preference
                </DialogTitle>
                <DialogDescription>
                  Please select the priority level and your preferred response
                  method to complete your support ticket.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 py-4">
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Priority Level
                  </h3>
                  <RadioGroup
                    value={priority}
                    onValueChange={setPriority}
                    className="space-y-3"
                  >
                    <div
                      className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                        priority === "low"
                          ? "border-primary bg-primary/5"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem
                        value="low"
                        id="dialog-low"
                        className="mt-1"
                      />
                      <div>
                        <Label
                          htmlFor="dialog-low"
                          className="font-medium cursor-pointer"
                        >
                          Low
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          General inquiry or minor issue
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                        priority === "medium"
                          ? "border-primary bg-primary/5"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem
                        value="medium"
                        id="dialog-medium"
                        className="mt-1"
                      />
                      <div>
                        <Label
                          htmlFor="dialog-medium"
                          className="font-medium cursor-pointer"
                        >
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
                      <RadioGroupItem
                        value="high"
                        id="dialog-high"
                        className="mt-1"
                      />
                      <div>
                        <Label
                          htmlFor="dialog-high"
                          className="font-medium cursor-pointer"
                        >
                          High
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Business-critical issue, system unusable
                        </p>
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
                      <RadioGroupItem value="email" id="dialog-email" />
                      <Label htmlFor="dialog-email" className="cursor-pointer">
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
                      <RadioGroupItem value="phone" id="dialog-phone" />
                      <Label htmlFor="dialog-phone" className="cursor-pointer">
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
                      <RadioGroupItem value="whatsapp" id="dialog-whatsapp" />
                      <Label
                        htmlFor="dialog-whatsapp"
                        className="cursor-pointer"
                      >
                        WhatsApp / Chat
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPriorityDialog(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant="accent"
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? "Submitting..." : "Submit Ticket"}
                  {!isSubmitting && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Prefer Another Way Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-width px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {contactSection.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {contactSection.subtitle}
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
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {channel.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {channel.description}
                </p>
                <span className="text-primary font-semibold text-lg">
                  {channel.action}
                </span>
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
