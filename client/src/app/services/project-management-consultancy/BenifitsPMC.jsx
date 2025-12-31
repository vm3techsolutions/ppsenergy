"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function BenifitsPMC() {
  return (
    <section className='common-section  bg-[#F9FAFB]'>
                <div className="text-center mb-15 ">
                <h3 className="title text-[#889F2D]">Value Addition & Benefits</h3>
                <h2 className="center-section-heading">Why our PMC services make the difference</h2>
                </div>
        
               <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
              
   {/* 1st Box section */}
                 
               <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-20 lg:mr-[50px] gap-2'>
   
   {/* Box-1 */}
   
   
   
               <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>  
               <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">1</div>
               <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Holistic control over project time, cost, and quality</b></h2>
               </div>
               </motion.div>    
   
               
               <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}> 
               <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">2</div>
                   <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Transparent communication and reporting</b> 
        </h2>
               </div>
               </motion.div> 
   
                <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
               <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">3</div>
            <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Seamless coordination between stakeholders, contractors, and consultants</b> </h2>
               </div>
               </motion.div>
               
              </div>
                  
              
    {/* Center Image */}
               <div className="flex flex-col justify-center items-center ">
               <Image
               src="/assets/services/pmc/BenefitsBannerPMC.png"
               alt="Team working"
               width={500}
               height={500}
               className="rounded-[150px] w-full object-cover lg:h-[500px]" />
                    
               </div>
              
   {/* Vision Box */}
                   
               <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-20 lg:ml-[50px] gap-2'>
   
   {/* Box-2 */}
                <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
               <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">4</div>
               <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Focus on sustainability, safety, and compliance</b> </h2>
               </div>
               </motion.div>
   
               
                <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                       <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">5</div>
         <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Experienced multidisciplinary project management team</b> </h2>
               </div>
                 </motion.div>

                   <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                       <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">6</div>
         <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Proven record in delivering complex, large-scale projects</b> </h2>
               </div>
                 </motion.div>
               
        </div>
        </div>
        </section>
  )
}
