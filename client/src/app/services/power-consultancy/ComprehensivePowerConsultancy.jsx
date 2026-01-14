// "use client"
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { CheckCircle } from "lucide-react";

// export default function ComprehensivePowerConsultancy() {
//   return (
//   <section className='common-section'>
//     <div className="text-center mb-10">
//       <h2 className="center-section-heading text-center ">Comprehensive power consultancy for sustainable growth</h2>
//     </div>

       
//       <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* LEFT COLUMN - TEXT */}
//  <div>
//       {/* Description */}
//           <p className="content text-[#3D3D3D]  text-left ">

//             At <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span>, we specialize in delivering end-to-end power consultancy solutions designed to help industries, businesses, and infrastructure projects optimize their energy systems

//             <br /><br />
//             Power consultancy helps in planning electrical systems, reducing energy expenses, avoiding power failures, and ensuring safe and smooth operation of power distribution systems

//             <br /><br />
//             We help DISCOMs, TRANSCOMs, and GENCOs improve energy efficiency and operations with our reliable and effective energy solutions. 
//           </p>


//               {/* Highlights */}
//           <ul className="space-y-3 content text-[#3D3D3D]  mt-4">
//             {[
//               "Tailored solutions for industrial, commercial, and institutional clients",
//               "Expertise in renewable and conventional power systems",
//               "Proven track record in energy cost optimization and compliance",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-3">
//                 <CheckCircle className="text-[#889F2D] w-5 h-5 mt-1 shrink-0" />
//                 <span className="text-gray-800">{item}</span>
//               </li>
//             ))}
//           </ul>

//  </div>
       

//         {/* RIGHT COLUMN - IMAGE */}
        
//           <Image
//                     width={678}
//                     height={574}
//                     src="/assets/services/powerConsultancy/powerConsultancyInfo.jpeg"
//                     alt="About Us"
//                     className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
//       </div>
//     </section>
//   )
// }



"use client";
import React from 'react';
import { CheckCircle } from "lucide-react";

export default function ComprehensivePowerConsultancy() {
  return (
    <section className='common-section'>
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="center-section-heading">
          Comprehensive power consultancy for sustainable growth
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto">
        
        {/* Description */}
        <p className="content text-[#3D3D3D] text-left leading-relaxed">
          At <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span>, 
          we specialize in delivering end-to-end power consultancy solutions designed 
          to help industries, businesses, and infrastructure projects optimize 
          their energy systems.
          <br /><br />
          Power consultancy ensures proper planning of electrical systems, reduces energy 
          expenses, avoids power failures, and guarantees smooth and safe operation of 
          power distribution networks.
          <br /><br />
          We help DISCOMs, TRANSCOMs, and GENCOs improve energy efficiency and overall 
          operational reliability with our technically sound and proven methodologies.
        </p>

        {/* Bullet List */}
        <ul className="space-y-4 mt-8">
          {[
            "Tailored solutions for industrial, commercial, and institutional clients",
            "Expertise in renewable and conventional power systems",
            "Proven track record in energy cost optimization and compliance",
            "End-to-end support from planning to implementation and monitoring",
            "Improved reliability, efficiency, and power quality",
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-[#889F2D] w-6 h-6 mt-1" />
              <span className="text-gray-800 text-lg">{item}</span>
            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}
