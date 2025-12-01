// import React from 'react'

// export default function ProjectImpact() {
//   return (
//     <section className='common-section'>
//          <div className="mb-10 text-center">
//         <h3 className="title text-[#889F2D] mb-5">Project Impact</h3>
//         <p className="content text-[#3D3D3D]">
//           Through strategic energy optimization and renewable integration, we delivered measurable results that exceeded expectations.
//         </p>
//       </div>

//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left lg:justify-items-center'>

//             <div className=' p-6 rounded-[10px]  border border-[#E0E0E0]'>
//                 <h3 className='p-2  border border-[#E0E0E0] w-10 text-center process-bullet-section-desc'>1</h3>
//                 <h2 className='my-2 process-bullet-section-heading text-[#7B0000]'>42%</h2>
//                 <p className='process-bullet-section-desc'>Quantification 1</p>
//             </div>

//             <div>
//                 <h3>2</h3>
//                 <h2>42%</h2>
//                 <p>Quantification 2</p>
//             </div>

//             <div>
//                 <h3>3</h3>
//                 <h2>42%</h2>
//                 <p>Quantification 3</p>
//             </div>

//             <div>
//                 <h3>4</h3>
//                 <h2>42%</h2>
//                 <p>Quantification 4</p>
//             </div>

//         </div>
//     </section>
//   )
// }


"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectImpact() {
  const stats = [
    { id: 1, value: "42%", label: "Quantification 1" },
    { id: 2, value: "42%", label: "Quantification 2" },
    { id: 3, value: "42%", label: "Quantification 3" },
    { id: 4, value: "42%", label: "Quantification 4" },
  ];

  return (
    <section className="common-section px-4 sm:px-8 lg:px-20">
      {/* Title */}
      <div className="mb-10 text-center ">
        <h3 className="title text-[#889F2D] mb-5">Project Impact</h3>
        <p className="content text-[#3D3D3D]">
          Through strategic energy optimization and renewable integration, we delivered measurable results that exceeded expectations.
        </p>
      </div>

      {/* Stats Grid */}
       <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {stats.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-[10px] border border-[#E0E0E0] shadow-sm bg-white group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
          >
            {/* Number Badge */}
            <div className="p-2 border border-[#E0E0E0] w-13 text-center rounded-md process-bullet-section-desc">
              {item.id}
            </div>

            {/* Value */}
            <h2 className="mt-8 text-3xl font-semibold text-[#7B0000] process-bullet-section-heading">
              {item.value}
            </h2>

            {/* Label */}
            <p className="mt-2 process-bullet-section-desc text-[#3D3D3D]">
              {item.label}
            </p>
          </div>
          
        ))}
      </div>
      </motion.div>
    </section>
  );
}

