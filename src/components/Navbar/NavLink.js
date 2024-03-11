"use client";
import Link from "next/link";
import React from "react";

const NavLink = ({ href, text, currentPath }) => (
  <Link
    href={href}
    className={`py-2 px-4 rounded-2xl ${
      currentPath === href ? "bg-blue-400 text-black" : "text-white"
    } hover:bg-blue-400 hover:text-black`}
  >
    {text}
  </Link>
);

export default NavLink;
