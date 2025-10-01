"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";


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
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 text-center gap-y-10 ">

        <div  className= 'rounded-b-[10px] shadow-lg overflow-hidden p-7 text-center '>
          <Image
           width={90}
           height={90}
           src="/assets/home/ProvenExpertiseIcon.png"
           alt="About Us"
           className="w-full max-w-md md:max-w-full h-[90px] object-contain"
          />
          <h2 className="title text-[#889F2D]">Proven Expertise</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>With over a decade of experience in the energy sector, we bring deep technical knowledge every project. Our team has successfully delivered solutions for diverse industries across India.</p>
        </div>

         <div  className= 'rounded-b-[10px] shadow-lg overflow-hidden p-7 '>
            <Image
           width={90}
           height={90}
           src="/assets/home/TailoredSolutionsIcon.png"
           alt="About Us"
           className="w-full max-w-md md:max-w-full h-[90px] object-contain"
          />
            <h2 className="title text-[#889F2D]">Tailored Energy Solutions</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>We believe there is no one-size-fits-all approach. Every organization has unique energy challenges. We design customized strategies that align with your operational needs, sustainability goals, and budget.</p>
        </div>

         <div  className= 'rounded-b-[10px] shadow-lg overflow-hidden p-7'>
            <Image
           width={90}
           height={90}
           src="/assets/home/EndToEndSupportIcon.png"
           alt="About Us"
           className="w-full max-w-md md:max-w-full h-[90px] object-contain"
          />
            <h2 className="title text-[#889F2D]">End-to-End Support</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>From consultation and audits to implementation and monitoring, we manage the entire energy journey. You can count on us as a single, reliable partner for complete energy transformation.</p>
        </div>

         <div  className= 'rounded-b-[10px] shadow-lg overflow-hidden p-7'>
            <Image
           width={90}
           height={90}
           src="/assets/home/CompliancesIcon.png"
           alt="About Us"
           className="w-full max-w-md md:max-w-full h-[90px] object-contain"
          />
            <h2 className="title text-[#889F2D]">Compliance & Sustainability Focus</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>Our solutions comply with the latest energy conservation and electricity regulations while helping you move closer to Net Zero and carbon-neutral commitments.</p>
        </div>

         <div className= 'rounded-b-[10px] shadow-lg overflow-hidden p-7'>
            <Image
           width={90}
           height={90}
           src="/assets/home/MeasurableResultsIcon.png"
           alt="About Us"
           className="w-full max-w-md md:max-w-full h-[90px] object-contain"
          />
            <h2 className="title text-[#889F2D]">Measurable Results</h2>
            <p className='border-b-2 mx-42 mb-3'></p>
            <p>We don’t just promise—we prove. Every project is backed by transparent reporting, real-time monitoring, and clear metrics on savings and efficiency improvements.</p>
        </div>

         <div className= 'rounded-b-[10px] shadow-lg overflow-hidden p-7'>
          <Image
           width={90}
           height={90}
           src="/assets/home/LongTermPartnershipIcon.png"
           alt="About Us"
           className="w-full max-w-md md:max-w-full h-[90px] object-contain"
          />
            <h2 className="title text-[#889F2D] ">Long-Term Partnerships</h2>
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
