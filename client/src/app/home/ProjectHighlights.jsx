// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";

// export default function ProjectHighlights() {
//   const images = [
//     "/assets/home/SliderImage1.png",
//     "/assets/home/SliderImage2.png",
//     "/assets/home/SliderImage3.png",
//     "/assets/home/SliderImage2.png",
//     "/assets/home/SliderImage1.png",
//     "/assets/home/SliderImage1.png",
//     "/assets/home/SliderImage2.png",
//     "/assets/home/SliderImage3.png",
//     "/assets/home/SliderImage2.png",
//     "/assets/home/SliderImage1.png",
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="flex flex-col justify-center">
//       <div className="common-section text-center">
//         <h3 className="title text-[#889F2D]">Projects Highlights</h3>
//         <h2 className="center-section-heading">PROVEN RESULTS, POWERING BUSINESSES</h2>
//       </div>

//       <div className="w-full mt-[-25px]">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={3} // show 2 left + 1 center + 2 right
//           loop={true}
//           spaceBetween={50}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 150,
//             modifier: 1.2,
//             slideShadows: false,
//           }}
//           modules={[EffectCoverflow, Autoplay]}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           className="w-full"
//         >
//           {images.map((src, i) => (
//             <SwiperSlide key={i} className="relative">
//               <div
//                 className={`transition-all duration-500 ease-in-out rounded-md overflow-hidden ${
//                   i === activeIndex
//                     ? "scale-110 opacity-100 z-20"
//                     : "scale-90 opacity-70 z-10"
//                 }`} >
//                 <Image
//                   src={src}
//                   width={500}
//                   height={400}
//                   alt="Project highlight"
//                   className="object-cover rounded-md border border-gray-300"/>
//                 {i !== activeIndex && (
//                   <div className="absolute inset-0 bg-black/30 rounded-md" /> )}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Button */}
//         <div className="flex justify-center pb-[50px]">
//           <Link href="/home">
//             <button className="button mt-7 mb-4">Explore More</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function ProjectHighlights() {
  const images = [
    "/assets/projects/PPSProject1.png",
    "/assets/projects/RegulatoryCompliancesBanner.jpg",
    "/assets/projects/TECHNOCOMMERCIALBanner.jpg",
    "/assets/projects/EnergyAuditProjectBanner.jpg",
    "/assets/projects/AMIBannerImage.jpg",
    "/assets/projects/Project6BG.png",
    "/assets/services/pmc/pmcInfo.jpeg"
  ];

  // Matching links for ALL 10 images
  const links = [
    "/projects/power-distribution",
    "/projects/regulatory-commission",
    "/projects/techno-due-diligence",
    "/projects/energy-audit-projects",
    "/projects/ami-metering-feeder",
    "/projects/solar-epc",
    "/projects/mep-design-project-management"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col justify-center">
      <div className="common-section text-center">
        <h3 className="title text-[#889F2D]">Projects Highlights</h3>
        <h2 className="center-section-heading">Proven results, powering businesses </h2>
      </div>

      <div className="w-full mt-[-25px]">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="relative">
              <Link href={links[i]}>
                <div
                  className={`transition-all duration-500 ease-in-out rounded-md overflow-hidden cursor-pointer ${
                    i === activeIndex
                      ? "scale-110 opacity-100 z-20"
                      : "scale-90 opacity-70 z-10"
                  }`}
                >
                  <Image
                    src={src}
                    width={500}
                    height={400}
                    alt="Project highlight"
                    className="object-cover rounded-md border border-gray-300 h-[350px]"
                  />

                  {i !== activeIndex && (
                    <div className="absolute inset-0 bg-black/30 rounded-md" />
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center pb-[50px]">
          <Link href="/projects">
            <button className="button mt-7 mb-4">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
