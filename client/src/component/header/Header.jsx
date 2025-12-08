// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown, ChevronUp ,ChevronRight} from "lucide-react";

// export default function Header() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null); // for mobile submenu

//   const links = [
//     {
//       href: "#",
//       label: "SERVICES",
//       submenu: [
//         { href: "/services/energy-audit", label: "ENERGY AUDIT" },
//         { href: "/services/power-consultancy", label: "POWER CONSULTANCY" },
//         { href: "/services/safety-audit", label: "SAFETY AUDIT" },
//         { href: "/services/mep", label: "MEP" },
//          { href: "/services/market-research-survey-training", label: "MARKET RESEARCH, SURVEY & TRAINING" },
//           { href: "/services/project-management-consultancy", label: "PROJECT MANAGEMENT CONSULTANCY" },
//       ],
//     },
//     { href: "/projects", label: "PROJECTS" },

//     { href: "#", label: "ABOUT",
//     submenu: [
//         { href: "/about/about-pps", label: "ABOUT PPS" },
//         { href: "/about/key-resources", label: "KEY RESOURCES",
//           submenu: [
//         { href: "/about/key-resources/resource-1", label: "Resource 1" },
//         { href: "/about/key-resources/resource-2", label: "Resource 2" },
//         { href: "/about/key-resources/resource-3", label: "Resource 3" },
//       ]
//          },
//     ]
//      },

//     { href: "#", 
//     label: "INSIGHTS" ,
//     submenu: [
//         { href: "/insights/blogs", label: "BLOGS" },
//         { href: "/insights/case-studies", label: "CASE STUDIES" },
//       ]
//     },

//     { href: "/gallery", label: "GALLERY" },
//     { href: "/career", label: "CAREER" },
//     { href: "/contact-us", label: "CONTACT US" },
//   ];

//   return (
//     <header className="w-full shadow-md bg-white px-6 md:px-16 py-4 flex items-center justify-between relative lg:px-20 ">
//     {/* Left: Logo */}
//     <Link href="/">
//       <Image
//       src="/assets/home/PPSLogoHeader.png"
//       alt="Logo"
//       width={150}
//       height={38}
//       className="cursor-pointer"/>
//     </Link>

//     {/* Desktop Nav */}
//       <nav className="hidden md:flex space-x-4 content">
//       {links.map((link) => (
//       <div key={link.label} className="relative group content">
//       {/* <Link href={link.href}  className={`content nav-link ${pathname === link.href ? "active" : ""}`}>
      
//       {link.label}{link.submenu && (
//                 <ChevronDown
//                   size={20}
//                   className="pt-1 transition-transform duration-300 group-hover:rotate-180"
//                 />
//               )}
      
//       </Link> */}
//       <Link
//   href={link.href}
//   className={`content nav-link flex items-center gap-1 ${pathname === link.href ? "active" : ""}`}
// >
//   <span>{link.label}</span>

//   {/* {link.submenu && (
//     <ChevronDown
//       size={18}
//       className="transition-transform duration-300 group-hover:rotate-180"
//     />
//   )} */}

//   {link.submenu && (
//   <ul className="absolute left-0 w-52 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 px-5">
//     {link.submenu.map((sublink) => (
//       <li key={sublink.href} className="relative group/sub">

//         <Link 
//           href={sublink.href}
//           className="block text-[#7B0000] hover:bg-[#889F2D] hover:text-white py-2.5 px-2.5 text-[16px] font-medium flex justify-between items-center"
//         >
//           {sublink.label}

//           {/* SHOW ARROW if this sublink has submenu */}
//           {sublink.submenu && <ChevronRight size={16} />}
//         </Link>

//         {/* SECOND LEVEL SUBMENU */}
//         {sublink.submenu && (
//           <ul className="absolute left-full top-0 w-52 bg-white shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 px-5">
//             {sublink.submenu.map((child) => (
//               <li key={child.href}>
//                 <Link
//                   href={child.href}
//                   className="block text-[#7B0000] hover:bg-[#889F2D] hover:text-white py-2.5 px-2.5 text-[16px] font-medium"
//                 >
//                   {child.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// )}
// </Link>

//       {/* Submenu for desktop */}
//       {link.submenu && (
//         <ul className="absolute left-0 w-52  bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 content px-5">
//         {link.submenu.map((sublink) => (
//         <li key={sublink.href}>
//         <Link href={sublink.href} className="block text-[#7B0000] hover:bg-[#889F2D] hover:text-[#ffffff] py-2.5 px-2.5 text-[16px] font-medium">
//         {sublink.label}
//         </Link>
//         </li>))}
//         </ul>)}
//         </div>))}
//       </nav>

//       {/* Desktop Button */}
//       <div className="hidden md:block">
//       <Link href="/contact-us">
//       <button className="px-4 py-2 hover:bg-green-700 transition button">Request Quote</button>
//       </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <button className="md:hidden p-2"
//       onClick={() => setIsOpen(!isOpen)}baria-label="Toggle Menu" >
//       {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Mobile Drawer */}
//       {isOpen && (
//       <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start py-6 space-y-2 md:hidden z-50">
//       {links.map((link) => (
//       <div key={link.href} className="w-full content">
//       <div className="flex justify-between items-center px-6 py-1 w-full cursor-pointer "
//       onClick={() =>link.submenu  ? setOpenSubmenu(openSubmenu === link.label ? null : link.label) : setIsOpen(false) }>

//       <Link href={link.href} className={`text-gray-700 font-medium  ${ pathname.startsWith(link.href) ? "font-bold text-green-700" : "" }`}> {link.label} </Link>
//       {link.submenu && (openSubmenu === link.label ? ( <ChevronUp size={18} />) : (
//       <ChevronDown size={18} />))}
//       </div>

//       {/* Mobile submenu */}
//       {link.submenu && openSubmenu === link.label && (
//       <div className="pl-10"> {link.submenu.map((sublink) => (
//       <Link key={sublink.href} href={sublink.href} className="block px-4 py-2 content" onClick={() => setIsOpen(false)}>
//       {sublink.label} </Link> ))}
//       </div> )}
//       </div>))}

//       <Link href="/contact-us" onClick={() => setIsOpen(false)} className="w-full px-6">
//       <button className="mt-4 px-4 py-2  w-full  button"> Request Quote</button>
//       </Link>
//       </div> )}
//     </header>
//   );
// }



"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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
          href: "/about/key-resources",
          label: "KEY RESOURCES",
          submenu: [
            { href: "/about/key-resources/key-persons", label: "KEY PERSONS" },
            { href: "/about/key-resources/associates-and-mentors", label: "ASSOCIATES AND MENTORS" }
          ]
        }
      ]
    },

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
    <header className="w-full shadow-md bg-white px-6 md:px-16 py-4 flex items-center justify-between relative lg:px-20">
      
      {/* Logo */}
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
      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <div key={link.label} className="relative group">

            {/* Top-level item */}
            <Link
              href={link.href}
              className={` nav-link flex items-center gap-1 ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
              {link.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition menu-items" />}
            </Link>

            {/* FIRST LEVEL SUBMENU */}
            {link.submenu && (
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  z-50  my-2">

                {link.submenu.map((sublink) => (
                  <li key={sublink.label} className="relative group/sub">
                    <Link
                      href={sublink.href}
                      className="flex justify-between items-center text-[#7B0000] hover:bg-[#889F2D] hover:text-white px-3 py-2 bulletPoints"
                    >
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
                              className="block text-[#7B0000] hover:bg-[#889F2D] hover:text-white px-3 py-2 bulletPoints"
                            >
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
        <Link href="/contact-us">
          <button className="px-4 py-2 button">Request Quote</button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 space-y-2 md:hidden z-50">

          {links.map((link) => (
            <div key={link.label} className="w-full">

              <div
                className="flex justify-between px-6 py-2 cursor-pointer"
                onClick={() =>
                  link.submenu ? setOpenSubmenu(openSubmenu === link.label ? null : link.label) : setIsOpen(false)
                }
              >
                <Link href={link.href}>{link.label}</Link>

                {link.submenu && (
                  openSubmenu === link.label ? <ChevronUp size={18} /> : <ChevronDown size={18} />
                )}
              </div>

              {/* MOBILE FIRST-LEVEL SUBMENU */}
              {openSubmenu === link.label && link.submenu && (
                <div className="pl-8">
                  {link.submenu.map((sublink) => (
                    <div key={sublink.label}>
                      <Link href={sublink.href} className="block py-2 bulletPoints">{sublink.label}</Link>

                      {/* MOBILE SECOND LEVEL SUBMENU */}
                      {sublink.submenu && (
                        <div className="pl-6">
                          {sublink.submenu.map((child) => (
                            <Link key={child.label} href={child.href} className="block py-2 text-sm bulletPoints">
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

          <Link href="/contact-us" className="w-full px-6">
            <button className="mt-4 px-4 py-2 w-full button">Request Quote</button>
          </Link>
        </div>
      )}

    </header>
  );
}

