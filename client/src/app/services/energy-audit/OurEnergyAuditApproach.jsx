import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px] flex items-center p-2 w-full pr-[25px] mb-6'>
          <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>1</p>
          <h3 className="title text-[#3D3D3D] ">
           Data Collection</h3>
        </div>
        
        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-2 w-full pr-[25px] my-6'>
            <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>2</p>
          <h3 className="title text-[#3D3D3D]  "> ABC analysis</h3>
        </div>
        
        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-2 w-full pr-[25px] my-6'>
           <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>3</p>
          <h3 className="title text-[#3D3D3D] "> Field study and measurement</h3>
        </div>

        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-2 w-full pr-[25px] my-6'>
           <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>4</p>
          <h3 className="title text-[#3D3D3D] "> Data collection and analysis</h3>
        </div>

        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-2 w-full pr-[25px] my-6'>
           <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>5</p>
          <h3 className="title text-[#3D3D3D]  ">  Report preparation and submission</h3>
        </div>
        </div>



        <div className="text-center md:text-left">
          
          <p className="content text-[#3D3D3D]  text-left text-sm sm:text-base md:text-lg">
            Our certified and experienced auditors systematically collect and analyse the significant energy flows and losses by visiting your site and interview your facility manager, inspect your lighting, air conditioning, heating and ventilation equipment, controls, refrigeration, air compressors, water consuming equipment, and anything else that is using energy. <br/><br/>
            Depending on the type of the audit, the auditor may take measurements of temperatures, pressures, light levels, power draw, and other things.
          </p>
        </div>

      </div>

      

    </section>
  )
}
