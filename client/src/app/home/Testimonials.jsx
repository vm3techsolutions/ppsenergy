"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Reva P.",
      role: "Plant Head, Manufacturing Industry",
      text: "PPS Energy’s audit helped us cut energy costs by 18% while improving overall efficiency. A truly reliable partner.",
      img: "/assets/home/TestimonialIcon.png",
    },
    {
      name: "Amit K.",
      role: "Operations Manager, Textile Industry",
      text: "Their solutions boosted our energy savings significantly and streamlined operations.",
      img: "/assets/home/TestimonialIcon.png",
    },
    {
      name: "Sonal M.",
      role: "Director, FMCG Sector",
      text: "We reduced costs by 22% with PPS Energy’s audit. Highly recommend their services!",
      img: "/assets/home/TestimonialIcon.png",
    },
  ];

  return (

    <section className="section-vertical-padding">
  {/* Section Title */}
  <div className="text-center mb-10 ">
    <h3 className="title text-[#889F2D]">Testimonials</h3>
    <h2 className="center-section-heading">
      Voices of trust, Stories of Transformation
    </h2>
  </div>

  {/* Full Background Wrapper */}
  <div
    className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center w-full h-[450px] md:h-[500px] lg:h-[700px] lg:mt-[-65px] mt-[-50px]"
    style={{ backgroundImage: "url('/assets/home/TestimonialsBG.png')" }}>
    {/* Inner Content Container (keeps text centered & padded) */}
    <div className="w-full ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        slidesPerView={1}
        className="flex flex-col text-center items-center justify-center">
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center mb-8">
              {/* Avatar + Name + Quote */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full " />
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="text-[#7B0000] font-semibold text-lg sm:text-xl md:text-2xl dual-section-heading">
                    {t.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base title">{t.role}</p>
                </div>
                <span className="text-[#889F2D] text-5xl sm:text-6xl md:text-7xl font-serif hidden sm:block">
                  ❞
                </span>
              </div>

              {/* Testimonial Text */}
              <div className="max-w-md sm:max-w-2xl">
                <p className="text-gray-700 sm:text-base md:text-lg leading-relaxed content">
                  {t.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>
  );
}
