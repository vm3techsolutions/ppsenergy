import React from 'react'
import Image from 'next/image'

export default function WhoWeAre() {
  return (
    <section className="relative lg:h-[980px] md:h-[600px] sm:h-[400px] flex flex-col items-center bg-cover bg-center common-section mt-[75px] "
      style={{ backgroundImage: "url('/assets/aboutus/AboutUsWhoWeAre.png')" }}>

      

        <div className="text-left mb-4">
        <h3 className="title text-[#889F2D]">Who We Are</h3>
        <h2 className="center-section-heading">
          INNOVATIVE ENERGY SOLUTIONS FOR <br/>A GREENER TOMORROW
        </h2>
        <div className='flex items-center'>
            <span className='text-[#889F2D]   border-b-3 mr-5 w-1/3 text-[0px]'>fghfg</span>
             <p className="content text-[#3D3D3D] ml-10 mt-6 mr-18 ">
          We are passionate about creating a world where energy is clean, reliable, and accessible. As a leading energy services provider, we specialize in renewable power, energy efficiency, and advanced infrastructure solutions that help businesses, industries, and communities embrace sustainability. <br/><br/>
           With a commitment to innovation and excellence, we go beyond traditional solutions, offering strategies that reduce costs, improve efficiency, and minimize environmental impact.
        </p>
        </div>
       
      </div>

    </section>
  )
}
