import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function OurEnergyAuditApproach() {
  return (
    <section className='common-section  bg-[#F9FAFB]'>

        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Our Energy Audit Approach</h3>
        <h2 className="center-section-heading">Energy auditing approach & methodology</h2>
        </div>

      {/* Second Section */}

       
       <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-3  lg:gap-25 ">
        {/* 1. Bullet Points */}
        <div className='  '>
      
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="w-full flex items-center bg-[#ffffff] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3">
    <span className="w-[35px] h-[35px] mr-3 flex items-center justify-center rounded-full bg-[#889F2D] text-white ml-2">
      01
    </span>
    <h2 className="title">Data Collection</h2>
  </div>
</motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
        <div className=' w-full flex items-center bg-[#ffffff] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-3 flex items-center justify-center rounded-full bg-[#889F2D] text-white ml-2 '>02</span>
        <h2 className='title ' >ABC Analysis </h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
        <div className='  w-full flex items-center bg-[#ffffff] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-3 flex items-center justify-center rounded-full bg-[#889F2D] text-white ml-2 '>03</span>
        <h2 className='title ' >Field study and Measurement</h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}>
        <div className='  w-full flex items-center bg-[#ffffff] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-3 flex items-center justify-center rounded-full bg-[#889F2D] text-white ml-2'>04</span>
        <h2 className='title ' >Data Collection and Analysis</h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}>
        <div className='  w-full flex items-center bg-[#ffffff] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-3 flex items-center justify-center rounded-full bg-[#889F2D] text-white ml-2'>05</span>
        <h2 className='title ' >Report Preparation and Submission</h2>
        </div>
        </motion.div>

        </div>

        <div className="text-center md:text-left">
          
          <p className="content text-[#3D3D3D]  text-left text-sm sm:text-base md:text-lg">
            An energy audit follows a clear and simple step-by-step approach to understand how energy is used and how it can be saved. Our certified and experienced auditors systematically collect and analyse the significant energy flows and losses by visiting your site and interview your facility manager, inspect your lighting, air conditioning, heating and ventilation equipment, controls, refrigeration, air compressors, water consuming equipment, and anything else that is using energy.
            <br/><br/>
            After this, measurements and data analysis are done to understand actual energy consumption and efficiency levels. Based on this analysis, areas of energy wastage are identified and practical energy-saving opportunities are listed. Each recommendation is then evaluated for cost, savings, and payback period. Finally, a clear report is prepared with findings, savings potential, and simple action steps for implementation and improvement.
          </p>
        </div>

      </div>

      

    </section>
  )
}
