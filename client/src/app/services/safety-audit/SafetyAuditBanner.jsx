import React from 'react'
import Image from 'next/image'

export default function SafetyAuditBanner() {
  return (
     <section className=" relative h-[500px] md:h-[600px] sm:h-[400px] lg:h-[600px] flex items-start bg-cover bg-center justify-center lg:pt-[120px] pt-[60px]"
      style={{ backgroundImage: "url('/assets/services/energyAudit/EnergyAuditBanner.png')" }}
    >
     

      {/* Content */}
      <div className="section relative z-10 lg:max-w-6xl px-6 sm:px-4 lg:px-8 text-center">
        <h2 className="heading text-[#7B0000] lg:pb-6 sm:pb-4">ENSURING SAFETY. ENHANCING PERFORMANCE.</h2>
        <h3 className='text-center title mt-5'>Comprehensive Safety Audits designed to identify risks, improve workplace safety, and ensure compliance with statutory norms.</h3>

   
{/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mt-12 mt-6 mx-auto place-items-center">
          <button className="button">
            Request a Safety Audit
          </button>
          <button className="buttonService">
            Talk to Our Experts
          </button>
        </div> */}
        <div className="flex justify-center items-center gap-4 lg:mt-12 mt-6">
  <button className="button">
    Request a Safety Audit
  </button>
  {/* <button className="buttonService">
    Talk to Our Experts
  </button> */}
</div>
            </div>

      
    </section>
  )
}


// import React from 'react'
// import Image from 'next/image'

// export default function SafetyAuditBanner() {
//   return (
//     <section
//       className="relative h-[450px] sm:h-[300px] md:h-[600px] lg:h-[600px] flex items-start justify-center bg-cover bg-center pt-[120px]"
//       style={{ backgroundImage: "url('/assets/services/energyAudit/EnergyAuditBanner.png')" }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl px-6 sm:px-4 md:px-8 text-center text-white">
//         <h2 className="text-[#7B0000] font-bold text-3xl md:text-4xl pb-6 sm:pb-4">
//           ENSURING SAFETY. ENHANCING PERFORMANCE.
//         </h2>
//         <h3 className="text-lg md:text-xl mb-8">
//           Comprehensive Safety Audits designed to identify risks, improve workplace safety, and ensure compliance with statutory norms.
//         </h3>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl transition">
//             Request a Safety Audit
//           </button>
//           <button className="bg-transparent border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-2xl transition">
//             Talk to Our Experts
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }
