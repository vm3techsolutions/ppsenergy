// "use client"
// import React from "react";
// import Link from "next/link";

// export default function HomeBanner() {
//   return (
//     <section
//       className="relative h-[450px] md:h-[600px] sm:h-[300px] lg:h-[700px] flex items-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/assets/home/HomeBannerImage.png')" }}>
//       {/* Overlay */}
//       <div className="absolute"></div>

//       {/* Content */}
//       <div className="section relative z-10 max-w-3xl px-6 sm:px-4 md:px-8">
//         <h1 className="heading text-white pb-6 sm:pb-4" >
//           EMPOWERING BUSINESSES <br className="hidden sm:block" />
//           WITH SUSTAINABLE, <br className="hidden sm:block" />
//           COST-EFFECTIVE <br className="hidden sm:block" />
//           ENERGY SOLUTIONS
//         </h1>

//         <Link href="/contact-us">
//           <button className="buttonGreenBG mt-8 "> Get a Consultation </button>
//         </Link>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

export default function HomeBanner() {
  const images = [
    "/assets/home/PPSBanner1.jpg",
    "/assets/home/PPSBanner2.jpg",
    "/assets/home/PPSBanner3.jpg",
    "/assets/home/PPSBanner4.jpg",
  ];

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[650px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Home banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
