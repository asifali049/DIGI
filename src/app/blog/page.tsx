import { blogMetadata } from "./metadata";
import { BlogPage } from "./blog-page";
import { BlogJsonLd } from "@/components/seo/blog-json-ld";

export const metadata = blogMetadata;

export default function Page() {
  return (
    <>
      <BlogJsonLd />
      <BlogPage />
    </>
  );
}