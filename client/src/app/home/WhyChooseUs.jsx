"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";


export default function WhyChooseUs() {
  return (
    <section className='common-section flex flex-col justify-center'>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Why Choose Us</h3>
        <h2 className="center-section-heading">
           TRUSTED EXPERTISE, MEASURABLE IMPACT,  <br/>AND A GREENER TOMORROW
        </h2>
         <p className="content text-[#3D3D3D]">
          Right partner for your Energy Efficiency, Net Zero, and Sustainability Goals.
        </p>
      </div>
{/* Grid Boxes Designing */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center gap-y-10 ">

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 text-center group '>
        <Image
        width={90}
        height={90}
        src="/assets/home/ProvenExpertiseIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#889F2D] mt-2">Proven Expertise</h2>
        <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>With over a decade of experience in the energy sector, we bring deep technical knowledge every project. Our team has successfully delivered solutions for diverse industries across India.</p>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group '>
        <Image
        width={90}
        height={90}
        src="/assets/home/TailoredSolutionsIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#889F2D] mt-2">Tailored Energy Solutions</h2>
        <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>We believe there is no one-size-fits-all approach. Every organization has unique energy challenges. We design customized strategies that align with your operational needs, sustainability goals, and budget.</p>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group'>
        <Image
        width={90}
        height={90}
        src="/assets/home/EndToEndSupportIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#889F2D] mt-2">End-to-End Support</h2>
        <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>From consultation and audits to implementation and monitoring, we manage the entire energy journey. You can count on us as a single, reliable partner for complete energy transformation.</p>
        </div>

        <div  className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group'>
        <Image
        width={90}
        height={90}
        src="/assets/home/CompliancesIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#889F2D] mt-2">Compliance & Sustainability Focus</h2>
        <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>Our solutions comply with the latest energy conservation and electricity regulations while helping you move closer to Net Zero and carbon-neutral commitments.</p>
        </div>

        <div className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group'>
        <Image
        width={90}
        height={90}
        src="/assets/home/MeasurableResultsIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#889F2D] mt-2 ">Measurable Results</h2>
        <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>We don’t just promise—we prove. Every project is backed by transparent reporting, real-time monitoring, and clear metrics on savings and efficiency improvements.</p>
        </div>

        <div className= 'rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] overflow-hidden p-7 group'>
        <Image
        width={90}
        height={90}
        src="/assets/home/LongTermPartnershipIcon.png"
        alt="About Us"
        className="w-full max-w-md md:max-w-full h-[90px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <h2 className="title text-[#889F2D] mt-2 ">Long-Term Partnerships</h2>
        <p className='border-b-[2px] border-[#7B0000]  mx-40 mb-3 mt-1'  ></p>
        <p>Our commitment extends beyond project delivery. We work with you as long-term partners, ensuring continuous optimization and future-ready solutions.</p>
        </div>

       </div>

       <div className='flex justify-center mt-10'>
        <Link href="/home">
                <button className="button mt-3 ">
                 Know More
                </button>
              </Link>
       </div>
    </section>
  )
}
