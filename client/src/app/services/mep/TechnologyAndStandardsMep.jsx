"use client"
import React from "react"
import {
  PenTool,
  Layers,
  Sun,
  Thermometer,
  ShieldCheck,
} from "lucide-react"

export default function TechnologiesStandards() {
  const steps = [
    {
      icon: PenTool,
      title: "AutoCAD MEP",
      desc: "Design precision and detailed drafting for MEP layouts.",
    },
    {
      icon: Layers,
      title: "Revit BIM",
      desc: "Seamless 3D coordination and clash detection using BIM workflows.",
    },
    {
      icon: Sun,
      title: "Dialux",
      desc: "Lighting simulation and energy-efficient illumination planning.",
    },
    {
      icon: Thermometer,
      title: "HAP & TRACE",
      desc: "Accurate HVAC load calculations and performance optimization.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Standards",
      desc: "Adhering to ASHRAE, NFPA, NBC, IS Codes, and ISO standards.",
    },
  ]

  return (
    <section className="common-section ">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">
          TECHNOLOGIES & STANDARDS
        </h3>
        <h2 className="center-section-heading">
          Advanced Tools & Compliance Standards
        </h2>
        <p className="content text-[#3D3D3D]">
          We leverage the latest engineering software and adhere to global standards for design accuracy and safety assurance.
        </p>
      </div>

      {/* Timeline / Flow Layout */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-4 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-2 border-dashed border-[#889F2D]/40 z-0"></div>

        {steps.map(({ icon: Icon, title, desc }, index) => (
          <div
            key={index}
            className="relative z-10 bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between text-center group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300 flex-1 min-h-[260px]"
          >
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#889F2D]/10 group-hover:bg-[#889F2D]/20 transition">
                  <Icon className="w-8 h-8 text-[#889F2D]" />
                </div>
              </div>
              <h3 className="contact-heading text-[#7B0000] mb-4">
                {title}
              </h3>
              <p className=" bulletPoints mt-2">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
