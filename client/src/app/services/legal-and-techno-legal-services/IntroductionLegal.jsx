"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function IntroductionLegal() {
  return (
        <section className='common-section'>
            <div className="text-center mb-10">
           
            <h2 className="center-section-heading">Legal & Techno-Legal Services</h2>
            </div>
    
           {/* Text Section */}
           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
            {/* <div className="text-center md:text-left lg:mr-[100px]"> */}

        <div>
            <h3 className="dual-section-heading my-2">Who We Are</h3>
            
              <p className="content text-[#3D3D3D]  text-left  lg:mr-[100px] ">
               <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span> provides legal, regulatory, and techno-legal services for the Energy & Power sector. With 15+ years of expertise, we assist government bodies, utilities, and industries in documentation, litigation support, and compliance-related matters. <br /><br />
               Our team includes senior advocates, legal consultants, and technical experts ensuring accurate, practical and sector-focused solutions.PPS provides comprehensive legal support covering the entire regulatory and dispute-resolution ecosystem.
              </p>
        </div>
              
           
        
    
          {/* Image Section */}
          
            <Image
              width={678}
              height={574}
              src="/assets/services/legalServices/IntroLegalServices.png"
              alt="About Us"
              className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
          </div>
        </section>
  )
}
