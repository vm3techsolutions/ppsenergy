"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Award, UserCheck, Cpu, TrendingDown, Leaf } from "lucide-react";

export default function WhyChooseUsPowerConsultancy() {
  return (
   <section className='common-section flex flex-col justify-center'>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Why Choose Us</h3>
        <h2 className="center-section-heading">Why choose PPS Energy Solutions as your power partner </h2>
        <p className="content text-[#3D3D3D]">We combine engineering excellence with real-world experience to deliver results that matter.</p>
        </div>
{/* Grid Boxes Designing */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center gap-y-10 ">

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 text-center group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
            <Award   className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
       
        <h2 className="contact-heading text-[#7b0000] mt-3">10+ years of industry experience</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
          <UserCheck  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Expert team of certified power engineers</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <Cpu  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Advanced analytical tools & software</h2>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
        <TrendingDown  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3">Proven energy cost savings for clients</h2>
        </div>

        <div className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300'>
         <Leaf  className="w-full max-w-md md:max-w-full h-[50px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110  text-[#889F2D]"/>
        <h2 className="contact-heading text-[#7b0000] mt-3 ">Commitment to sustainability and innovation</h2>
        {/* <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>We don’t just promise—we prove. Every project is backed by transparent reporting, real-time monitoring, and clear metrics on savings and efficiency improvements.</p> */}
        </div>


       </div>
    </section>
  )
}
