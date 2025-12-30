"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function EnergyAuditBenifits() {
  return (
    <section className='common-section '>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Energy Audit Benefits</h3>
        <h2 className="center-section-heading">Power your business with savings and sustainability
        </h2>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
      
            {/* Mission Box */}
         
             <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-45 lg:mr-[50px] gap-2'>
            {/* Box-1 */}
          <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>

            <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">1</div>
            <h3 className="content text-[#3d3d3d] "> <b className='title text-[#7B0000] '>Cut Energy Costs:- </b><br />
            Reduce operational expenses by up to 30%.</h3>
            </div>

            </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>

             <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">2</div>
            <h3 className="content text-[#3d3d3d] "> <b className='title text-[#7B0000] '>Boost Efficiency:- </b><br />
            Optimize the performance of critical equipment.</h3>
            </div>

            </motion.div>

            </div>
          
      
            {/* Center Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/assets/services/energyAudit/benefits.jpeg"
                alt="Team working"
                width={500}
                height={500}
                className="rounded-[150px] w-full object-cover"
              />
            </div>
      
            {/* Vision Box */}
           
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-45 lg:ml-[50px] gap-2'>
            {/* Box-2 */}
            <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>

            <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">3</div>
            <h3 className="content text-[#3d3d3d] "> <b className='title text-[#7B0000] '>Sustainability:- </b><br />
            Lower your carbon footprint and support green initiatives.</h3>
            </div>

            </motion.div>

             <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}>

            <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">4</div>
            <h3 className="content text-[#3d3d3d] "> <b className='title text-[#7B0000] '>Better ROI:- </b><br />
            Energy-saving investments often pay back within months.</h3>
            </div>

            </motion.div>

            </div>

            </div>

    </section>
  )
}
