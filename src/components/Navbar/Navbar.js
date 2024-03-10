import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-black text-white font-mono items-center py-3 px-5 shadow-lg">
      <div>
        <h1 className="text-xl">
          <Link href={"/"}>Blogging Web App</Link>
        </h1>
      </div>
      <div className="flex gap-2">
        <Link
          href={"/about"}
          className="py-2 px-4 rounded-2xl hover:bg-white hover:text-black"
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className="py-2 px-4 rounded-2xl hover:bg-white hover:text-black"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
