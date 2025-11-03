"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Users, Layers, ShieldCheck,  Headphones , Timer} from "lucide-react"

export default function WhyChooseMep() {
  return (
    <section className='common-section flex flex-col justify-center  bg-[#F9FAFB]'>
        <div className="text-center mb-10">
             <h3 className="title text-[#889F2D]">Why Choose Us</h3>
        <h2 className="center-section-heading">Why Partner with PPS Energy Solutions for MEP Services </h2>
        
        </div>
{/* Grid Boxes Designing */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center gap-y-10 ">

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 text-center group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
          <Users className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 text-[#889F2D]" />
       
        <h2 className="contact-heading text-[#7b0000] mt-3">In-house team of mechanical, electrical, and plumbing engineers</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
          <Layers  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Seamless design coordination through BIM-based workflows</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <ShieldCheck  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Safety-first and compliance-driven approach</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
        <Timer  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Track record of on-time project delivery</h2>
        </div>

        <div className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <Headphones  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3 ">Continuous client engagement and technical support</h2>
   
        </div>


       </div>
    </section>
  )
}
