export type ServiceStatus =
  | "draft"
  | "active"
  | "archived";

export type ServiceCategory =
  | "web-development"
  | "mobile-development"
  | "ui-ux-design"
  | "branding"
  | "digital-marketing"
  | "seo"
  | "automation"
  | "consulting";

export interface Service {
  id: string;

  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  icon: string;

  image: string;

  category: ServiceCategory;

  status: ServiceStatus;

  featured: boolean;

  published: boolean;

  priceFrom?: number;

  deliveryTime?: string;

  technologies: string[];

  order: number;

  createdAt: string;

  updatedAt: string;
}