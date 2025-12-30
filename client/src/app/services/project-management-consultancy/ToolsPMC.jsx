"use client"
import React from "react"
import {
  Laptop2,
  BarChart3,
  Workflow,
  Settings,
  ClipboardCheck,
} from "lucide-react"

export default function ToolsPMC() {
  const steps = [
    {
      icon: Laptop2,
      title: "Primavera P6",
      desc: "Advanced scheduling and resource management for large-scale projects.",
    },
    {
      icon: ClipboardCheck,
      title: "MS Project",
      desc: "Streamlined planning, task tracking, and reporting for all project phases.",
    },
    {
      icon: BarChart3,
      title: "BIM & ERP Systems",
      desc: "Integrated visualization and cost control for improved coordination.",
    },
    {
      icon: Workflow,
      title: "PMBOK & ISO 21500",
      desc: "Frameworks ensuring process consistency, governance, and quality.",
    },
    {
      icon: Settings,
      title: "EVM & Lean Construction",
      desc: "Performance tracking and continuous improvement to reduce waste and cost.",
    },
  ]

  return (
    <section className="common-section ">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Project Management Tools & Methodologies</h3>
        <h2 className="center-section-heading ">Leveraging technology & best practices</h2>
        <p className="content text-[#3D3D3D] max-w-3xl mx-auto mt-3">
        We integrate advanced project management tools and globally recognized methodologies for better visibility, control, and efficiency.
        </p>
      </div>

      {/* Horizontal Flow Section */}
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
                  <Icon className="w-8 h-8 text-[#889F2D] transition-transform duration-300 ease-in-out group-hover:scale-110" />
                </div>
              </div>
              <h3 className="contact-heading text-[#7B0000] mb-4">{title}</h3>
              <p className="bulletPoints mt-2 text-gray-700">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
