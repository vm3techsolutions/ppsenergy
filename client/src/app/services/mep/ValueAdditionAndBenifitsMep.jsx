"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function ValueAdditionAndBenifitsMep() {
  return (
      <section className='common-section  bg-[#F9FAFB]'>
             <div className="text-center mb-15">
             <h3 className="title text-[#889F2D]">Value Addition & Benifits</h3>
             <h2 className="center-section-heading">
             Why Our MEP Services Stand Out
             </h2>
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
            <h3 className="title text-[#7B0000] "> End-to-end MEP design, execution, and maintenance under one roof</h3>
            </div>
            </motion.div>    

            
            <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}> 
            <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">2</div>
            <h3 className="title text-[#7B0000] ">Focus on sustainability and energy efficiency</h3>
            </div>
            </motion.div> 

             <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}>
            <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">3</div>
            <h3 className="title text-[#7B0000] ">Multi-disciplinary coordination for reduced project delays</h3>
            </div>
            </motion.div>
            
           </div>
               
           
 {/* Center Image */}
            <div className="flex flex-col justify-center items-center ">
            <Image
            src="/assets/services/energyAudit/EnergyAuditBenifits.png"
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
            <h3 className="title text-[#7B0000] ">Proven expertise across complex industrial and commercial projects</h3>
            </div>
            </motion.div>

            
             <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}>
                    <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="shrink-0 flex items-center justify-center bg-[#889F2D] text-white font-semibold rounded-full w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-lg">5</div>
            <h3 className="title text-[#7B0000] ">Detailed documentation and transparent project reporting</h3>
            </div>
              </motion.div>
            
     </div>
     </div>
     </section>
  )
}
