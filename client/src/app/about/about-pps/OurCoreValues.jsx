import React from 'react'
import { motion } from 'framer-motion'

export default function OurCoreValues() {
  return (
    <section className=' flex flex-col items-center justify-center bg-[#7B0000] pt-5' >
        <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D] ">Our Core Values</h3>
        <h2 className="center-section-heading text-[#ffffff]">
          THE PRINCIPLES THAT POWER US
        </h2>
        <p className="content text-[#ffffff]">
          Comprehensive energy strategies are totally customized for your
          efficiency and business growth
        </p>
      </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12  section  gap-y-5 mb-15 ">
          
            {/* Box-1 */}
            <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='flex flex-col text-left '>
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>1</p>
            <h3 className='title text-[#ffffff]'>Sustainability</h3>
            <p className='content text-[#ffffff]'>Building solutions that respect the planet.</p>
            </div>
            </motion.div>

            {/* Box-2 */}
             <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>2</p>
            <h3 className='title text-[#ffffff]'>Innovation</h3>
            <p className='content text-[#ffffff]'>Harnessing technology for smarter energy.</p>
            </div>
            </motion.div>

            {/* Box-3 */}
             <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>3</p>
            <h3 className='title text-[#ffffff]'>Integrity</h3>
            <p className='content text-[#ffffff]'>Operating with transparency and accountability.</p>
            </div>
            </motion.div>

            {/* Box-4 */}
             <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>4</p>
            <h3 className='title text-[#ffffff]'>Excellence</h3>
            <p className='content text-[#ffffff]'>Delivering quality beyond expectations.</p>
            </div>
            </motion.div>

            {/* Box-5 */}
             <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>5</p>
            <h3 className='title text-[#ffffff]'>Customer Success</h3>
            <p className='content text-[#ffffff] '>Creating long-term value for our clients.</p>
            </div>
            </motion.div>
         </div>
    
    </section>
  )
}
