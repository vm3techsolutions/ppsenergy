"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";


export default function PowerDistribution() {
  return (
    <section className='common-section'>
            <div className="text-center mb-10">
            {/* <h3 className="title text-[#889F2D]">Our Journey</h3> */}
            <h2 className="center-section-heading">
            ENSURING RELIABLE, MODERN & EFFICIENT POWER NETWORKS
            </h2>
            </div>
    
             <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
              
              <div>
              <p className="content text-[#3D3D3D]  text-left  lg:mr-[100px] ">
                We support utilities, DISCOMs, smart grid operators, and infrastructure developers with end-to-end power distribution consultancy. Our team has delivered high-impact projects across India including network mapping, asset audits, AT&C loss reduction, smart metering, GIS modernization, and feeder system upgrades.
              </p>


                 {/* Experties */}
                 <h3 className='team-members-designation mt-4'>Our Expertise Includes</h3>
                        <ul className="space-y-3 bulletPoints text-[#3D3D3D]  mt-2">
                          {[
                            "Distribution Network Strengthening (33/11 kV, LT systems)",
                            "Feeder-based loss analysis & reduction strategies",
                            "Smart grid modernization",
                            "Network planning & load forecasting",
                            "GIS-based asset mapping",
                            "DPR preparation & techno-economic analysis",
                            "Substation electrification & automation",
                            "Quality monitoring & network optimization"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start space-x-3 bulletPoints">
                              <CheckCircle className="text-[#889F2D] w-5 h-5 mt-1 shrink-0" />
                              <span className="text-gray-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                        </div>
           
       
    
          {/* Image Section */}
          
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
