"use client";

import React, { useState } from "react";
import { Menu, X, Camera } from "lucide-react";
import Link from "next/link";

const LINKS = [
  {
    href: "#home",
    name: "home",
  },
  {
    href: "#gallery",
    name: "gallery",
  },
  {
    href: "#services",
    name: "services",
  },
  {
    href: "#about",
    name: "about",
  },
  {
    href: "#testimonial",
    name: "testimonial",
  },
  {
    href: "#contact",
    name: "contact",
  },
];

const NavLink = ({ href, name }: { href: string; name: string }) => (
  <Link
    href={href}
    className="nav-link hover:underline transition-all hover:text-green-600"
  >
    <span className="capitalize">{name}</span>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Sagarmatha Studio
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {LINKS?.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-4 px-6">
            {LINKS?.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
