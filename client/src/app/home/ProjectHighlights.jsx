"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow , Autoplay} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function ProjectHighlights() {
    const images = [
    "/assets/home/SliderImage1.png",
    "/assets/home/SliderImage2.png",
    "/assets/home/SliderImage3.png",
    "/assets/home/SliderImage2.png",
    "/assets/home/SliderImage1.png",
  ];
  return (
    <section className=" flex flex-col justify-center section-vertical-padding">
        <div className=" text-center mb-10  ">
        <h3 className="title text-[#889F2D]">Project Highlights</h3>
        <h2 className="center-section-heading">
          PROVEN RESULTS, POWERING BUSINESSES
        </h2>
      </div>

      {/* Courosal Design */}
       <div className="w-full ">

<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  spaceBetween={30} // gap between slides
  slidesPerView={3} // default (desktop)
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    // 👇 Adjust the number of visible slides for different screens
    0: {
      slidesPerView: 1,   // Mobile
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,   // Small tablets
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,   // Laptops/desktops
      spaceBetween: 30,
    },
  }}
  modules={[EffectCoverflow, Autoplay]}
>
  {images.map((src, i) => (
    <SwiperSlide key={i} className="rounded-[5px]">
      <Image
        src={src}
        width={500}
        height={400}
        alt=""
        className="border rounded-[5px] mx-auto"
      />
    </SwiperSlide>
  ))}
</Swiper>


      {/* Button */}
      <div className='flex justify-center'>
        <Link href="/home">
                <button className="button mt-5">Know More</button>
        </Link>
       </div>
      </div>
      

    </section>
  )
}
