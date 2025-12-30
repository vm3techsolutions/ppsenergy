"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsFirst() {
  return (
    <div className="common-section text-center flex flex-col justify-center pt-[50px]  ">
    {/* Heading */} 
      <div className="mb-10">
      <h3 className="title text-[#889F2D] ">About Us</h3>
      <h2 className="center-section-heading"> Driven by innovation, committed to sustainability</h2>
      <p className="content text-[#3D3D3D]">The strategic organization especially formulated for serving Energy and Power sectors, with proven experience</p>
      </div>

    {/* Icons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-[25px] ">
      <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="ml-0 lg:ml-[200px] group">
      <Image
        width={90}
        height={90}
        src="/assets/home/SolarEnergyIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#3D3D3D] mt-2">Solar Energy</h2>
      </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="group">
      <Image
        width={90}
        height={90}
        src="/assets/home/WaterEnergyIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#3D3D3D] mt-2">Water Energy</h2>
      </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
      <div className="mr-0 lg:mr-[200px] group">
      <Image
        width={90}
        height={90}
        src="/assets/home/WindEnergyIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
      <h2 className="title text-[#3D3D3D] mt-2">Wind Energy</h2>
      </div>
      </motion.div>
      </div>
      </div>
    
  );
}
