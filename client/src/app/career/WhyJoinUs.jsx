"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhyJoinUs() {
  return (
      <section className='common-section '>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Why Join Us</h3>
        <h2 className="center-section-heading">Build Your Career in Energy Efficiency and Sustainability</h2>
      </div>
      
<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-25   ">


{/* Left Image Section */}
    <div className="relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden">
          <Image
            src="/assets/career/WhyJoinUs.jpg"
            alt="Professional working on laptop"
            width={500}
            height={400}
            className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[10px] rounded-tr-[40px] rounded-br-[120px] shadow-lg object-cover border-b-[15px] border-r-[15px] border-[#889f2d] "/>
        </div>
    </div>

 {/* 1. Right Section */}
        <div className='lg:mr-[80px] flex flex-col justify-items-start rounded-l-[40px] rounded-[10px] items-start p-4 w-full'>

        <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='w-full'>
         <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-4 lg:mb-4 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>01</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >Lorem Ipsum</h2>
        </div>
        </motion.div>

         <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8}}
                  className='w-full'>
                    
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-4 lg:mb-4 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>02</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px] ' >Lorem Ipsum</h2>
        </div>
        </motion.div>

         <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className='w-full'>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-4 lg:mb-4 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>03</span>
        <h2 className='title lg:ml-[-225px] ml-[-100px]' >Lorem Ipsum</h2>
        </div>
        </motion.div>

         <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className='w-full'>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center  bg-[#f7f7f7] rounded-l-[120px] rounded-[10px] p-2 py-4 lg:mb-4 my-3'>
        <span className='w-[35px] h-[35px] mr-5 flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 '>04</span>
        <h2 className='title  lg:ml-[-225px] ml-[-100px]' >Lorem Ipsum</h2>
        </div>
        </motion.div>


        </div> 
        
    </div>
    </section>
  )
}




// "use client"

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function WhyJoinUs() {
//   const reasons = ["Lorem Ipsushdjsgfgsyjdgsygs hgsyfgyusfy  sfhgyustfdyu m", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

//   return (
//     <section className='common-section'>
//       <div className="text-center mb-10">
//         <h3 className="title text-[#889F2D]">Why Join Us</h3>
//         <h2 className="center-section-heading">
//           Build Your Career in Energy Efficiency and Sustainability
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
//         {/* Left Image */}
//         <div className="relative w-full">
//           <div className="relative rounded-[2rem] overflow-hidden">
//             <Image
//               src="/assets/career/WhyJoinUs.jpg"
//               alt="Professional working on laptop"
//               width={500}
//               height={400}
//               className="w-full h-[350px] lg:h-[450px] rounded-bl-[10px] rounded-tr-[40px] rounded-br-[120px] shadow-lg object-cover border-b-[15px] border-r-[15px] border-[#889f2d]"/>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className='flex flex-col justify-start p-4 w-full'>
//           {reasons.map((text, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 + i * 0.2 }} >
//               <div className='flex items-center bg-[#f7f7f7] rounded-l-[120px] p-4 mb-5'>
//                 <span className='w-[35px] h-[35px]  flex items-center justify-center content p-2 rounded-full  bg-[#889F2D] text-white ml-2 mr-4'>
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <h2 className='title'>{text}</h2>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
