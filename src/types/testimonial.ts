export type TestimonialStatus =
  | "pending"
  | "approved"
  | "featured"
  | "archived";

export interface Testimonial {
  id: string;

  name: string;

  company: string;

  designation: string;

  avatar: string;

  rating: 1 | 2 | 3 | 4 | 5;

  message: string;

  project: string;

  featured: boolean;

  status: TestimonialStatus;

  /**
   * Optional public visibility.
   * Useful when integrating CMS/Prisma later.
   */
  published?: boolean;

  /**
   * Display order on homepage.
   */
  order?: number;

  /**
   * Optional project slug/reference.
   */
  projectSlug?: string;

  /**
   * Optional client website.
   */
  website?: string;

  createdAt: string;

  updatedAt: string;
}