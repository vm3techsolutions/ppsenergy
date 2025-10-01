"use client";

import React from "react";
import Image from "next/image";
// import { MdSunny } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";
import { IoIosWater } from "react-icons/io";

export default function AboutUsFirst() {
  return (
    
      <div className="common-section text-center flex flex-col justify-center">
        {/* Heading */}
        <div className="pb-2">
          <h3 className="title pb-2 text-[#889F2D] ">About Us</h3>
          <h2 className="center-section-heading pb-2 text-lg sm:text-xl md:text-2xl"> DRIVEN BY INNOVATION, COMMITTED TO SUSTAINABILITY</h2>
          <p className="content text-[#3D3D3D]">
            The strategic organization especially formulated for serving Energy
            and Power sectors, with proven experience
          </p>
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 ml-70 mr-70 ">
          <div>
            {/* <MdSunny className="text-center text-8xl w-full text-[#7B0000]" /> */}
            <Image
                      width={90}
                      height={90}
                      src="/assets/home/SolarEnergyIcon.png"
                      alt="About Us"
                      className="w-full max-w-md md:max-w-full h-[90px] object-contain"
                    />
            <h2 className="title text-[#3D3D3D] mt-2">Solar Energy</h2>
          </div>

          <div>
            <Image
                      width={90}
                      height={90}
                      src="/assets/home/WaterEnergyIcon.png"
                      alt="About Us"
                      className="w-full max-w-md md:max-w-full h-[90px] object-contain"
                    />
            <h2 className="title text-[#3D3D3D] mt-2">Water Energy</h2>
          </div>

          <div>
            <Image
                      width={90}
                      height={90}
                      src="/assets/home/WindEnergyIcon.png"
                      alt="About Us"
                      className="w-full max-w-md md:max-w-full h-[90px] object-contain"
                    />
            <h2 className="title text-[#3D3D3D] mt-2">Wind Energy</h2>
          </div>
        </div>
      </div>
    
  );
}
