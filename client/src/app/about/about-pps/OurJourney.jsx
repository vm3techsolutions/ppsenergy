import React from 'react'
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function OurJourney() {
  return (
    <section className='section-vertical-padding'>
        <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D]">Our Journey</h3>
        <h2 className="center-section-heading">Every milestone is a step towards a greener future
        </h2>
        </div>

{/* Journey Section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">

{/* Image  */}
      <div className="relative w-full h-auto overflow-hidden rounded-r-[10px]">
  <Image
    src="/assets/aboutus/BelowBannerAboutUsSection.jpg"
    alt="About Us"
    fill
    className="object-cover"
  />
</div>


{/* Text Area  */}
      <div className='flex flex-col  lg:pr-20  ml-2'>
         <div>
          <p className='content'>
           Our story began with a simple idea to transform how the world consumes energy. Over the years, we have evolved into a multifaceted energy services provider, bridging the gap between conventional power and renewable innovation. With a strong focus on energy efficiency, production efficiency, and process optimization, we help organizations enhance performance, reduce operational costs, and achieve sustainable growth.

<br/><br/>
          From our first energy audit project to large-scale solar installations, every step of our journey has been fueled by a vision of progress and sustainability. Today, we are proud to have delivered solutions that power industries, reduce emissions, and make energy more efficient.
          </p>
        </div>

   

        
      </div>


</div>

    </section>
  )
}
