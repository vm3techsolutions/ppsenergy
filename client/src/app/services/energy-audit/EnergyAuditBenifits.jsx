import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function EnergyAuditBenifits() {
  return (
    <section className='common-section bg-[#f8f8f8]'>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Energy Audit Benifits</h3>
        <h2 className="center-section-heading">
        POWER YOUR BUSINESS WITH SAVINGS<br/>
        AND SUSTAINABILITY
        </h2>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
      
            {/* 1st Box section */}
         
             <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-35 lg:mr-[50px] gap-2'>
            {/* Box-1 */}
          <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
            <div className='flex flex-col text-left '>
            <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>1</p>
            <h3 className='title text-[#7B0000] mt-2'>Cut Energy Costs</h3>
            <p className='content text-[#3d3d3d]'>Reduce operational expenses by up to 30%.</p>
            </div>
            </motion.div>

          <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
            <div className='flex flex-col text-left '>
            <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>2</p>
            <h3 className='title text-[#7B0000] mt-2'>Boost Efficiency</h3>
            <p className='content text-[#3d3d3d]'>Optimize the performance of critical equipment.</p>
            </div>
            </motion.div>

            </div>
          
      
            {/* Center Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/assets/services/energyAudit/EnergyAuditBenifits.png"
                alt="Team working"
                width={500}
                height={500}
                className="rounded-[150px] w-full object-cover"
              />
            </div>
      
            {/* Vision Box */}
           
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-30 lg:ml-[50px] gap-2'>
            {/* Box-2 */}
            <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
            <div className='flex flex-col text-left   items-start'>
           <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>3</p>
            <h3 className='title text-[#7B0000] mt-2'>Sustainability</h3>
            <p className='content text-[#3d3d3d]'>Lower your carbon footprint and support green initiatives.</p>
            </div>
            </motion.div>

             <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}>
            <div className='flex flex-col text-left'>
            <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>4</p>
            <h3 className='title text-[#7B0000] mt-2'>Better ROI</h3>
            <p className='content text-[#3d3d3d]'>Energy-saving investments often pay back within months.</p>
            </div>
            </motion.div>

            </div>

            </div>

    </section>
  )
}
