"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Methodology() {
  const steps = [
    {
      id: "01",
      title: "Baseline Energy Audit",
      text: "Conducted a detailed on-site assessment and analyzed consumption patterns.",
      align: "left",
    },
    {
      id: "02",
      title: "Baseline Energy Audit",
      text: "Conducted a detailed on-site assessment and analyzed consumption patterns.",
      align: "right",
    },
    {
      id: "03",
      title: "Baseline Energy Audit",
      text: "Conducted a detailed on-site assessment and analyzed consumption patterns.",
      align: "left",
    },
    {
      id: "04",
      title: "Baseline Energy Audit",
      text: "Conducted a detailed on-site assessment and analyzed consumption patterns.",
      align: "right",
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <h2 className="text-center center-section-heading mb-16">OUR METHODOLOGY</h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center ${
                step.align === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
              <div className="w-[340px] p-6 rounded-md shadow-md bg-white border border-gray-100 group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300">
                <h3 className="process-bullet-section-heading text-[#889F2D] mb-2">
                  {step.title}
                </h3>
                <p className="content-section">{step.text}</p>
              </div>
              </motion.div>

              {/* Step Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#889F2D] text-white flex items-center justify-center font-semibold">
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
