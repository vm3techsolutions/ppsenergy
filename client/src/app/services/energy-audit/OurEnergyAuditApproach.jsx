import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function OurEnergyAuditApproach() {
  return (
    <section className='common-section '>

        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Our Energy Audit Approach</h3>
        <h2 className="center-section-heading">
        ENERGY AUDITING APPROACH & METHODOLOGY
        </h2>
        </div>

      {/* Second Section */}

       
       <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-3   ">
        {/* 1. Bullet Points */}
        <div className='lg:mr-[80px]'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>01</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >Data Collection </h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>02</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >ABC Analysis </h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>03</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >Field study and Measurement</h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>04</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >Data Collection and Analysis</h2>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-3 lg:mb-6 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>05</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >Report Preparation and Submission</h2>
        </div>
        </motion.div>

        </div>

        <div className="text-center md:text-left">
          
          <p className="content text-[#3D3D3D]  text-left text-sm sm:text-base md:text-lg">
            Our certified and experienced auditors systematically collect and analyse the significant energy flows and losses by visiting your site and interview your facility manager, inspect your lighting, air conditioning, heating and ventilation equipment, controls, refrigeration, air compressors, water consuming equipment, and anything else that is using energy. <br/><br/>Depending on the type of the audit, the auditor may take measurements of temperatures, pressures, light levels, power draw, and other things.
          </p>
        </div>

      </div>

      

    </section>
  )
}
