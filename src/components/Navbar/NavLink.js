"use client";
import Link from "next/link";
import React from "react";

const NavLink = ({ href, text, currentPath }) => (
  <Link
    href={href}
    className={`py-2 px-4 rounded-2xl ${
      currentPath === href ? "bg-white text-black" : "text-white"
    }`}
  >
    {text}
  </Link>
);

export default NavLink;
