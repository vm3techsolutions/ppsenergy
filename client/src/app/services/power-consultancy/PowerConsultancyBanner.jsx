"use client"
import React from 'react'
import Image from 'next/image'

export default function PowerConsultancyBanner() {
  return (
     <section className=" relative h-[450px] md:h-[600px] sm:h-[300px] lg:h-[600px] flex items-start bg-cover bg-center justify-center pt-[120px]"
      style={{ backgroundImage: "url('/assets/services/energyAudit/EnergyAuditBanner.png')" }}
    >
     

      {/* Content */}
      <div className="section relative z-10 max-w-6xl px-6 sm:px-4 md:px-8 text-center">
        <h2 className="heading text-[#7B0000] pb-6 sm:pb-4">Empowering Industries with <br/> Intelligent Energy Solutions</h2>
        <h3 className='text-center title mt-5'>Optimize energy performance, reduce operational costs, and achieve sustainability through expert power consultancy.</h3>

        <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:mx-[200px] justify-center '>
            <div className='lg:border-r-2 border-[#000000] lg:pr-5 lg:m-0 m-2'>
                  <button className='buttonGreenBG'>Request a Consultation</button>
            </div>
            <div className=' lg:m-0 m-2'>
                  <button className='buttonGreenBG'>Explore Our Solutions</button>
            </div>
          
          
        </div>

            </div>

      
    </section>
  )
}
