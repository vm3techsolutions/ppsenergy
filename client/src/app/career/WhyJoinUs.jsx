"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhyJoinUs() {
//devyani added
  const reasons = [
    "Work With Purpose",
    "Learn From Industry Experts",
    "Advance Your Career Faster",
    "Be Part of the Green Future",
    "Collaborative Work Environment",
    "Future-Focused Industry"
  ];

  return (
    <section className='common-section'>
      
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Why Join Us</h3>
        <h2 className="center-section-heading">
          Build your career in energy efficiency and sustainability
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

        {/* Left Image */}
        <div className="relative w-full">
          <div className="relative rounded-4xl overflow-hidden">
            <Image
              src="/assets/career/WhyJoinUs.jpg"
              alt="Professional working on laptop"
              width={500}
              height={400}
              className="w-full h-[350px] lg:h-[500px] rounded-bl-[10px] rounded-tr-[40px] rounded-br-[120px] shadow-lg object-cover border-b-15 border-r-15 border-[#889f2d]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col gap-4 p-4'>

          {reasons.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 + i * 0.2 }}
            >
              <div className='flex items-center bg-[#f7f7f7] rounded-l-[120px] p-4'>
                <span className='w-[35px] h-[35px] flex items-center justify-center content p-2 rounded-full bg-[#889F2D] text-white mr-4'>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className='title'>{text}</h2>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
      
    </section>
  )
}
