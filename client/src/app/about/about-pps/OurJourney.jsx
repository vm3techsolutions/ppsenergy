import React from 'react'
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function OurJourney() {
  return (
    <section className='section-vertical-padding'>
        <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D]">Our Journey</h3>
        <h2 className="center-section-heading">Every milestone is a step towards a greener future
        </h2>
        </div>

{/* Journey Section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">

{/* Image  */}
      <div className='relative width-full h-[350px] md:h-[600px] sm:h-[400px] object-cover lg:mr-[30px]' >
        <Image
        width={260}
        height={205}
        src="/assets/aboutus/AboutUsOurJourney.png"
        alt="About Us"
        className="w-full h-[350px] lg:h-[850px] object-cover "/>
        </div>

{/* Text Area  */}
      <div className='flex flex-col  lg:pr-20  ml-2'>
         <div>
          <p className='content'>
           Our story began with a simple idea to transform how the world consumes energy. Over the years, we have evolved into a multifaceted energy services provider, bridging the gap between conventional power and renewable innovation. With a strong focus on energy efficiency, production efficiency, and process optimization, we help organizations enhance performance, reduce operational costs, and achieve sustainable growth.

<br/><br/>
          From our first energy audit project to large-scale solar installations, every step of our journey has been fueled by a vision of progress and sustainability. Today, we are proud to have delivered solutions that power industries, reduce emissions, and make energy more efficient.
          </p>
        </div>

        <h3 className="title text-[#889F2D] my-2.5 lg:my-[25px] ">Milestones at a Glance:</h3>

<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="bg-[#f7f7f7] rounded-r-[50px] flex items-center 
                  p-3 pr-[25px] my-3
                  w-full max-w-[620px] min-h-[72px]">
    <FaAngleDoubleRight className="text-[#7B0000] mr-3 text-xl shrink-0" />
    <h3 className="content-section text-[#7B0000] leading-snug">
      2009: Established as a consultancy firm focused on the energy and power sector.
    </h3>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="bg-[#f7f7f7] rounded-r-[50px] flex items-center 
                  p-3 pr-[25px] my-3
                  w-full max-w-[620px] min-h-[72px]">
    <FaAngleDoubleRight className="text-[#7B0000] mr-3 text-xl shrink-0" />
    <h3 className="content-section text-[#7B0000] leading-snug">
      2010: Secured major clients in energy auditing and power sector advisory services.
    </h3>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="bg-[#f7f7f7] rounded-r-[50px] flex items-center 
                  p-3 pr-[25px] my-3
                  w-full max-w-[620px] min-h-[72px]">
    <FaAngleDoubleRight className="text-[#7B0000] mr-3 text-xl shrink-0" />
    <h3 className="content-section text-[#7B0000] leading-snug">
     2015: Awarded primary data collection projects, strengthening analytical and field capabilities.
    </h3>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="bg-[#f7f7f7] rounded-r-[50px] flex items-center 
                  p-3 pr-[25px] my-3
                  w-full max-w-[620px] min-h-[72px]">
    <FaAngleDoubleRight className="text-[#7B0000] mr-3 text-xl shrink-0" />
    <h3 className="content-section text-[#7B0000] leading-snug">
    2020: Launched the Legal vertical to support regulatory, compliance, and techno-legal services.
    </h3>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="bg-[#f7f7f7] rounded-r-[50px] flex items-center 
                  p-3 pr-[25px] my-3
                  w-full max-w-[620px] min-h-[72px]">
    <FaAngleDoubleRight className="text-[#7B0000] mr-3 text-xl shrink-0" />
    <h3 className="content-section text-[#7B0000] leading-snug">
    2025: Expanded into solar energy and allied renewable energy projects.
    </h3>
  </div>
</motion.div>


        
      </div>


</div>

    </section>
  )
}
