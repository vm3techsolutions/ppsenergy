import React from 'react'
import { motion } from 'framer-motion'

export default function OurCoreValues() {
  return (
    <section className=' flex flex-col items-center justify-center bg-[#7B0000] pt-5' >
        <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D] ">Our Core Values</h3>
        <h2 className="center-section-heading text-[#ffffff]">The principles that power us
        </h2>
        <p className="content text-[#ffffff]">
          Comprehensive energy strategies are totally customized for your
          efficiency and business growth
        </p>
      </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-12  section  gap-y-5 mb-15 ">
          
            {/* Box-1 */}
            <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='relative flex flex-col items-center text-center
  bg-white rounded-2xl p-3 h-[200px]
  shadow-md hover:shadow-xl transition-all duration-300
  hover:-translate-y-1'>
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>1</p>
            <h3 className='process-bullet-section-heading text-[#000000]'>Sustainability</h3>
            <p className='content text-[#000000]'>Building solutions that respect the planet.</p>
            </div>
            </motion.div>

            {/* Box-2 */}
             <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='relative flex flex-col items-center text-center
  bg-white rounded-2xl p-3 h-[200px]
  shadow-md hover:shadow-xl transition-all duration-300
  hover:-translate-y-1'> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>2</p>
            <h3 className='process-bullet-section-heading text-[#000000]'>Innovation</h3>
            <p className='content text-[#000000]'>Harnessing technology for smarter energy.</p>
            </div>
            </motion.div>

            {/* Box-3 */}
             <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='relative flex flex-col items-center text-center
  bg-white rounded-2xl p-3 h-[200px]
  shadow-md hover:shadow-xl transition-all duration-300
  hover:-translate-y-1'> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>3</p>
            <h3 className='process-bullet-section-heading text-[#000000]'>Integrity</h3>
            <p className='content text-[#000000]'>Operating with transparency and accountability.</p>
            </div>
            </motion.div>

            {/* Box-4 */}
             <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='relative flex flex-col items-center text-center
  bg-white rounded-2xl p-3 h-[200px]
  shadow-md hover:shadow-xl transition-all duration-300
  hover:-translate-y-1'> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>4</p>
            <h3 className='process-bullet-section-heading text-[#000000]'>Excellence</h3>
            <p className='content text-[#000000]'>Delivering quality beyond expectations.</p>
            </div>
            </motion.div>

            {/* Box-5 */}
             <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}>
            <div className='relative flex flex-col items-center text-center
  bg-white rounded-2xl p-3 h-[200px]
  shadow-md hover:shadow-xl transition-all duration-300
  hover:-translate-y-1'> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>5</p>
            <h3 className='process-bullet-section-heading text-[#000000]'>Customer Success</h3>
            <p className='content text-[#000000] '>Creating long-term value for our clients.</p>
            </div>
            </motion.div>
         </div>
    
    </section>
  )
}
