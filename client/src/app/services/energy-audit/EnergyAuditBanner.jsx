"use client"
import React from 'react'
import Image from 'next/image'

export default function EnergyAuditBanner() {
  return (
        <section
      className="relative h-[600px] md:h-[600px] sm:h-[400px] flex items-start bg-cover bg-center justify-center pt-[120px]"
      style={{ backgroundImage: "url('/assets/services/energyAudit/EnergyAuditBanner.png')" }}
    >
     

      {/* Content */}
      <div className="section relative z-10 max-w-3xl px-6 sm:px-4 md:px-8 ">
        <h2
          className="
            heading text-[#7B0000] 
            text-4xl md:text-3xl sm:text-2xl 
            leading-tight sm:leading-snug 
            pb-6 sm:pb-4
          "
        >

          OPTIMIZE YOUR ENERGY, <br className="hidden sm:block" />
          MAXIMIZE YOUR SAVINGS! <br className="hidden sm:block" />
        
        </h2>

        
      </div>

      
    </section>
  )
}
