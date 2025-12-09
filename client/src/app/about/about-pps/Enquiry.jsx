"use client"
import React from 'react'
import Link from 'next/link'

export default function Enquiry() {
  return (
    <section className='common-section flex flex-col justify-center items-center bg-[#f8f8f8]'>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Enquiry</h3>
        <h2 className="center-section-heading">
          LET’S BUILD A CLEANER FUTURE TOGETHER
        </h2>
        <p className="content text-[#3D3D3D]">
         Energy powers growth. Clean energy powers sustainability. We combine innovation, expertise, and commitment to transform your energy goals into reality.
        </p>
      </div>
      
      <div className='text-center items-center'>
        <Link href="/contact-us">
                <button className="button  sm:text-sm md:text-base px-8 sm:px-5 py-3 sm:py-2 rounded-lg shadow-md hover:bg-green-600 transition mt-3 mb-4">
                  Contact Us Today
                </button>
              </Link>
      </div>
    </section>
  )
}
