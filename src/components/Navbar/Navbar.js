"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthenticated = true;
  const isAdmin = true;
  return (
    <div
      className={`flex justify-between font-mono items-center py-3 px-5 shadow-lg bg-black text-white`}
    >
      <div>
        <h1 className="text-xl">
          <Link href={"/"}>Blogging Web App</Link>
        </h1>
      </div>
      <div className="gap-3 hidden md:flex">
        <NavLink href={"/about"} text="About" currentPath={pathname} />
        <NavLink href={"/contact"} text="Contact" currentPath={pathname} />
        <NavLink href={"/blog"} text="Blog" currentPath={pathname} />
        {isAdmin && (
          <NavLink href={"/admin"} text="Admin" currentPath={pathname} />
        )}
        <button className="bg-black rounded-2xl py-2 px-4 border bottom-2 border-blue-400 hover:bg-blue-400 hover:text-black">
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
