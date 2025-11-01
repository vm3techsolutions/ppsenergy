"use client"
import React from 'react'
import Image from 'next/image'

export default function EnergyAuditBanner() {
  return ( 
         <section className=" relative h-[500px] md:h-[600px] sm:h-[400px] lg:h-[600px] flex items-start bg-cover bg-center justify-center lg:pt-[120px] pt-[60px]"
      style={{ backgroundImage: "url('/assets/services/energyAudit/EnergyAuditBanner.png')" }}
    >
     

      {/* Content */}
    <div className="section relative z-10 lg:max-w-6xl px-6 sm:px-4 lg:px-8 text-center">
        <h2 className="
            heading text-[#7B0000] lg:pb-6 sm:pb-4">OPTIMIZE YOUR ENERGY, <br className="hidden sm:block" />MAXIMIZE YOUR SAVINGS! <br className="hidden sm:block" /></h2>
               <h3 className='text-center title mt-5'>Identify inefficiencies, enhance energy efficiency, and ensure sustainability through expert energy auditing solutions.</h3>

           

                  <div className="flex justify-center items-center gap-4 lg:mt-12 mt-6">
          <button className="button">
            Request a Energy Audit
          </button>
          <button className="buttonService">
            Talk to Our Experts
          </button>
        </div>
         </div>

      
    </section>
  )
}
