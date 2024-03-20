import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex justify-evenly">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogPage;
