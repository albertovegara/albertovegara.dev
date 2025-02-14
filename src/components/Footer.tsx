import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="container mt-10 flex max-w-4xl mx-auto px-4 py-4 md:py-6 flex-col items-center justify-center space-y-1 md:flex-row md:justify-between md:space-y-0">
      <p className="font-serif">🧱 Innovating one line at a time</p>
      <div className="flex items-center space-x-1 text-sm md:text-md">
        <h2>Alberto Vegara Belmonte</h2>
        <span className="text-gray-500 dark:text-gray-400">-</span>
        <p>{currentYear}</p>
      </div>
    </footer>
  );
}
