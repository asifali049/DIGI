import {
  LayoutDashboard,
  FolderKanban,
  BriefcaseBusiness,
  FileText,
  MessageSquareQuote,
  Mail,
  ImageIcon,
  Bell,
  Settings,
  UserCircle2,
} from "lucide-react";

export interface AdminNavItem {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
  badge?: string;
}

export const adminNavigation: AdminNavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Services",
    href: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Blog",
    href: "/admin/blog",
    icon: FileText,
  },
  {
    title: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    title: "Leads",
    href: "/admin/leads",
    icon: Mail,
    badge: "New",
  },
  {
    title: "Media Library",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: UserCircle2,
  },
];