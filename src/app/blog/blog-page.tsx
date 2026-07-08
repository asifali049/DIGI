"use client";

import { useMemo, useState } from "react";

import { blogPosts } from "@/constants/blog-posts";

import { BlogAuthor } from "@/components/sections/blog/blog-author";
import { BlogCategories } from "@/components/sections/blog/blog-categories";
import { BlogGrid } from "@/components/sections/blog/blog-grid";
import { BlogHero } from "@/components/sections/blog/blog-hero";
import { BlogNewsletter } from "@/components/sections/blog/blog-newsletter";
import { BlogPagination } from "@/components/sections/blog/blog-pagination";
import { BlogSearch } from "@/components/sections/blog/blog-search";
import { FeaturedArticle } from "@/components/sections/blog/featured-article";

const POSTS_PER_PAGE = 6;

export function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [requestedPage, setRequestedPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category.name === category;

      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );

  const currentPage = Math.min(requestedPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;

    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, filteredPosts]);

  return (
    <>
      <BlogHero />

      <FeaturedArticle />

      <BlogCategories
        value={category}
        onChange={setCategory}
      />

      <BlogSearch
        value={search}
        onChange={setSearch}
      />

      <BlogGrid posts={paginatedPosts} />

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setRequestedPage}
      />

      <BlogNewsletter />

      <BlogAuthor />
    </>
  );
}

export default BlogPage;