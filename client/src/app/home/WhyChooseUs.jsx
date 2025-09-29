"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";
import { FaHandshake , FaChartLine } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { HiDocumentCheck } from "react-icons/hi2";

export default function WhyChooseUs() {
  return (
    <section className='common-section flex flex-col justify-center'>
        <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Why Choose Us</h3>
        <h2 className="center-section-heading">
           TRUSTED EXPERTISE, MEASURABLE IMPACT,  <br/>AND A GREENER TOMORROW
        </h2>
         <p className="content text-[#3D3D3D]">
          Right partner for your Energy Efficiency, Net Zero, and Sustainability Goals.
        </p>
        
      </div>
{/* Grid Boxes Designing */}
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10  mt-6 text-center ">
        <div  className= 'rounded-[10px] shadow-md  overflow-hidden p-7 text-center '>

          <IoShieldCheckmarkSharp className='text-center text-6xl w-full text-[#7B0000]'/>
          <h2 className="content text-[#889F2D]">Proven Expertise</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>With over a decade of experience in the energy sector, we bring deep technical knowledge every project. Our team has successfully delivered solutions for diverse industries across India.</p>
        </div>

         <div  className= 'rounded-[10px] shadow-md overflow-hidden p-7'>
            <TbBulbFilled className='text-center text-6xl w-full text-[#7B0000]'/>
            <h2 className="content text-[#889F2D]">Tailored Energy Solutions</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>We believe there is no one-size-fits-all approach. Every organization has unique energy challenges. We design customized strategies that align with your operational needs, sustainability goals, and budget.</p>
        </div>

         <div  className= 'rounded-[10px] shadow-md overflow-hidden p-7'>
            <GrShieldSecurity className='text-center text-6xl w-full text-[#7B0000]'/>
            <h2 className="content text-[#889F2D]">End-to-End Support</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>From consultation and audits to implementation and monitoring, we manage the entire energy journey. You can count on us as a single, reliable partner for complete energy transformation.</p>
        </div>

         <div  className= 'rounded-[10px] shadow-md overflow-hidden p-7'>
            <HiDocumentCheck className='text-center text-6xl w-full text-[#7B0000]'/>
            <h2 className="content text-[#889F2D]">Compliance & Sustainability Focus</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>Our solutions comply with the latest energy conservation and electricity regulations while helping you move closer to Net Zero and carbon-neutral commitments.</p>
        </div>

         <div className= 'rounded-[10px] shadow-md overflow-hidden p-7'>
            <FaChartLine className='text-center text-6xl w-full text-[#7B0000]'/>
            <h2 className="content text-[#889F2D]">Measurable Results</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>We don’t just promise—we prove. Every project is backed by transparent reporting, real-time monitoring, and clear metrics on savings and efficiency improvements.</p>
        </div>

         <div className= 'rounded-[10px] shadow-md overflow-hidden p-7'>
            <FaHandshake className='text-center text-6xl w-full text-[#7B0000]'/>
            <h2 className="content text-[#889F2D] ">Long-Term Partnerships</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>Our commitment extends beyond project delivery. We work with you as long-term partners, ensuring continuous optimization and future-ready solutions.</p>
        </div>

       </div>

       <div className='flex justify-center mt-10'>
        <Link href="/home">
                <button className="button  sm:text-sm md:text-base px-8 sm:px-5 py-3 sm:py-2 rounded-lg shadow-md hover:bg-green-600 transition mt-3 mb-4">
                  Explore More
                </button>
              </Link>
       </div>
    </section>
  )
}
