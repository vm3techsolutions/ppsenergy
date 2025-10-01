// "use client"
// import React from 'react'
// import Image from 'next/image';
// import Link from "next/link";

// export default function AboutUsSecond() {
//   return (
//     <section className='common-section flex justify-center '>


//       <div className='flex flex-col justify-center w-1/2'>

//         <div className='text-center mr-[20px] pr-[20px]'>
//             <h3 className="title text-[#889F2D]">About Us</h3>
//             <h2 className="dual-section-heading">Welcome to PPS Energy Solutions</h2>
//             <p className="content text-[#3D3D3D] pt-3 text-left">
//             We, PPS Energy Solutions Private Limited (PPSES) Pune are the strategic organization especially formulated for serving Energy and Power sectors, with proven experience of 3 Million Hours in power regulatory, Energy Audit, MEP, Research and Training in India and abroad.<br/><br/>
//             We are one of the accredited and empanelled energy auditing firms, engaged in Mandatory Energy Audit (MEA) and Measurement & Verification (M&V) under BEE (PAT) Scheme.<br/><br/>
//             Our team comprises of Accredited Energy Auditors, Certified Energy Auditors/Manager, Sector Experts, Safety auditors, Distribution and Transmission experts with rich consulting experiences. This makes us one of the most preferred advisory Organization in Energy and Power sector.
//             </p>
//         </div>


//         <div>
//           <Link href="/home">
//           <button
//             className="
//               button 
//               text-base sm:text-sm md:text-base 
//               px-8 sm:px-5 py-3 sm:py-2 mt-10 
//               rounded-lg shadow-md 
//               hover:bg-green-600 transition
//             "
//           >Know More
//           </button>
//           </Link>
//         </div>
//         </div>

//        <div className="pl-[20px]">
//   <Image
//     width={678}
//     height={574}
//     src="/assets/home/HomeAboutUs.png"
//     alt="About Us"
//     className="w-[678px] h-[574px] rounded-[20px] shadow-lg object-cover opacity-100"
//   />
// </div>



//     </section>
//   )
// }

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsSecond() {
  return (
    <section className="common-section flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-16">

      {/* Text Section */}
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="text-center md:text-left">
          <h3 className="title text-[#889F2D] text-base sm:text-lg md:text-xl text-center">About Us</h3>
          <h2 className="dual-section-heading text-lg sm:text-xl md:text-2xl text-center mb-6">
            Welcome to PPS Energy Solutions
          </h2>
          <p className="content text-[#3D3D3D]  text-left text-sm sm:text-base md:text-lg">
            We, PPS Energy Solutions Private Limited (PPSES) Pune are the strategic organization especially formulated for serving Energy and Power sectors, with proven experience of 3 Million Hours in power regulatory, Energy Audit, MEP, Research and Training in India and abroad.<br/><br/>
            We are one of the accredited and empanelled energy auditing firms, engaged in Mandatory Energy Audit (MEA) and Measurement & Verification (M&V) under BEE (PAT) Scheme.<br/><br/>
            Our team comprises of Accredited Energy Auditors, Certified Energy Auditors/Manager, Sector Experts, Safety auditors, Distribution and Transmission experts with rich consulting experiences. This makes us one of the most preferred advisory Organization in Energy and Power sector.
          </p>
        </div>

        <div>
          <Link href="/home">
            <button className="button text-base sm:text-sm md:text-base px-8 sm:px-5 py-3 sm:py-2 mt-10 rounded-lg shadow-md hover:bg-green-600 transition">
              Know More
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          width={678}
          height={574}
          src="/assets/home/HomeAboutUs.png"
          alt="About Us"
          className="w-full max-w-md md:max-w-full h-[600px] rounded-[20px] shadow-lg object-cover"
        />
      </div>

    </section>
  );
}

