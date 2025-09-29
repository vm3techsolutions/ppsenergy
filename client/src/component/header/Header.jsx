

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/insights", label: "Insights" },
    { href: "/gallery", label: "Gallery" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full shadow-md bg-white px-6 md:px-16 py-4 flex items-center justify-between relative">
      {/* Left: Logo */}
      <Link href="/">
        <Image
          src="/assets/home/PPSLogoHeader.png"
          alt="Logo"
          width={150}
          height={38}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6  title ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link href="/quote">
          <button className="px-4 py-2  hover:bg-green-700 transition button">
            Request Quote
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-gray-700 hover:text-blue-600 transition ${
                pathname.startsWith(link.href) ? "font-bold text-blue-700" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/quote" onClick={() => setIsOpen(false)}>
            <button className="mt-4 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
              Request Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
