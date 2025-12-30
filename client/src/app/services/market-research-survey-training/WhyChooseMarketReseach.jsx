"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Users2, Settings2, BarChart3,  Workflow , TrendingUp} from "lucide-react"

export default function WhyChooseMarketReseach() {
  return (
    <section className='common-section flex flex-col justify-center bg-[#F9FAFB]'>
        <div className="text-center mb-10">
             <h3 className="title text-[#889F2D]">Why Choose Us</h3>
        <h2 className="center-section-heading"> Why partner with PPS Energy Solutions </h2>
        
        </div>
{/* Grid Boxes Designing */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center gap-y-10 ">

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 text-center group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
          <Users2 className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 text-[#889F2D]" />
       
        <h2 className="contact-heading text-[#7b0000] mt-3">Experienced researchers, data analysts, and certified trainers</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
          <Settings2  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Tailored methodologies based on client goals</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <BarChart3 className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Transparent reporting and real-time project updates</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
        <Workflow  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">End-to-end support — from data design to decision-making</h2>
        </div>

        <div className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-3 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <TrendingUp  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3 ">Proven impact on operational performance and market understanding</h2>
   
        </div>


       </div>
    </section>
  )
}











