"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ApproachPMC() {
  return (
 <section className='flex flex-col justify-center pt-[50px] pb-[50px] '>
         <div className="text-center mb-10">
         <h3 className="title text-[#889F2D]">Our PMC Approach</h3>
         <h2 className="center-section-heading"> A STRATEGIC APPROACH FOR RELIABLE <br /> PROJET DELIVERY </h2>
         {/* <p className="content text-[#3D3D3D]">We follow a structured, transparent, and data-driven approach to ensure measurable outcomes for every client. </p> */}
         </div>
     
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  '>
           <Image
           width={600}
           height={574}
           src="/assets/home/HowWeWork.png"
           alt="About Us"
           className="w-[700px] h-[300px] lg:h-[650px]  rounded-r-[20px] shadow-lg object-cover opacity-100 "/>
         
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:ml-[50px] mt-5 ml-2 mr-2'>
     
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}>
 
         <div className="flex items-center mb-7">
         <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">01</span>
         <h2 className="process-bullet-section-desc">
         <b className='process-bullet-section-heading text-[#7b0000]'>Project Initiation:-</b><br />
         Define scope, objectives, and key deliverables.</h2>
         </div>
         </motion.div>
     
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}>
     
         <div className='flex  items-center mb-7'>
         <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">02</span>
         <h2 className='process-bullet-section-desc' >
         <b className='process-bullet-section-heading text-[#7b0000]'>Planning & Scheduling:-</b><br />
          Develop detailed timelines, budgets, and resource plans.</h2>
         </div>
         </motion.div>
     
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}>
     
         <div className='flex items-center mb-7'>
         <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">03</span>
         
         <h2 className='process-bullet-section-desc'>
         <b className='process-bullet-section-heading text-[#7b0000]'>Execution Management:-</b><br />
         Oversee day-to-day implementation and coordination..</h2>
         </div>
         </motion.div>
     
         <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2 }}>
     
         <div className='flex items-center mb-7'>
         <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">04</span>
         <h2 className='process-bullet-section-desc'>
         <b className='process-bullet-section-heading text-[#7b0000]'>Monitoring & Reporting:-</b> <br />
         Track performance, manage risks, and ensure compliance.</h2>
         </div>
         </motion.div>
     
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.4 }}>
     
         <div className='flex items-center mb-7'>
         <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">05</span>
         <h2 className='process-bullet-section-desc'>
         <b className='process-bullet-section-heading text-[#7b0000]'>Quality Assurance:-</b><br />
         Conduct inspections and verify technical standards.</h2>
         </div>
         </motion.div>
     
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.6 }}>
     
         <div className='flex items-center mb-7'>
         <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">06</span>
         <h2 className='process-bullet-section-desc'>
         <b className='process-bullet-section-heading text-[#7b0000]'>Completion & Handover:-</b><br />
         Deliver fully functional and compliant project outcomes.</h2>
         </div>
         </motion.div>
 
         </div>
         </div>
         </section>
  )
}
