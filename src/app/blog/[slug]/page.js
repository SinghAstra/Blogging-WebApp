import Image from "next/image";
import React from "react";
import "./blogPage.css";
const BlogPostPage = () => {
  return (
    <div className="flex h-screen">
      <div className=" flex items-center justify-center image-container">
        <div className="relative h-4/5 w-4/5">
          <Image
            src={
              "https://images.unsplash.com/photo-1683009427598-9c21a169f98f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            }
            alt="blog"
            fill
          />
        </div>
      </div>
      <div className=" blog-details-container text-white font-mono flex flex-col gap-5 p-4 justify-center">
        <h1 className="text-2xl">Title</h1>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="avatar">
              <div className="w-12 h-12 rounded relative">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="user"
                  fill
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <p>Author</p>
              <p>Sharma JI</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p>Published</p>
            <p>21 Dec,2023</p>
          </div>
        </div>
        <div className="blog-description">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of de Finibus Bonorum et (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on
            the theory of ethics, very popular during the Renaissance. The first
            line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line
            in section 1.10.32. The standard chunk of Lorem Ipsum used since the
            1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from de Finibus Bonorum et by Cicero are also reproduced in
            their exact original form, accompanied by English versions from the
            1914 translation by H. Rackham.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
