"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function EnergyAuditProjectIntro() {
  return (
      <section className='common-section'>
            <div className="text-center mb-10">
            {/* <h3 className="title text-[#889F2D]">Our Journey</h3> */}
            <h2 className="center-section-heading">Statewide & Utility Energy Audit Projects
            </h2>
            </div>
    
             <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
              
              <div>
              <p className="content text-[#3D3D3D]  text-left  lg:mr-[100px] ">
                We help utilities identify losses, optimize energy flow, and improve network efficiency through detailed energy audits. Our BEE-certified team has conducted audits for leading DISCOMs across India.
              </p>

             {/* Experties */}
                 <h3 className='team-members-designation mt-4'>Our Expertise Includes</h3>
                        <ul className="space-y-3 bulletPoints text-[#3D3D3D]  mt-2">
                          {[
                            "Feeder & DT level audits",
                            "AT&C loss reduction roadmap",
                            "Billing efficiency improvement",
                            "Load balancing & demand analysis",
                            "Streetlight metering solutionsConsumer indexing & GIS validation",
                            "Regulatory audit support"
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
              src="/assets/projects/EnergyAuditInfo.jpg"
              alt="About Us"
              className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
          </div>
        </section>
  )
}
