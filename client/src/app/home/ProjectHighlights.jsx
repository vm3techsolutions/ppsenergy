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
    <section className=" flex flex-col justify-center">
        <div className="common-section text-center ">
        <h3 className="title text-[#889F2D]">Project Highlights</h3>
        <h2 className="center-section-heading">
          Proven Results, Powering Businesses
        </h2>
       
      </div>

      {/* Courosal Design */}
       <div className="w-full mt-[-25px]">
     {/* <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}  
        
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="w-full "
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex "
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              width={550}
              height={450}
              className="rounded-lg shadow-lg object-cover"
            />
          </SwiperSlide>
        ))}

        
      </Swiper> */}
      {/* <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  loop={true}
//   autoplay={{ delay: 2500, disableOnInteraction: false }}
  coverflowEffect={{
   
    rotate: 0,
    stretch: 1,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }}
  modules={[EffectCoverflow, Autoplay]}
>
  {images.map((src, i) => (
    <SwiperSlide key={i} className=' rounded-[5px]'>
      <Image src={src} width={500} height={400}  alt=""  className='border rounded-[5px]'/>
    </SwiperSlide>
  ))}
</Swiper> */}

<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  loop={true}
  spaceBetween={30} // 👈 gap in px between slides
  coverflowEffect={{
    rotate: 0,
    stretch: 0,  // keep stretch at 0 when using spaceBetween
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }}
  modules={[EffectCoverflow, Autoplay]}
>
  {images.map((src, i) => (
    <SwiperSlide key={i} className="rounded-[5px] gap-20">
      <Image
        src={src}
        width={500}
        height={400}
        alt=""
        className="border rounded-[5px] ml-10 mr-10"
      />
    </SwiperSlide>
  ))}
</Swiper>

      {/* Button */}
      <div className='flex justify-center pb-[50px]'>
        <Link href="/home">
                <button className="button mt-7 mb-4">
                  Explore More
                </button>
              </Link>
    </div>
      </div>
      

    </section>
  )
}
