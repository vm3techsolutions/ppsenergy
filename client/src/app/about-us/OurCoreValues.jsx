import React from 'react'

export default function OurCoreValues() {
  return (
    <section className=' flex flex-col items-center justify-center bg-[#7B0000] pt-[20px]' >
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
            <div className='flex flex-col text-left '>
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>1</p>
            <h3 className='title text-[#ffffff]'>Sustainibility</h3>
            <p className='content text-[#ffffff]'>Building solutions that respect the planet.</p>
            </div>

            {/* Box-2 */}
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>2</p>
            <h3 className='title text-[#ffffff]'>Innovation</h3>
            <p className='content text-[#ffffff]'>Harnessing technology for smarter energy.</p>
            </div>

            {/* Box-3 */}
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>3</p>
            <h3 className='title text-[#ffffff]'>Integrity</h3>
            <p className='content text-[#ffffff]'>Operating with transparency and accountability.</p>
            </div>

            {/* Box-4 */}
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>4</p>
            <h3 className='title text-[#ffffff]'>Excellence</h3>
            <p className='content text-[#ffffff]'>Delivering quality beyond expectations.</p>
            </div>

            {/* Box-5 */}
            <div className='flex flex-col text-left '> 
            <p className='text-4xl font-bold text-[#889F2D] mb-2'>5</p>
            <h3 className='title text-[#ffffff]'>Customer Success</h3>
            <p className='content text-[#ffffff] '>Creating long-term value for our clients.</p>
            </div>
         </div>
    
    </section>
  )
}
