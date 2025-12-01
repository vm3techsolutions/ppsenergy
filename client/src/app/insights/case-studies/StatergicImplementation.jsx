"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function StatergicImplementation() {
  return (
   <section className='common-section'>
       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">

         {/* Left COLUMN - IMAGE */}
        
          <Image
                    width={678}
                    height={574}
                    src="/assets/services/energyAudit/EnergyAuditSecondSection.png"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-br-[120px] rounded-tr-[40px] shadow-lg object-cover"/>


        {/* Right COLUMN - TEXT */}
 <div>
     <div className="">
         <h3 className="title text-[#889F2D]">Strategic Implementation</h3>
      <h2 className="center-section-heading ">
  OUR SOLUTION
      </h2>
    </div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
          Our certified and experienced auditors systematically collect and analyse the significant energy flows and losses by visiting your site and interview your facility manager, inspect your lighting, air conditioning, heating and ventilation equipment, controls, refrigeration, air compressors, water consuming equipment, and anything else that is using energy.  
           <br />

           Depending on the type of the audit, the auditor may take measurements of temperatures, pressures, light levels, power draw, and other things.

         

          </p>
              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-4">
            {[
              "Our certified and experienced auditors systematically collect and analyse the significant energy flows and losses by visiting your site and interview your facility manager, inspect your lighting, air conditioning, heating and ventilation equipment, controls, refrigeration, air compressors, water consuming equipment, and anything else that is using energy. ",

              "Depending on the type of the audit, the auditor may take measurements of temperatures, pressures, light levels, power draw, and other things."
            
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-[#889F2D] w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

 </div>

       
         
      </div>
    </section>
  )
}
