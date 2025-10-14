"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsSecond() {
  return (
    <section className="common-section flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-16">

      {/* Text Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  ">
        <div className="text-center md:text-left">
          <h3 className="title text-[#889F2D] text-base sm:text-lg md:text-xl text-center">About Us</h3>
          <h2 className="dual-section-heading text-lg sm:text-xl md:text-2xl text-center ">
           Welcome to PPS Energy Solutions
          </h2>
          <p className="content text-[#3D3D3D]  text-left text-sm sm:text-base md:text-lg mt-[10px] lg:mr-[80px]">
            We, PPS Energy Solutions Private Limited (PPSES) Pune are the strategic organization especially formulated for serving Energy and Power sectors, with proven experience of 3 Million Hours in power regulatory, Energy Audit, MEP, Research and Training in India and abroad.<br/><br/>
            We are one of the accredited and empanelled energy auditing firms, engaged in Mandatory Energy Audit (MEA) and Measurement & Verification (M&V) under BEE (PAT) Scheme.<br/><br/>
            Our team comprises of Accredited Energy Auditors, Certified Energy Auditors/Manager, Sector Experts, Safety auditors, Distribution and Transmission experts with rich consulting experiences. This makes us one of the most preferred advisory Organization in Energy and Power sector.
          </p>
          <Link href="/home">
            <button className="button mt-5 lg:mt-[80px]">
              Know More
            </button>
          </Link>
        </div>

        {/* Image Section */}
        
        <Image
        width={678}
        height={574}
        src="/assets/home/HomeAboutUs.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[400px] lg:h-[600px] rounded-[20px] shadow-lg object-cover mt-10 lg:mt-0 border-b-12  border-[#889F2D]"/>
        
       
      </div>

    </section>
  );
}

