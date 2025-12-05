import { ShieldCheck, SearchCode, CloudCheck } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface TrainingProgram {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
  details: string[];
  fullDetails: string[];
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "soc-analyst",
    icon: ShieldCheck,
    title: "SOC Analyst – Incident Investigation",
    description:
      "Learn to investigate and remediate security incidents like a professional SOC analyst.",
    price: "800",
    duration: "6 weeks",
    details: [
      "Real-world malware & phishing investigations",
      "User risk & identity-related alert handling",
      "Incident remediation, containment & documentation",
    ],
    fullDetails: [
      "How to investigate and analyze security incidents professionally",
      "Malware simulation, detection, and investigation",
      "Phishing simulation and full investigation (compromised account, password and token theft)",
      "User Risk Investigation and identity-related alert handling",
      "Investigating alerts such as atypical travel, unfamiliar sign-in properties, MFA rejected",
      "Investigating suspicious email rule creation and other identity threats",
      "How to remediate and contain incidents",
      "How to document investigation findings in a professional SOC format",
      "Understanding SOC workflow: triage → investigate → respond → close",
      "Hands-on guidance to operate like a real SOC Analyst",
    ],
  },
  {
    id: "advanced-soc",
    icon: SearchCode,
    title: "Advanced SOC Analyst (Tier 2 & 3)",
    description:
      "Master advanced threat hunting, KQL, SIEM optimization, and SOC automation strategies.",
    price: "1,200",
    duration: "6 weeks",
    details: [
      "Advanced threat hunting techniques",
      "KQL analytics rules & SIEM optimization",
      "Playbook automation & SOC architecture",
    ],
    fullDetails: [
      "Advanced threat hunting with enterprise-level tools",
      "Building automated playbooks for SOC processes",
      "Creating workbooks and dashboards for visualization",
      "Writing advanced Kusto Query Language (KQL) analytics rules",
      "Reducing false positives and improving detection quality",
      "Developing SOC strategy and enterprise SOC architecture",
      "Understanding data connectors, log sources, and normalization",
      "Operational maturity and optimizing SOC workflows",
    ],
  },
  {
    id: "cloud-security",
    icon: CloudCheck,
    title: "Cloud Security Engineer",
    description:
      "Become proficient in securing cloud environments and managing enterprise endpoints.",
    price: "2,000",
    duration: "6 weeks",
    details: [
      "Intune device onboarding (Windows, iOS, Android)",
      "Microsoft Identity & Conditional Access",
      "Defender Suite (MDE, MDO, MCAS)",
    ],
    fullDetails: [
      "Onboarding Windows, iOS, and Android devices into Microsoft Intune",
      "Device registration and join processes",
      "Adding endpoint agents to Windows devices",
      "Creating device configuration and compliance policies",
      "Learning Microsoft Identity fundamentals",
      "Creating Conditional Access policies for Zero Trust access control",
      "Understanding Microsoft Defender for Endpoint and its investigation features",
      "Configuring Antivirus and Attack Surface Reduction (ASR) rules",
      "Defender for Office 365 – Email security and phishing protections",
      "Defender for Cloud Apps – Cloud security posture management",
      "Creating App Protection Policies for mobile devices",
      "Implementing enterprise-level endpoint and cloud security",
    ],
  },
];
