"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function IntroductionSafetyAudit() {
  return (
      <section className='common-section'>
    <div className="text-center mb-10">
      <h2 className="center-section-heading text-center ">
    ABOUT SAFETY AUDIT SERVICES
      </h2>
    </div>

       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN - TEXT */}
 <div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
            Safety Audits are systematic evaluations of workplace safety standards, policies, and procedures. Our team of certified safety engineers and auditors conduct detailed assessments to ensure your operations meet national and international safety standards. We not only identify potential hazards but also help in creating practical, sustainable safety solutions that enhance employee well-being and operational efficiency.

         

          </p>
              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-4">
            {[
              "Identify and eliminate workplace hazards",
              "Improve regulatory compliance (Factory Act, OSHA, ISO 45001, etc.)",
              "Enhance productivity through safer operations",
              "Reduce accidents, downtime, and insurance costs",
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
                    src="/assets/services/safetyAudit/safetyAuditInfo.jpeg"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
      </div>
    </section>
  )
}
