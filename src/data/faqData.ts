export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  section?: string;
}

export const faqData: FAQItem[] = [
  // I. General Support Information
  {
    id: "q1",
    section: "General Support Information",
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
  // II. Ticket Management
  {
    id: "q4",
    section: "Ticket Management",
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
    answer: `To help our support team resolve your issue as quickly as possible, please provide the following information in your ticket:
System/Application Name: Clearly identify which system is affected (e.g., Opera Cloud, Simphony, SunSystems, Maestro HR System).
Priority Level: Indicate the severity of the issue using our standard priority classification:
• Critical: System is down or completely non-functional, impacting all users and business operations.
• High: System is partially functional or experiencing significant performance degradation, impacting multiple users or critical business processes.
• Medium: System is functional but with minor issues affecting specific features or a limited number of users.
• Low: General questions, feature requests, or non-urgent issues.
Detailed Description: Provide a clear, comprehensive description of the problem.
Screenshots or Error Messages: Attach any relevant visual evidence.
System Environment Details: Include information about your system environment.
Affected Users: Specify how many users are affected.
Recent Changes: Mention any recent system updates, patches, or configuration changes.`,
  },
  {
    id: "q6",
    question: "What is the typical ticket response and resolution timeline?",
    answer: "table_priority",
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
  // III. Remote Support Sessions
  {
    id: "q10",
    section: "Remote Support Sessions",
    question: "What remote access tools does ACT use for online sessions?",
    answer: `ACT uses industry-standard, secure remote access tools for online support sessions. The specific tool may vary depending on your system and requirements, but we primarily use:

• TeamViewer: A widely-used remote desktop application that allows our support engineers to view and control your screen with your permission. You will receive a unique session ID and password for each session.
• Microsoft Teams, Cisco Webex.

All remote sessions are encrypted and require your explicit permission before the support engineer can access your system. You maintain full control and can terminate the session at any time.`,
  },
  {
    id: "q11",
    question: "Are online support sessions secure and confidential?",
    answer: `Yes, security and confidentiality are paramount in all our support interactions. Here is how we ensure the protection of your data:

• Encryption: All remote sessions are encrypted using industry-standard security protocols (TLS 1.2 or higher).
• Authentication: Support engineers must authenticate with their ACT credentials before accessing any remote session.
• Access Control: The support engineer only gains access to the specific system or application you authorize. They cannot access other systems or files on your network without explicit permission.
• Session Logging: All remote sessions are logged for quality assurance and security purposes. These logs are kept confidential and are only accessed by authorized ACT personnel.
• Data Protection: We comply with international data protection regulations, including GDPR and local privacy laws. Your data is never shared with third parties without your consent.
• Non-Disclosure Agreement: All ACT support engineers sign strict non-disclosure agreements (NDAs) to protect your confidential business information.

If you have specific security requirements or concerns, please discuss them with your Account Manager before scheduling a remote session.`,
  },
  {
    id: "q12",
    question: "What happens if I need to disconnect during a remote session?",
    answer: `If you need to disconnect during a remote session, simply inform the support engineer, and they will immediately terminate the connection. You can reconnect at any time by requesting a new session through the Support Form. If the issue was not fully resolved, the support engineer will document their findings and continue working on the ticket. You will receive a summary of what was accomplished during the session and the next steps for resolution.`,
  },
  // IV. System Updates, Patches, and Maintenance
  {
    id: "q13",
    section: "System Updates, Patches & Maintenance",
    question: "How does ACT handle system updates, patches, and version upgrades?",
    answer: `ACT takes a proactive approach to system maintenance to ensure your systems remain stable, secure, and up-to-date. Here is how we manage updates and upgrades:

• Patch Management: We continuously monitor Oracle and other vendor release schedules for security patches, hotfixes, and minor updates. Our support service includes advising you on which patches are critical for your environment and, where contracted, performing the necessary patches to maintain system stability and security. We typically apply security patches within 30 days of release, depending on the severity and your SLA.
• Testing: Before applying any patches to your production environment, we test them in a staging or development environment to ensure compatibility and prevent any adverse effects on your system.
• Scheduling: For patches that require system downtime, we will work with you to schedule the maintenance during a time that minimizes business disruption. We provide advance notice (typically 2-4 weeks) and detailed information about the expected downtime.
• Version Upgrades: Major version upgrades (e.g., from Opera 5 to Opera Cloud) are typically handled as separate, planned projects rather than routine support activities. These upgrades require careful planning, data migration, testing, and user training. We will work with you to develop a comprehensive upgrade plan, schedule the work, and provide support throughout the process.
• Communication: We keep you informed throughout the update process with notifications before, during, and after maintenance activities. We also provide detailed release notes explaining what was changed and any actions you may need to take.`,
  },
  {
    id: "q14",
    question: "What should I do if I experience issues after a system update or patch?",
    answer: `If you experience any issues after a system update or patch, please follow these steps:

1. Document the Issue: Note the exact time the issue started, what you were doing when it occurred, and any error messages you receive.
2. Open a Support Ticket: Submit a support ticket through the portal, email, or phone with the priority level "High" or "Critical" (depending on the severity). Clearly indicate that the issue started after a recent update or patch.
3. Provide Details: Include information about which patch or update was applied, the date it was applied, and how the issue is affecting your business.
4. Request Escalation: If the issue is critical and affecting business operations, request immediate escalation to our senior support team.
5. Rollback Option: In some cases, if the issue is severe and cannot be quickly resolved, we may recommend rolling back to the previous version or patch level. We will discuss this option with you and help execute the rollback if necessary.

Our support team will prioritize issues related to recent updates and work to resolve them as quickly as possible.`,
  },
  // V. Support Scope and Limitations
  {
    id: "q15",
    section: "Support Scope & Limitations",
    question: "What is included in ACT's standard support service?",
    answer: `ACT's standard support service includes the following:

• Technical Support: Assistance with troubleshooting, diagnosing, and resolving technical issues with your Oracle systems and hardware.
• Bug Fixes and Patches: Application of vendor-provided bug fixes and security patches to maintain system stability and security.
• Configuration Assistance: Guidance on configuring your systems to meet your business requirements (within the scope of standard functionality).
• Performance Optimization: Recommendations and assistance with optimizing system performance.
• User Training: Supplementary training and documentation support for your staff (comprehensive training programs may be available as an add-on service).
• Proactive Monitoring: Depending on your SLA, we may provide proactive system monitoring to identify and address potential issues before they impact your business.
• Hardware Support: Diagnosis, repair coordination, and replacement of faulty hardware components (for customers with hardware support contracts).`,
  },
  {
    id: "q16",
    question: "What is NOT included in ACT's standard support service?",
    answer: `To clearly define the scope of our support, the following are typically NOT included in standard support services:

• Custom Development: Creating new features, custom reports, or custom integrations beyond what is included in your implementation contract.
• Third-Party System Support: Support for third-party systems, applications, or integrations that ACT did not implement. You will need to contact the vendor of those systems directly.
• Data Recovery: Recovery of lost or corrupted data (though we can assist with backup and recovery procedures).
• Network Administration: Management of your network infrastructure, firewalls, or security systems (unless specifically contracted as part of our managed services).
• Database Administration: General database administration tasks beyond what is necessary to support your Oracle applications.
• User Support for Non-ACT Systems: Support for systems or applications not listed in your support contract.
• Cosmetic or Non-Critical Enhancements: Minor cosmetic changes or enhancements that do not affect system functionality.

If you require support for services outside the standard scope, please discuss this with your Account Manager to determine if they can be provided as an add-on service or professional services engagement.`,
  },
  {
    id: "q17",
    question: "Does ACT provide support for system customizations or third-party integrations?",
    answer: `Yes, with important qualifications. Our support extends to environments where ACT has performed the initial implementation, customization, or integration. Specifically:

• ACT-Implemented Customizations: We provide full support for any customizations, configurations, or integrations that ACT has designed and implemented. This includes troubleshooting, bug fixes, and modifications to these custom solutions.
• Core System Support: We provide support for the functionality of the core Oracle system, including standard features and configurations.
• Third-Party Integrations: If ACT implemented an integration with a third-party system (such as a payment gateway, POS system, or accounting software), we provide support for the integration logic and how it interfaces with your Oracle system. However, support for the third-party system itself is subject to the terms of your agreement with that vendor.
• Non-ACT Customizations: If your system includes customizations or integrations performed by another vendor or internal IT team, we can provide limited support (such as advice on how to integrate with our supported systems), but we cannot guarantee full support for those custom elements. We recommend discussing this with your Account Manager to clarify the scope of support.
• Integration Testing: When you implement new integrations or customizations, we recommend involving ACT in the testing and validation process to ensure compatibility with your Oracle systems.`,
  },
  // VI. Security, Compliance, and System Hardening
  {
    id: "q18",
    section: "Security, Compliance & System Hardening",
    question: "How does ACT ensure the security and compliance of my systems?",
    answer: `Security and compliance are fundamental to our support philosophy. Here is how we protect your systems:

• Security Best Practices: We adhere to industry best practices and vendor guidelines (Oracle, HPE Aruba) for system hardening, access control, and security configuration. This includes implementing strong authentication, encryption, and role-based access controls.
• Security Patch Management: We proactively monitor for security vulnerabilities and apply patches promptly. Security patches are typically prioritized and applied within 30 days of release, depending on the severity rating.
• Vulnerability Monitoring: We monitor known vulnerabilities in your systems and advise you on remediation steps.
• Compliance Support: We can provide consulting services to help you meet specific regulatory compliance requirements relevant to your industry, such as PCI-DSS (for payment processing), HIPAA (for healthcare), GDPR (for data protection), or industry-specific regulations.
• Access Control: We implement and maintain proper access controls to ensure that only authorized personnel can access sensitive systems and data.
• Audit Trails: We configure systems to maintain audit trails and logs of critical activities for compliance and security purposes.
• Disaster Recovery: We can assist with implementing and testing disaster recovery and business continuity plans.
• Security Awareness: We provide guidance on security best practices for your staff, including password management, data protection, and phishing awareness.

If you have specific compliance requirements, please discuss them with your Account Manager so we can ensure your systems are configured and maintained to meet those requirements.`,
  },
  {
    id: "q19",
    question: "What should I do if I suspect a security breach or data compromise?",
    answer: `If you suspect a security breach or unauthorized access to your systems, please take the following immediate actions:

1. Open a Critical Ticket: Submit a support ticket with priority level "Critical" immediately. Use the phone hotline for the fastest response.
2. Provide Details: Include information about what you observed that suggests a breach (e.g., unauthorized login attempts, unusual system activity, missing data).
3. Preserve Evidence: Do not delete logs or evidence. Our security team will need to investigate.
4. Limit Access: If possible, restrict access to the affected system to prevent further unauthorized activity.
5. Notify Your IT Team: Ensure your internal IT and security teams are aware of the potential breach.
6. Follow Incident Response Plan: If your organization has an incident response plan, activate it and coordinate with ACT's security team.

ACT will respond immediately to security incidents and work with you to investigate, contain, and remediate the breach. We will also provide guidance on notification requirements and regulatory compliance related to the breach.`,
  },
  // VII. Feature Requests and System Enhancements
  {
    id: "q20",
    section: "Feature Requests & System Enhancements",
    question: "How do I request a new feature or system enhancement?",
    answer: `ACT welcomes feedback and feature requests from our customers. Here is the process for requesting new features or system enhancements:

• Submit a Request: You can submit a feature request through the Customer Support Form by selecting "Feature Request" as the ticket type, or by emailing your request to support@act.eg with "Feature Request" in the subject line.
• Provide Details: Include a clear description of the feature you are requesting, the business problem it would solve, and how it would improve your operations. Provide as much context as possible.
• Assessment: Our product team will review your request and assess the feasibility, effort required, and potential impact on other customers. This assessment typically takes 5-10 business days.
• Prioritization: Feature requests are prioritized based on customer demand, alignment with product roadmap, and technical feasibility. You will be notified of the prioritization decision.
• Implementation: If approved, the feature will be scoped and scheduled as a separate project outside of standard break/fix support. We will provide you with an estimate of effort and timeline.
• Feedback: We value your input and will keep you informed of the status of your feature request. You can track the status through following up with support department.`,
  },
  {
    id: "q21",
    question: "What is the process for requesting a system enhancement or major configuration change?",
    answer: `Major configuration changes and system enhancements are handled through our Change Request (CR) process:

1. Submit a Change Request: Submit a detailed CR through the support form or email, describing the desired change and business justification.
2. Initial Assessment: Our team will review the request and assess the scope, complexity, and potential impact on your system and other users.
3. Feasibility Study: If the change is complex, we may conduct a feasibility study to determine the best approach and identify any risks.
4. Proposal: We will provide you with a detailed proposal including scope, timeline, effort estimate, and cost (if applicable).
5. Approval: Once you approve the proposal, we will schedule the work and provide you with a detailed implementation plan.
6. Implementation: We will execute the change in a controlled manner, typically in a test environment first, followed by production implementation.
7. Testing and Validation: We will thoroughly test the change to ensure it works as expected and does not negatively impact other system functionality.
8. Documentation: We will update system documentation and provide training to your staff on the new functionality.

Changes are typically scheduled during maintenance windows to minimize business disruption.`,
  },
  // VIII. Billing, Contracts, and Account Management
  {
    id: "q22",
    section: "Billing, Contracts & Account Management",
    question: "How is my support service billed?",
    answer: `Support service billing depends on your specific service contract. Common billing models include:

• Annual Subscription: A fixed annual fee for a defined level of support (e.g., 8x5 support with 4-hour response time).
• Usage-Based Billing: Charges based on the number of support hours consumed or the number of tickets opened.
• Tiered Pricing: Different pricing levels based on the scope of support (e.g., Basic, Standard, Premium).
• Hardware Support Add-On: Hardware support may be billed separately from software support, allowing you to customize your coverage.

Your invoice will detail the services provided, the billing period, and the amount due. If you have questions about your billing, please contact your Account Manager or our Finance department.`,
  },
  {
    id: "q23",
    question: "Can I modify my support contract or upgrade/downgrade my support plan?",
    answer: `Yes, you can modify your support contract at any time. To upgrade, downgrade, or make other changes to your support plan:

1. Contact Your Account Manager: Discuss your desired changes and the reasons for them.
2. Review Options: Your Account Manager will review available options and provide pricing for any changes.
3. Amendment: If you decide to proceed, we will prepare a contract amendment detailing the changes, effective date, and any pricing adjustments.
4. Execution: Once both parties sign the amendment, the changes will take effect on the specified date.
5. Transition: We will work with you to ensure a smooth transition to your new support plan, including any necessary configuration or process changes.

Changes to your support plan typically take effect at the beginning of your next billing period, though expedited changes may be available for an additional fee.`,
  },
  {
    id: "q24",
    question: "Who is my Account Manager, and how do I contact them?",
    answer: `Your Account Manager is your primary point of contact for all non-technical matters related to your support contract, billing, and account management. Your Account Manager's contact information should have been provided to you when your support contract commenced.

If you do not know who your Account Manager is or need to update their contact information:

• Check Your Contract: Your Account Manager's name and contact details should be listed in your contract/offer.
• Call Our Main Line: Call our main office at Egypt: 19488 and ask to be connected with your Account Manager.
• Email: Send an email to support@act.eg with "Account Manager Inquiry" in the subject line.

Your Account Manager can assist with contract questions, billing inquiries, support plan modifications, and escalation of complex issues.`,
  },
  // IX. Frequently Asked Operational Questions
  {
    id: "q25",
    section: "Frequently Asked Operational Questions",
    question: "What should I do if I cannot access the Customer Support Form?",
    answer: `If you are unable to access the support form at https://support.act.eg / https://www.act.eg/support, please try the following troubleshooting steps:

1. Check Your Internet Connection: Ensure you have a stable internet connection.
2. Clear Browser Cache: Clear your browser's cache and cookies, then try accessing the portal again.
3. Try a Different Browser: Try accessing the portal using a different web browser (e.g., Chrome, Firefox, Safari, Edge).
4. Reset Your Password: If you cannot log in, try resetting your password using the "Forgot Password" link on the login page.
5. Contact Support: If you still cannot access the portal, call our support hotline at 19488 (Egypt) to report the issue and open a ticket by phone.`,
  },
  {
    id: "q26",
    question: "How do I provide feedback on the quality of support I received?",
    answer: `We value your feedback and use it to continuously improve our support services. You can provide feedback in several ways:

• Survey: After your ticket is closed, you will receive a brief survey asking you to rate the quality of support and provide comments. Please take a few minutes to complete this survey.
• Feedback Form: You can send feedback directly to support@act.eg or to your Account Manager.
• Phone: Call our support hotline and ask to speak with a supervisor to provide verbal feedback.
• NPS Survey: Periodically, we conduct Net Promoter Score (NPS) surveys to gather broader feedback on your satisfaction with our support services.

All feedback is reviewed by our support management team and used to identify areas for improvement. If you have a concern about the quality of support, please escalate it immediately so we can address it.`,
  },
  {
    id: "q27",
    question: "What happens when my support contract expires?",
    answer: `When your support contract approaches expiration, we will contact you with renewal options. Here is what typically happens:

• Renewal Notice: You will receive a renewal notice before your contract expires.
• Renewal Options: We will provide you with renewal options, including options to maintain your current support level or upgrade/downgrade your plan.
• Pricing: Renewal pricing will be provided based on current rates and any changes to your service scope.
• Renewal Process: To renew, simply sign the renewal agreement and return it to your Account Manager.
• Continuity: If you renew before your contract expires, there will be no gap in support coverage.
• Expired Contracts: If your contract expires without renewal, you will no longer have access to support services. We will make reasonable efforts to contact you before expiration, but it is your responsibility to ensure timely renewal.

If your contract has already expired and you need to reinstate support, please contact your Account Manager immediately to discuss reinstatement options.`,
  },
  // X. Escalation and Complaint Resolution
  {
    id: "q28",
    section: "Escalation & Complaint Resolution",
    question: "What is the process for escalating a support ticket?",
    answer: `If you feel your issue is not being addressed in a timely manner according to your SLA, or if you are dissatisfied with the support you are receiving, you can request an escalation. The escalation path is as follows:

• Level 1 - Support Engineer: Your initial point of contact. If you have concerns, discuss them directly with your assigned support engineer.
• Level 2 - Support Team Lead/Manager: If the support engineer cannot resolve your concern, request escalation to the Support Team Lead or Manager. You can do this by adding a comment to your ticket or calling the support hotline.
• Level 3 - Support Director: If the issue remains unresolved after Level 2 escalation, you can request escalation to the Support Director.
• Level 4 - Account Manager: For issues related to contract terms, billing, or account management, escalate to your Account Manager.
• Level 5 - Executive Escalation: For serious concerns or complaints, you can request escalation to ACT's executive management. Contact your Account Manager or email CX@act.eg.

Each escalation level will review your case and work toward a resolution. Escalated tickets receive priority attention and faster response times.`,
  },
  {
    id: "q29",
    question: "What should I do if I have a complaint about the support service I received?",
    answer: `We take all complaints seriously and are committed to resolving them promptly. If you have a complaint:

1. Document the Issue: Write down the details of your complaint, including dates, times, names of support staff involved, and specific issues.
2. Contact Your Support Engineer: First, try to resolve the issue directly with your assigned support engineer or their manager.
3. Escalate: If direct resolution is not possible, follow the escalation process outlined above.
4. Formal Complaint: If you wish to file a formal complaint, send a detailed written complaint to CX@act.eg or to your Account Manager. Include all relevant documentation.
5. Investigation: ACT will investigate your complaint and provide you with a response within 5 business days.
6. Resolution: We will work with you to resolve the complaint and implement any necessary changes to prevent similar issues in the future.
7. Follow-Up: We will follow up with you to ensure the complaint has been satisfactorily resolved.

Your satisfaction is important to us, and we are committed to addressing any concerns you may have.`,
  },
  // XI. Additional Resources and Support
  {
    id: "q30",
    section: "Additional Resources & Support",
    question: "Does ACT provide documentation, knowledge base articles, or training materials?",
    answer: `Yes, we provide comprehensive documentation and resources to help you get the most from your systems:

• Webinars: We periodically conduct webinars on topics such as system optimization, new features, and best practices. Webinar schedules are posted on our website.
• Training Programs: Comprehensive training programs are available for new users or system refreshers. These can be delivered online or on-site, depending on your preference.`,
  },
  {
    id: "q31",
    question: "How can I stay informed about system updates, new features, and important announcements?",
    answer: `We keep our customers informed through multiple channels:

• Email Notifications: You will receive email notifications about important updates, maintenance windows, and new features.
• Release Notes: Detailed release notes are provided with each system update, explaining new features, bug fixes, and any actions you may need to take.
• Newsletter: Subscribe to our monthly newsletter for news, tips, and best practices.
• Account Manager: Your Account Manager will keep you informed of updates and changes relevant to your account.`,
  },
  {
    id: "q32",
    question: "What should I do if I need help beyond standard support?",
    answer: `If you need assistance beyond the scope of standard support, ACT offers several additional services:

• Professional Services: We offer professional services for custom development, system implementation, data migration, and other specialized projects. Contact your Account Manager for a quote.
• Managed Services: We offer managed services agreements that provide proactive monitoring, optimization, and management of your systems. This can reduce your operational burden and improve system performance.
• Consulting Services: Our consulting team can help with system design, optimization, compliance, security, and strategic planning. Consulting services are available on an hourly or project basis.
• Training Services: Beyond standard support training, we offer comprehensive training programs tailored to your organization's needs.
• Staff Augmentation: We can provide temporary or contract staff to supplement your internal IT team.

To discuss these services, please contact your Account Manager or email sales@act.eg.`,
  },
  // XII. Contact Information and Support Channels Summary
  {
    id: "q33",
    section: "Contact Information & Support Channels",
    question: "What are all the ways I can contact ACT Support?",
    answer: "table_contact",
  },
];
