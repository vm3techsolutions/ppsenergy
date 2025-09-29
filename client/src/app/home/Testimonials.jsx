"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Reva P.",
      role: "Plant Head, Manufacturing Industry",
      text: "PPS Energy’s audit helped us cut energy costs by 18% while improving overall efficiency. A truly reliable partner.",
      img: "/assets/home/Avtar.png",
    },
    {
      name: "Amit K.",
      role: "Operations Manager, Textile Industry",
      text: "Their solutions boosted our energy savings significantly and streamlined operations.",
      img: "/assets/home/Avtar.png",
    },
    {
      name: "Sonal M.",
      role: "Director, FMCG Sector",
      text: "We reduced costs by 22% with PPS Energy’s audit. Highly recommend their services!",
      img: "/assets/home/Avtar.png",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Top Curve */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 C480,150 960,0 1440,80 L1440,0 L0,0 Z"
          fill="#fff"
        />
      </svg>

      {/* Bottom Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C480,150 960,0 1440,100 L1440,150 L0,150 Z"
          fill="#fff"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="title text-[#889F2D]">Testimonials</h3>
        <h2 className="center-section-heading">
          COMPREHENSIVE ENERGY STRATEGIES
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          slidesPerView={1}
          className="max-w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>

              <div className="flex flex-col section mt-15 mb-10 pl-[50px] pr-[50px]" >

                {/* Avatar */}
                <div className="flex justify-center mb-4">
                    <div>
                        <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-200 shadow-sm mt-4"
                  />
                    </div>
                       

                  <div className="flex flex-col justify-center text-start ml-6">
                <h3 className="title text-[#7B0000] ">{t.name}</h3>
                <p className="content text-center">{t.role}</p>

                  </div>
                  <div>
                     <span className=" text-[#889F2D] text-8xl font-serif ml-3">
                 ❞
                </span>
                  </div>
                
                </div>
                
                <div>
                    {/* Testimonial Text */}
                <p className="text-gray-700 content mb-1 ">
                  {t.text}
                </p>

                </div>

              
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
