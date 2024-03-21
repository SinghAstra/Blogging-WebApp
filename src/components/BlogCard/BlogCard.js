import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./BlogCard.css";

const BlogCard = () => {
  return (
    <Link href={`/blog/123`} className="cursor-pointer">
      <div className="bg-blue-400 w-72 font-mono text-white h-fit p-2 m-2 shadow-sm shadow-blue-300">
        <div className="w-full flex">
          <div className="relative image-container h-64">
            <Image
              src={
                "https://images.unsplash.com/photo-1683009427598-9c21a169f98f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              }
              fill
              alt="blog"
            />
          </div>
          <div className="date-container flex justify-center items-center">
            <span className="text-sm">21 Dec,2021</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-1">
          <h1 className="text-xl">Title</h1>
          <p className="text-sm">Description</p>
          READ MORE
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
