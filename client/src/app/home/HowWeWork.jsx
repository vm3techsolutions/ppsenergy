"use client"
import React from 'react'
import Image from 'next/image';
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className='flex flex-col justify-center pt-[50px] pb-[50px]'>
        <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">How We Work</h3>
        <h2 className="center-section-heading">
          A PROVEN APPROACH TO DELIVER EFFICIENCY <br/>AND SUSTAINABILITY
        </h2>
        <p className="content text-[#3D3D3D]">
          PPS Energy’s structured, transparent, and impact-driven approach
        </p>
      </div>

      <div className='flex  mt-6 '>

        <div className='w-1/2'>
            <Image
                width={600}
                height={574}
                src="/assets/home/HowWeWork.png"
                alt="About Us"
                className="w-[700px] h-[600px]  rounded-r-[20px] shadow-lg object-cover opacity-100"
              />
        </div>

        <div className='flex flex-col justify-center ml-25 mt-6'>

            <div className="flex items-center mb-7">
            <span className=" border  border-green-500 mr-5 w-[70px] h-[70px] flex items-center justify-center text-[#889F2D] text-[40px] ">01</span>
            <h2 className="title">Understanding Your Needs</h2>
            </div>

            <div className='flex  items-center mb-7'>
            <span className='border border-green-500 mr-5 w-[70px] h-[70px] flex items-center justify-center text-[#889F2D] text-[40px] '>02</span>
            <h2 className='title' >Energy Assessment & Audit</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border border-green-500 mr-5 w-[70px] h-[70px] flex items-center justify-center text-[#889F2D] text-[40px] '>03</span>
            <h2 className='title '>Tailored Solutions Design</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border border-green-500 mr-5 w-[70px] h-[70px] flex items-center justify-center text-[#889F2D] text-[40px] '>04</span>
            <h2 className='title '>Implementation With Precision</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border border-green-500 mr-5 w-[70px] h-[70px] flex items-center justify-center text-[#889F2D] text-[40px] '>05</span>
            <h2 className='title'>Monitoring & Optimization</h2>
            </div>

            <div className='flex items-center mb-7'>
            <span className='border border-green-500 mr-5 w-[70px] h-[70px] flex items-center justify-center text-[#889F2D] text-[40px] '>06</span>
            <h2 className='title '>Sustained Partnership</h2>
            </div>
           
        </div>
        
      </div>
    </section>
  )
}
