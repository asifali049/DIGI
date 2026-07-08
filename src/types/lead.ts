export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal_sent"
  | "negotiation"
  | "won"
  | "lost";

export type LeadPriority =
  | "low"
  | "medium"
  | "high"
  | "urgent";

export type LeadSource =
  | "website"
  | "referral"
  | "linkedin"
  | "google"
  | "facebook"
  | "instagram"
  | "email"
  | "cold_call"
  | "other";

export interface Lead {
  id: string;

  // Contact
  name: string;
  email: string;
  phone: string;
  company: string;

  // Business
  service: string;
  budget: string;
  source: LeadSource;

  // CRM
  priority: LeadPriority;
  status: LeadStatus;
  assignedTo: string;

  // Optional
  website?: string;
  address?: string;
  estimatedValue?: number;
  tags?: string[];

  notes: string;
  followUpDate: string;

  createdAt: string;
  updatedAt: string;
}