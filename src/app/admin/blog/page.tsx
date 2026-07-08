import { CreateBlogDialog } from "@/components/admin/blog/create-blog-dialog";
import { BlogTable } from "@/components/admin/blog/blog-table";

export default function AdminBlogPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Blog
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage articles, drafts, scheduled posts, SEO metadata,
            and publishing from a single dashboard.
          </p>
        </div>

        <CreateBlogDialog />
      </div>

      <BlogTable />
    </div>
  );
}