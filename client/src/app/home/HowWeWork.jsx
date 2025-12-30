"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HowWeWork() {
  return (
  <section className='flex flex-col justify-center pt-[50px] pb-[50px]'>
    <div className="text-center mb-10">
    <h3 className="title text-[#889F2D]">How We Work</h3>
    <h2 className="center-section-heading">A proven approach to deliver efficiency <br/>and sustainability</h2>
    <p className="content text-[#3D3D3D]">PPS Energy's structured, transparent, and impact-driven approach </p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  '>
      <Image
      width={600}
      height={574}
      src="/assets/home/HowWeWork.png"
      alt="About Us"
      className="w-[700px] h-[300px] lg:h-[600px]  rounded-r-[20px] shadow-lg object-cover opacity-100 "/>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:ml-[50px] mt-5 ml-2 mr-2'>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>

    <div className="flex items-center mb-7">
    <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">01</span>
    <h2 className="title">Understanding Your Needs</h2>
    </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>

    <div className='flex  items-center mb-7'>
    <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">02</span>
    <h2 className='title' >Energy Assessment & Audit</h2>
    </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>

    <div className='flex items-center mb-7'>
    <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">03</span>
    <h2 className='title '>Tailored Solutions Design</h2>
    </div>
    </motion.div>

    <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}>

    <div className='flex items-center mb-7'>
    <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">04</span>
    <h2 className='title '>Implementation With Precision</h2>
    </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}>

    <div className='flex items-center mb-7'>
    <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">05</span>
    <h2 className='title'>Monitoring & Optimization</h2>
    </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}>

    <div className='flex items-center mb-7'>
    <span className=" border-2 border-[#889F2D]-700 mr-8 w-[60px] h-[60px] flex items-center justify-center text-[#889F2D] text-[30px] lg:text-[40px] p-3 ">06</span>
    <h2 className='title'>Sustained Partnership</h2>
    </div>
    </motion.div>
    </div>
    </div>
    </section>
  )
}


// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function HowWeWork() {
//   const steps = [
//     "Understanding Your Needs",
//     "Energy Assessment & Audit",
//     "Tailored Solutions Design",
//     "Implementation With Precision",
//     "Monitoring & Optimization",
//     "Sustained Partnership",
//   ];

//   return (
//     <section className="flex flex-col justify-center py-12 lg:px-0 px-4">
//       {/* Section Header */}
//       <div className="text-center mb-10">
//         <h3 className="title text-[#889F2D]">
//           How We Work
//         </h3>
//         <h2 className="center-section-heading">
//           A PROVEN APPROACH TO DELIVER EFFICIENCY <br className="hidden sm:block" />
//           AND SUSTAINABILITY
//         </h2>
//         <p className="content text-[#3D3D3D]">
//           PPS Energy’s structured, transparent, and impact-driven approach
//         </p>
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Image */}
//         <div className="">
//           <Image
//             width={700}
//             height={600}
//             src="/assets/home/HowWeWork.png"
//             alt="About Us"
//             className="w-[700px] h-[300px] lg:h-[600px]  rounded-r-[20px] shadow-lg object-cover opacity-100"
//           />
//         </div>

//         {/* Steps */}
//         <div className="flex flex-col space-y-6 sm:space-y-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 + index * 0.2 }}
//               viewport={{ once: true }}
//               className="flex items-center"
//             >
//               <span className="border-2 border-[#889F2D] mr-5 w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] flex items-center justify-center text-[#889F2D] text-[28px] sm:text-[32px] font-semibold">
//                 {(index + 1).toString().padStart(2, "0")}
//               </span>
//               <h2 className="title">
//                 {step}
//               </h2>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
