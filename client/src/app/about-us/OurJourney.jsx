import React from 'react'
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";

export default function OurJourney() {
  return (
    <section className='section-vertical-padding'>
        <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D]">Our Journey</h3>
        <h2 className="center-section-heading">
          EVERY MILESTONE IS A STEP TOWARDS A GREENER FUTURE
        </h2>

      </div>

{/* Journey Section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">

{/* Image  */}
      <div className='relative width-full h-[350px] md:h-[600px] sm:h-[400px] object-cover lg:mr-[30px]' 
      // style={{ backgroundImage: "url('/assets/aboutus/AboutUsOurJourney.png')" }}
      >
        <Image
        width={260}
        height={205}
        src="/assets/aboutus/AboutUsOurJourney.png"
        alt="About Us"
        className="w-full h-[350px] lg:h-[550px] object-cover "/>

      </div>

{/* Text Area  */}
      <div className='flex flex-col  lg:pr-[80px]  ml-2'>
        
        <div>
          <p className='content'>
            Our story began with a simple idea: to transform how the world consumes energy. Over the years, we have grown into a multi-faceted energy services provider, bridging the gap between conventional power and renewable innovation. <br/><br/>
          From our first energy audit project to large-scale solar and wind installations, every step of our journey has been fueled by a vision of progress and sustainability. Today, we are proud to have delivered solutions that power industries, reduce emissions, and make energy more efficient.
          </p>
        </div>

        <h3 className="title text-[#889F2D] my-[10px] lg:my-[25px] ">Milestones at a Glance:</h3>

<div className=' bg-[#f7f7f7] rounded-r-[50px]  flex items-center p-3 w-fit pr-[25px] my-2'>
  <FaAngleDoubleRight className="text-[#7B0000] mr-2 text-xl " />
  <h3 className="content text-[#7B0000] ">
    2015: Company founded with a focus on energy consulting.</h3>
</div>

<div className=' bg-[#f7f7f7] rounded-r-[50px]  flex items-center p-3 w-fit pr-[25px] my-2'>
    <FaAngleDoubleRight className="text-[#7B0000] mr-2 text-xl " />
  <h3 className="content text-[#7B0000] p-8 ">  2015: Company founded with a focus on energy consulting.</h3>
</div>

<div className=' bg-[#f7f7f7] rounded-r-[50px]  flex items-center p-3 w-fit pr-[25px] my-2'>
    <FaAngleDoubleRight className="text-[#7B0000] mr-2 text-xl " />
  <h3 className="content text-[#7B0000] p-8 ">  2015: Company founded with a focus on energy consulting.</h3>
</div>
        
      </div>


</div>

    </section>
  )
}
