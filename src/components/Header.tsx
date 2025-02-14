"use client";

import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alberto-vb",
    icon: LinkedIn,
  },
  {
    name: "GitHub",
    url: "https://github.com/alberto-vb",
    icon: Github,
  },
];

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 mb-1 w-full bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 space-y-1 md:flex md:items-center md:justify-between">
        <Link
          href="/"
          className="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
        >
          <span>alberto-vb.dev</span>
        </Link>
        <div className="grid grid-cols-1 space-y-1 md:flex md:items-center md:space-x-1">
          <div className="min-w-[100px] grow font-mono mr-[2px]">
            vegara.belmonte.alberto@gmail.com
          </div>
          <div className="flex items-center space-x-1">
            {socialLinks.map((link) => {
              // Destructure the icon component from the link object
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <IconComponent className="inline-block" />
                  </Button>
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
