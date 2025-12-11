"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function ComprehensivePowerConsultancy() {
  return (
  <section className='common-section'>
    <div className="text-center mb-10">
      <h2 className="center-section-heading text-center ">COMPREHENSIVE POWER CONSULTANCY FOR <br /> SUSTAINABLE GROWTH</h2>
    </div>

       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN - TEXT */}
 <div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
            At <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span>, 
            we specialize in delivering end-to-end power consultancy solutions 
            designed to help industries, businesses, and infrastructure projects 
            optimize their energy systems. From feasibility studies and load 
            assessments to project implementation and energy audits, our expertise 
            ensures that every unit of power you use drives maximum value.

         

          </p>
              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-4">
            {[
              "Tailored solutions for industrial, commercial, and institutional clients",
              "Expertise in renewable and conventional power systems",
              "Proven track record in energy cost optimization and compliance",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-[#889F2D] w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

 </div>
       

        {/* RIGHT COLUMN - IMAGE */}
        
          <Image
                    width={678}
                    height={574}
                    src="/assets/services/powerConsultancy/powerConsultancyInfo.jpeg"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
      </div>
    </section>
  )
}
