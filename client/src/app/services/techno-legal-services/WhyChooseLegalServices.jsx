"use client"
import React from 'react'
import {
  Scale,
  Settings,
  Landmark,
  FileCheck2,
  Workflow
} from "lucide-react"

export default function WhyChooseLegalServices() {
  return (
    <section className="common-section flex flex-col justify-center bg-[#fcfcfc]">
      <div className="text-center mb-10">
        <h2 className="center-section-heading">
          Why Choose PPS for Legal Services?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
        
        <div className="rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                        p-4 group hover:shadow-[0_0_25px_#889F2D] transition">
          <Scale className="w-12 h-12 mx-auto text-[#889F2D]
                            transition-transform group-hover:scale-110" />
          <h2 className="contact-heading text-[#7b0000] mt-4">
            Strong background in Energy & Power Sector Regulations
          </h2>
        </div>

        <div className="rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                        p-4 group hover:shadow-[0_0_25px_#889F2D] transition">
          <Settings className="w-12 h-12 mx-auto text-[#889F2D]
                               transition-transform group-hover:scale-110" />
          <h2 className="contact-heading text-[#7b0000] mt-4">
            Combined strength of technical engineers & legal experts
          </h2>
        </div>

        <div className="rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                        p-4 group hover:shadow-[0_0_25px_#889F2D] transition">
          <Landmark className="w-12 h-12 mx-auto text-[#889F2D]
                               transition-transform group-hover:scale-110" />
          <h2 className="contact-heading text-[#7b0000] mt-4">
            Proven experience with government & regulatory bodies
          </h2>
        </div>

        <div className="rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                        p-4 group hover:shadow-[0_0_25px_#889F2D] transition">
          <FileCheck2 className="w-12 h-12 mx-auto text-[#889F2D]
                                 transition-transform group-hover:scale-110" />
          <h2 className="contact-heading text-[#7b0000] mt-4">
            High-quality documentation aligned with national standards
          </h2>
        </div>

        <div className="rounded-b-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                        p-4 group hover:shadow-[0_0_25px_#889F2D] transition">
          <Workflow className="w-12 h-12 mx-auto text-[#889F2D]
                               transition-transform group-hover:scale-110" />
          <h2 className="contact-heading text-[#7b0000] mt-4">
            End-to-end support for complex techno-legal matters
          </h2>
        </div>

      </div>
    </section>
  )
}
