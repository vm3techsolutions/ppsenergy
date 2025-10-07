"use client"
import React from 'react'
import Image from 'next/image';
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className='flex flex-col justify-center pt-[50px] pb-[50px]'>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">How We Work</h3>
        <h2 className="center-section-heading">
          A PROVEN APPROACH TO DELIVER EFFICIENCY <br/>AND SUSTAINABILITY
        </h2>
        <p className="content text-[#3D3D3D]">
          PPS Energy’s structured, transparent, and impact-driven approach
        </p>
        </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  '>

      <Image
      width={600}
      height={574}
      src="/assets/home/HowWeWork.png"
      alt="About Us"
      className="w-[700px] h-[300px] lg:h-[600px]  rounded-r-[20px] shadow-lg object-cover opacity-100"/>
      

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 ml-[50px] mt-5'>

            <div className="flex items-center mb-7">
            <span className=" border-[2px] border-[#889F2D]-700 mr-5 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[40px] p-2">01</span>
            <h2 className="title">Understanding Your Needs</h2>
            </div>

            <div className='flex  items-center mb-7'>
            <span className='border-[2px] border-[#889F2D]-700 mr-5 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[40px] p-2'>02</span>
            <h2 className='title' >Energy Assessment & Audit</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border-[2px] border-[#889F2D]-700 mr-5 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[40px] p-2'>03</span>
            <h2 className='title '>Tailored Solutions Design</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border-[2px] border-[#889F2D]-700 mr-5 w-[60px] h-[60px]  flex items-center justify-center text-[#889F2D] text-[40px] p-2'>04</span>
            <h2 className='title '>Implementation With Precision</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border-[2px] border-[#889F2D]-700 mr-5 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[40px] p-2'>05</span>
            <h2 className='title'>Monitoring & Optimization</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border-[2px] border-[#889F2D]-700 mr-5 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[40px] p-2'>06</span>
            <h2 className='title'>Sustained Partnership</h2>
            </div>
           
        </div>
        
      </div>
    </section>
  )
}
