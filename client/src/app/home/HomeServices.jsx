// "use client"

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function HomeServices() {
//   const [homeServices, setHomeServices] = useState([]);

//   useEffect(() => {
//     fetch("/data/home/HomeServices.json")
//       .then((res) => res.json())
//       .then((data) => setHomeServices(data));
//   }, []);

//   return (
//     <section className="common-section flex flex-col justify-center">
//       <div className="text-center mb-10">
//       <h3 className="title text-[#889F2D]">Services</h3>
//       <h2 className="center-section-heading">COMPREHENSIVE ENERGY STRATEGIES</h2>
//       <p className="content text-[#3D3D3D]">Comprehensive energy strategies are totally customized for your efficiency and business growth</p>
//       </div>

//       {/* Services Grid */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly items-stretch">
//       {homeServices.map((item) => (
//       <div
//       key={item.service_id}
//       className="flex flex-col text-white rounded-b-[10px] shadow-lg overflow-hidden bg-white  hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300">
//       {/* Image */}
//       <div className="group overflow-hidden">
//         <Image
//           src={item.service_image}
//           alt={item.service_title}
//           width={800}
//           height={500}
//           className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col grow px-4 py-4 text-left">
//       <h3 className="title text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2">
//       {item.service_title}</h3>
//       <p className="content text-[#3D3D3D] mb-5 grow">{item.service_description}</p>

//       {/* Button (aligned bottom) */}
//       <div className="mt-auto">
//       <Link href={item.service_link || "#"}>
//       <button className="button mt-3">Read More</button>
//       </Link>
//       </div>
//       </div>
//     </div>
//   ))}
// </div>


//   </section>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function HomeServices() {
//   const [homeServices, setHomeServices] = useState([]);
//   const [index, setIndex] = useState(0);

//   // Responsive items-per-view
//   const getItemsPerView = () => {
//     if (typeof window === "undefined") return 3;
//     if (window.innerWidth < 640) return 1; // mobile
//     if (window.innerWidth < 1024) return 2; // tablet
//     return 3; // desktop
//   };

//   const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

//   useEffect(() => {
//     fetch("/data/home/HomeServices.json")
//       .then((res) => res.json())
//       .then((data) => setHomeServices(data));
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setItemsPerView(getItemsPerView());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (homeServices.length === 0) return null;

//   // Slide 1-by-1
//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % homeServices.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) =>
//       prev - 1 < 0 ? homeServices.length - 1 : prev - 1
//     );
//   };

//   // Visible slides
//   const visibleSlides = [];
//   for (let i = 0; i < itemsPerView; i++) {
//     visibleSlides.push(homeServices[(index + i) % homeServices.length]);
//   }

//   return (
//     <section className="common-section flex flex-col justify-center relative">
//       <div className="text-center mb-10">
//         <h3 className="title text-[#889F2D]">Services</h3>
//         <h2 className="center-section-heading">COMPREHENSIVE ENERGY STRATEGIES</h2>
//         <p className="content text-[#3D3D3D]">
//           Comprehensive energy strategies are totally customized for your efficiency and business growth
//         </p>
//       </div>

//       {/* Slides Container */}
//       <div className="relative w-full overflow-hidden px-10">

//         <motion.div
//           key={index}
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ type: "spring", stiffness: 60, damping: 18 }}
//           className={
//             "grid gap-10 " +
//             (itemsPerView === 1
//               ? "grid-cols-1"
//               : itemsPerView === 2
//               ? "grid-cols-2"
//               : "grid-cols-3")
//           }
//         >
//           {visibleSlides
//             .filter(Boolean)
//             .map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col bg-white rounded-b-[10px] shadow-lg overflow-hidden hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
//               >
//                 <div className="group overflow-hidden">
//                   <Image
//                     src={item.service_image}
//                     alt={item.service_title}
//                     width={800}
//                     height={500}
//                     className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>

//                 <div className="flex flex-col grow px-4 py-4 text-left">
//                   <h3 className="title text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2">
//                     {item.service_title}
//                   </h3>

//                   <p className="content text-[#3D3D3D] mb-5 grow">
//                     {item.service_description}
//                   </p>

//                   <div className="mt-auto">
//                     <Link href={item.service_link || "#"}>
//                       <button className="button mt-3">Read More</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </motion.div>

//         {/* Dots Pagination */}
//         <div className="flex justify-center gap-2 mt-6">
//           {homeServices.map((_, dotIndex) => (
//             <button
//               key={dotIndex}
//               onClick={() => setIndex(dotIndex)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === dotIndex ? "bg-[#889F2D] scale-125" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeServices() {
  const [homeServices, setHomeServices] = useState([]);
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);

  // Responsive items-per-view
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    fetch("/data/home/HomeServices.json")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);

  // Update layout on resize
  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //  AUTOPLAY (1-by-1 sliding)
  useEffect(() => {
    if (homeServices.length === 0) return;

    autoplayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % homeServices.length);
    }, 5000);

    return () => clearInterval(autoplayRef.current);
  }, [homeServices]);

  if (homeServices.length === 0) return null;

  // Visible slides
  const visibleSlides = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleSlides.push(homeServices[(index + i) % homeServices.length]);
  }

  return (
    <section className="common-section flex flex-col justify-center relative">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Services</h3>
        <h2 className="center-section-heading">COMPREHENSIVE ENERGY STRATEGIES</h2>
        <p className="content text-[#3D3D3D]">
          Comprehensive energy strategies are totally customized for your efficiency and business growth
        </p>
      </div>

      {/* Slider Area */}
      <div className="relative w-full overflow-hidden ">

        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className={
            "grid gap-10 " +
            (itemsPerView === 1
              ? "grid-cols-1"
              : itemsPerView === 2
              ? "grid-cols-2"
              : "grid-cols-3")
          }
        >
          {visibleSlides
            .filter(Boolean)
            .map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white rounded-b-[10px] shadow-lg overflow-hidden hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
              >
                {/* Image */}
                <div className="group overflow-hidden">
                  <Image
                    src={item.service_image}
                    alt={item.service_title}
                    width={800}
                    height={500}
                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col grow px-4 py-4 text-left">
                  <h3 className="team-members-name text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2">
                    {item.service_title}
                  </h3>

                  <p className="bulletPoints text-[#3D3D3D] mb-5 grow">
                    {item.service_description}
                  </p>

                  <div className="mt-auto">
                    <Link href={item.service_link || "#"}>
                      <button className="button mt-3">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-6 m-6">
          {homeServices.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === dotIndex ? "bg-[#889F2D] scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
