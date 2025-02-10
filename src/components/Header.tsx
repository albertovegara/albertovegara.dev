"use client";

import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alberto-vb",
    icon: "",
  },
  {
    name: "GitHub",
    url: "https://github.com/alberto-vb",
    icon: "",
  },
];

export default function Header() {
  return (
    <nav className="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80">
      <Link
        href="/"
        className="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
      >
        <span>alberto-vb.dev</span>
      </Link>
      <div className="flex items-center space-x-1">
        <div className="min-w-[100px] grow font-mono mr-px">
          vegara.belmonte.alberto@gmail.com
        </div>
        {socialLinks.map((link) => {
          return link.name;
        })}
        <ThemeToggle />
      </div>
    </nav>
  );
}
