"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function MepIntroduction() {
  return (
    <section className='common-section'>
    <div className="text-center mb-10">
      <h2 className="center-section-heading text-center ">
     About Our MEP Services
      </h2>
    </div>

       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN - TEXT */}
 <div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
           At <b>PPS Energy Solutions</b>, we specialize in providing comprehensive MEP (Mechanical, Electrical, and Plumbing) engineering services that form the backbone of modern infrastructure. Our multidisciplinary expertise ensures that every system — from HVAC to electrical distribution and water supply — is designed and executed with precision, efficiency, and sustainability in mind.<br/>
           Our MEP solutions combine innovative design, advanced engineering tools, and on-site expertise to deliver optimized performance and reduced lifecycle costs.  </p>

              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-4">
            {[
              "Integrated design and execution",
              "Energy-efficient systems",
              "Code-compliant installations",
              "Scalable and cost-effective solutions",
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
                    src="/assets/services/energyAudit/EnergyAuditSecondSection.png"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
      </div>
    </section>
  )
}
