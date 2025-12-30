"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, FileCheck, ClipboardList, MapPin, TrendingUp } from "lucide-react";

export default function WhyChooseSafetyAudit() {
  return (
   <section className='common-section flex flex-col justify-center'>
        <div className="text-center mb-10">
        {/* <h3 className="title text-[#889F2D]">Why Choose Us</h3> */}
        <h2 className="center-section-heading"> Why choose PPS Energy Solutions for Safety Audits </h2>
        <p className="content text-[#3D3D3D]">We combine engineering excellence with real-world experience to deliver results that matter.</p>
        </div>
{/* Grid Boxes Designing */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center gap-y-10 ">

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 text-center group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
            <ShieldCheck   className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 text-[#889F2D]"/>
       
        <h2 className="contact-heading text-[#7b0000] mt-3">Certified and experienced safety auditors</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
          <FileCheck  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Industry-compliant methodologies (ISO, OHSAS, OSHA)</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <ClipboardList  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Detailed and actionable reports</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
        <MapPin  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">On-site and remote audit capabilities</h2>
        </div>

        <div className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <TrendingUp  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3 ">Proven record in reducing incidents and improving compliance</h2>
   
        </div>


       </div>
    </section>
  )
}
