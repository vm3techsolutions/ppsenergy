"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function IntroMarketResearch() {
  return (
     <section className='common-section'>
    <div className="text-center mb-10">

      <h2 className="center-section-heading text-center ">About our Market Research, Survey & Training services
      </h2>
    </div>

       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN - TEXT */}
 <div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
           In today’s competitive business environment, informed decision-making is the key to success. At <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span> we provide comprehensive Market Research, Survey, and Training solutions that help organizations understand their customers, measure performance, and enhance team capabilities. <br /><br />
           Our approach blends analytical expertise, field intelligence, and practical training to deliver actionable insights and sustainable business growth.
           </p>

              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-10">
            {[
              "Reliable data for strategic decisions",
              "Customized methodologies for different industries",
              "End-to-end project management — from design to analysis",
              "Practical, results-oriented training programs",
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
                    src="/assets/services/marketResearch/marketResearchInfo.jpeg"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
      </div>
    </section>
  )
}
