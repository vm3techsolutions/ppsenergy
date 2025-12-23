"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import QuoteModal from "../../component/QuoteModal";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
        { href: "/services/project-management-consultancy", label: "PROJECT MANAGEMENT CONSULTANCY" }
      ]
    },

    { href: "/projects", label: "PROJECTS" },

     {
      href: "#",
      label: "ABOUT",
      submenu: [
        { href: "/about/about-pps", label: "ABOUT PPS" },
        {
          href: "#",
          label: "OUR TEAM",
          submenu: [
            { href: "/about/key-resources/key-persons", label: "KEY PERSONS" },
            { href: "/about/key-resources/associates-and-mentors", label: "ASSOCIATES AND MENTORS" }
          ]
        },
         { href: "/about/our-clients", label: "OUR CLIENTS" },
          { href: "/about/empanelments", label: "EMPANELMENTS" },
      ]
    },

    // { href: "/our-clients", label: "OUR CLIENTS" },

   

    {
      href: "#",
      label: "INSIGHTS",
      submenu: [
        { href: "/insights/blogs", label: "BLOGS" },
        { href: "/insights/case-studies", label: "CASE STUDIES" }
      ]
    },

    { href: "/gallery", label: "GALLERY" },
    { href: "/career", label: "CAREER" },
    { href: "/contact-us", label: "CONTACT US" }
  ];

  return (
    <>
    {/* <header className="w-full shadow-md bg-white px-6 md:px-16 py-4 flex items-center justify-between relative lg:px-20 menu-items"> */}
    <header className="sticky top-0 z-50 w-full bg-white shadow-md px-6 md:px-16 py-4 flex items-center justify-between lg:px-20 menu-items">
      
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/home/PPSLogoHeader.png"
          alt="Logo"
          width={150}
          height={38}
          className="cursor-pointer" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 ">
        {links.map((link) => (
          <div key={link.label} className="relative group ">

            {/* Top-level item */}
            <Link
              href={link.href}
              className={` nav-link flex items-center gap-1 ${pathname === link.href ? "active" : ""}`}  >
              {link.label}
              {link.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition" />}
            </Link>

            {/* FIRST LEVEL SUBMENU */}
            {link.submenu && (
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  z-50  my-2 sub-menu">

                {link.submenu.map((sublink) => (
                  <li key={sublink.label} className="relative group/sub">
                    <Link
                      href={sublink.href}
                      className="flex justify-between items-center text-[#7B0000] hover:bg-[#889F2D] hover:text-white px-3 py-2 " >
                      {sublink.label}
                      {sublink.submenu && <ChevronRight size={14} />}
                    </Link>

                    {/* SECOND LEVEL SUBMENU */}
                    {sublink.submenu && (
                      <ul className="absolute left-full top-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all ">
                        {sublink.submenu.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-3 py-2 sub-menu hover:bg-[#889F2D] ">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 button">
          Request Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 space-y-2 md:hidden z-50 ">

          {links.map((link) => (
            <div key={link.label} className="w-full team-members-modal-name">

              <div
                className="flex justify-between px-6 py-2 cursor-pointer team-members-modal-name"
                onClick={() =>
                  link.submenu ? setOpenSubmenu(openSubmenu === link.label ? null : link.label) : setIsOpen(false)   }   >
                <Link href={link.href}>{link.label}</Link>

                {link.submenu && (
                  openSubmenu === link.label ? <ChevronUp size={18} /> : <ChevronDown size={18} /> )}
              </div>

              {/* MOBILE FIRST-LEVEL SUBMENU */}
              {openSubmenu === link.label && link.submenu && (
                <div className="pl-8">
                  {link.submenu.map((sublink) => (
                    <div key={sublink.label}>
                      <Link href={sublink.href} className="block py-2 team-members-modal-name">{sublink.label}</Link>

                      {/* MOBILE SECOND LEVEL SUBMENU */}
                      {sublink.submenu && (
                        <div className="pl-6">
                          {sublink.submenu.map((child) => (
                            <Link key={child.label} href={child.href} className="block py-2 text-sm team-members-modal-name">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* <Link href="/contact-us" className="w-full px-6">
            <button className="mt-4 px-4 py-2 w-full button">Request Quote</button>
          </Link> */}
        </div>
      )}

    </header>

     {/* Popup Modal */}
      <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
  );

}

