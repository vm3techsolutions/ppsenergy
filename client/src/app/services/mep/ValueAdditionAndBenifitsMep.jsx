import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function ValueAdditionAndBenifitsMep() {
  return (
      <section className='common-section '>
             <div className="text-center mb-10">
             <h3 className="title text-[#889F2D]">Value Addition & Benifits</h3>
             <h2 className="center-section-heading">
             Why Our MEP Services Stand Out
             </h2>
             </div>
     
                 <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
           
                 {/* 1st Box section */}
              
                  <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-35 lg:mr-[50px] gap-2'>
                 {/* Box-1 */}
              
                 <div className='flex flex-col text-left '>
                 <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff] '>1</p>
                 <h3 className='title text-[#7B0000] mt-2'>End-to-end MEP design, execution, and maintenance under one roof</h3>
                 {/* <p className='content text-[#3d3d3d]'>End-to-end MEP design, execution, and maintenance under one roof
</p> */}
                 </div>
             
     
            
                 <div className='flex flex-col text-left '>
                 <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  '>2</p>
                 <h3 className='title text-[#7B0000] mt-2'>Focus on sustainability and energy efficiency</h3>
                 {/* <p className='content text-[#3d3d3d]'>Optimize the performance of critical equipment.</p> */}
                 </div>
           
                 </div>
               
           
                 {/* Center Image */}
                 <div className="flex flex-col justify-center items-center">
                   <Image
                     src="/assets/services/energyAudit/EnergyAuditBenifits.png"
                     alt="Team working"
                     width={500}
                     height={500}
                     className="rounded-[150px] w-full object-cover"
                   />

                    <div className='flex flex-col text-left mt-10'>
                 <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff] '>3</p>
                 <h3 className='title text-[#7B0000] mt-2'>Multi-disciplinary coordination for reduced project delays</h3>
                 {/* <p className='content text-[#3d3d3d]'>Optimize the performance of critical equipment.</p> */}
                 </div>
                 </div>
           
                 {/* Vision Box */}
                
                 <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-30 lg:ml-[50px] gap-2'>
                 {/* Box-2 */}
               
                 <div className='flex flex-col text-left   items-start'>
                <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  '>4</p>
                 <h3 className='title text-[#7B0000] mt-2'>Proven expertise across complex industrial and commercial projects</h3>
                 {/* <p className='content text-[#3d3d3d]'>Lower your carbon footprint and support green initiatives.</p> */}
                 </div>
            
     
                 
                 <div className='flex flex-col '>
                 <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  '>5</p>
                 <h3 className='title text-[#7B0000] mt-2'>Detailed documentation and transparent project reporting</h3>
                 {/* <p className='content text-[#3d3d3d]'>Energy-saving investments often pay back within months.</p> */}
                 </div>
                
     
                 </div>
     
                 </div>
     
         </section>
  )
}
