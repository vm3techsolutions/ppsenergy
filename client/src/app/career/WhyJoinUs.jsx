import React from 'react'
import Image from 'next/image'

export default function WhyJoinUs() {
  return (
      <section className='common-section '>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Why Join Us</h3>
        <h2 className="center-section-heading">Build Your Career in Energy Efficiency and Sustainability</h2>
      </div>
      
<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  gap-25   ">


{/* Left Image Section */}
    <div className="relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden">
          <Image
            src="/assets/career/WhyJoinUs.jpg"
            alt="Professional working on laptop"
            width={500}
            height={400}
            className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[10px] rounded-tr-[40px] rounded-br-[120px] shadow-lg object-cover"/>
        </div>
    </div>

 {/* 1. Right Section */}
        <div className='lg:mr-[80px] flex flex-col justify-center'>
        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px] flex items-center p-4 w-full pr-[25px] mb-4'>
          <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>1</p>
          <h3 className="title text-[#3D3D3D] ">
           Lorem Ipsum</h3>
        </div>
        
        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-4 w-full pr-[25px] my-4'>
          <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>2</p>
          <h3 className="title text-[#3D3D3D]  ">Lorem Ipsum</h3>
        </div>
        
        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-4 w-full pr-[25px] my-4'>
           <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>3</p>
          <h3 className="title text-[#3D3D3D] ">Lorem Ipsum</h3>
        </div>

        <div className=' bg-[#f7f7f7] rounded-l-[40px] rounded-[10px]  flex items-center p-4 w-full pr-[25px] my-4'>
           <p className='title bg-[#889F2D] rounded-full  w-[35px] h-[35px] text-center text-[#ffffff]  mr-6'>4</p>
          <h3 className="title text-[#3D3D3D] ">Lorem Ipsum</h3>
        </div>

        </div> 
        
    </div>
    </section>
  )
}
