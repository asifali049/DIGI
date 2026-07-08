export type ProjectStatus =
  | "draft"
  | "active"
  | "completed"
  | "archived";

export type ProjectCategory =
  | "web"
  | "mobile"
  | "branding"
  | "ui-ux"
  | "marketing";

export interface Project {
  id: string;

  title: string;

  slug: string;

  description: string;

  thumbnail: string;

  category: ProjectCategory;

  status: ProjectStatus;

  client: string;

  technologies: string[];

  featured: boolean;

  published: boolean;

  views: number;

  liveUrl?: string;

  githubUrl?: string;

  // ---------- Optional Details ----------

  gallery?: string[];

  industry?: string;

  duration?: string;

  completionDate?: string;

  teamSize?: number;

  services?: string[];

  challenge?: string;

  solution?: string;

  results?: string[];

  seoTitle?: string;

  seoDescription?: string;

  createdAt: string;

  updatedAt: string;
}