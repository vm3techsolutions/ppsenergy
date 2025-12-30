"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function ToolsMarketResearch() {
  return (
   <section className='common-section  '>
                <div className="text-center mb-15">
                <h3 className="title text-[#889F2D]">Data-Driven Precision</h3>
                <h2 className="center-section-heading">Smart tools, proven methodologies</h2>
                <p className='content text-[#3D3D3D] '>We leverage the latest research and analysis tools to ensure accuracy and depth in every project.</p>
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
        <b className='process-bullet-section-heading text-[#7b0000]'>Digital survey platforms</b> <br />
        (Google Forms, SurveyMonkey, Qualtrics)</h2>
               </div>
               </motion.div>    
   
               
               <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}> 
               <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">2</div>
                   <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Statistical analysis software</b> <br />
        (SPSS, Excel, Power BI)</h2>
               </div>
               </motion.div> 
   
                <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
               <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">3</div>
            <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Focus group discussions and in-depth interviews</b> </h2>
               </div>
               </motion.div>
               
              </div>
                  
              
    {/* Center Image */}
               <div className="flex flex-col justify-center items-center ">
               <Image
               src="/assets/services/marketResearch/benefits.jpeg"
               alt="Team working"
               width={500}
               height={500}
               className="rounded-[150px] w-full object-cover" />
                    
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
        <b className='process-bullet-section-heading text-[#7b0000]'>Data visualization dashboards and interactive reports</b> </h2>
               </div>
               </motion.div>
   
               
                <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                       <div className="flex items-start gap-3 sm:gap-4 text-left">
               <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">5</div>
         <h2 className='process-bullet-section-desc'>
        <b className='process-bullet-section-heading text-[#7b0000]'>Standards Followed:</b> <br />
        ISO 20252 (Market, Opinion and Social Research) <br />
        GDPR-compliant data collection and storage</h2>
               </div>
                 </motion.div>
               
        </div>
        </div>
        </section>
  )
}
