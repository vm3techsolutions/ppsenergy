"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // for mobile submenu

  const links = [
    {
      href: "#",
      label: "SERVICES",
      submenu: [
        { href: "/services/energy-audit", label: "ENERGY AUDIT" },
        { href: "/services/power-consultancy", label: "POWER CONSULTANCY" },
        { href: "/services/safety-audit", label: "SAFETY AUDIT" },
        { href: "/services/mep", label: "MEP" },
         { href: "/services/market-research-survey-training", label: "MARKET RESEARCH, SURVEY & TRAINING" },
          { href: "/services/project-management-consultancy", label: "PROJECT MANAGEMENT CONSULTANCY" },
      ],
    },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about-us", label: "ABOUT US" },

    { href: "#", 
    label: "INSIGHTS" ,
    submenu: [
        { href: "/insights/blogs", label: "BLOGS" },
        { href: "/insights/case-studies", label: "CASE STUDIES" },
      ]
    },

    { href: "/gallery", label: "GALLERY" },
    { href: "/career", label: "CAREER" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <header className="w-full shadow-md bg-white px-6 md:px-16 py-4 flex items-center justify-between relative lg:px-20 ">
    {/* Left: Logo */}
    <Link href="/">
      <Image
      src="/assets/home/PPSLogoHeader.png"
      alt="Logo"
      width={150}
      height={38}
      className="cursor-pointer"/>
    </Link>

    {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 content">
      {links.map((link) => (
      <div key={link.label} className="relative group content">
      {/* <Link href={link.href}  className={`content nav-link ${pathname === link.href ? "active" : ""}`}>
      
      {link.label}{link.submenu && (
                <ChevronDown
                  size={20}
                  className="pt-1 transition-transform duration-300 group-hover:rotate-180"
                />
              )}
      
      </Link> */}
      <Link
  href={link.href}
  className={`content nav-link flex items-center gap-1 ${pathname === link.href ? "active" : ""}`}
>
  <span>{link.label}</span>

  {link.submenu && (
    <ChevronDown
      size={18}
      className="transition-transform duration-300 group-hover:rotate-180"
    />
  )}
</Link>

      {/* Submenu for desktop */}
      {link.submenu && (
        <ul className="absolute left-0 w-52  bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 content px-5">
        {link.submenu.map((sublink) => (
        <li key={sublink.href}>
        <Link href={sublink.href} className="block text-[#7B0000] hover:bg-[#889F2D] hover:text-[#ffffff] py-2.5 px-2.5 text-[16px] font-medium">
        {sublink.label}
        </Link>
        </li>))}
        </ul>)}
        </div>))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
      <Link href="/contact-us">
      <button className="px-4 py-2 hover:bg-green-700 transition button">Request Quote</button>
      </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2"
      onClick={() => setIsOpen(!isOpen)}baria-label="Toggle Menu" >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start py-6 space-y-2 md:hidden z-50">
      {links.map((link) => (
      <div key={link.href} className="w-full content">
      <div className="flex justify-between items-center px-6 py-1 w-full cursor-pointer "
      onClick={() =>link.submenu  ? setOpenSubmenu(openSubmenu === link.label ? null : link.label) : setIsOpen(false) }>

      <Link href={link.href} className={`text-gray-700 font-medium  ${ pathname.startsWith(link.href) ? "font-bold text-green-700" : "" }`}> {link.label} </Link>
      {link.submenu && (openSubmenu === link.label ? ( <ChevronUp size={18} />) : (
      <ChevronDown size={18} />))}
      </div>

      {/* Mobile submenu */}
      {link.submenu && openSubmenu === link.label && (
      <div className="pl-10"> {link.submenu.map((sublink) => (
      <Link key={sublink.href} href={sublink.href} className="block px-4 py-2 content" onClick={() => setIsOpen(false)}>
      {sublink.label} </Link> ))}
      </div> )}
      </div>))}

      <Link href="/contact-us" onClick={() => setIsOpen(false)} className="w-full px-6">
      <button className="mt-4 px-4 py-2  w-full  button"> Request Quote</button>
      </Link>
      </div> )}
    </header>
  );
}
