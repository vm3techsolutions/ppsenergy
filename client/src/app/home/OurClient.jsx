"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function OurClient() {
  const clientImage = [
  "/assets/home/Client1.png",
  "/assets/home/Client2.png",
  "/assets/home/Client3.png",
  "/assets/home/Client4.png",
  "/assets/home/Client5.png",
  "/assets/home/Client6.png",
  "/assets/home/Client7.png",
  "/assets/home/Client8.png",
  "/assets/home/Client9.png",
  "/assets/home/Client10.png",
  "/assets/home/Client11.png",
  "/assets/home/Client12.png",
  "/assets/home/Client13.png",
  "/assets/home/Client14.png",
  "/assets/home/Client15.png",
  "/assets/home/Client16.png",
  "/assets/home/Client17.png",
  "/assets/home/Client18.png",
  "/assets/home/Client19.png",
  "/assets/home/Client20.png",
  "/assets/home/Client21.png",
  "/assets/home/Client22.png",
  "/assets/home/Client23.png",
  "/assets/home/Client24.png"

  ];

  return (
    <section className="common-section flex flex-col justify-center">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Our Valued Client</h3>
        <h2 className="center-section-heading">
          EMPOWERING ORGANIZATIONS THAT BELIEVE IN <br /> SUSTAINABLE PROGRESS
        </h2>
      </div>

      {/* Client Carousel */}
      <div className="w-full px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView={5} // default for desktop
          breakpoints={{
            0: {
              slidesPerView: 2, // Mobile
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3, // Tablet
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5, // Desktop
              spaceBetween: 30,
            },
          }} >
          {clientImage.map((src, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <Image
                src={src}
                alt={`Client ${i + 1}`}
                width={180}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
