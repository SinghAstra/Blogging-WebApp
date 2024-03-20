import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./BlogCard.css";

const BlogCard = () => {
  return (
    <div className="bg-green-400 w-60">
      <div className="relative w-full border border-red-400">
        <div className="relative image-container bg-pink-400 h-60">
          <Image
            src={
              "https://images.unsplash.com/photo-1683009427598-9c21a169f98f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            }
            fill
            alt="blog"
          />
        </div>
        <span className="bg-yellow-400 date-container">21 Dec,2021</span>
      </div>
      <div>
        <h1>Title</h1>
        <p>Description</p>
        {/* <Link>READ MORE</Link> */}
      </div>
    </div>
  );
};

export default BlogCard;
