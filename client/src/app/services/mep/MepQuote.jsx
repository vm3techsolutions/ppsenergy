"use client"
import React from 'react'
import Image from 'next/image'

export default function MepQuote() {
  return (
     <section
      className="relative bg-[url('/assets/services/energyAudit/EnergyAuditBottomSectionBanner.png')] bg-cover bg-center py-44 my-10 ">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <p className="heading text-white italic leading-snug">
         "Efficiency, comfort, and safety — seamlessly engineered."
        </p>
      </div>
    </section>
  )
}
