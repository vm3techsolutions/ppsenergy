// import React from 'react'

// export default function KeyProjects() {
//  const projects = [
//     "MERC – DPR Scrutiny Studies",
//     "DERC – Energy Audit of TPDDL",
//     "TSERC – Agricultural Consumption Studies",
//     "AERC – Revenue & Sales Audit (3 Circles)",
//     "SOP Audit FY 21–22 & FY 22–23",
//   ];

//   return (
//    <section className="common-section bg-[#f8f8f8]">
//       <h2 className="center-section-heading text-center">
//         OUR WORK WITH STATE ELECTRICITY REGULATORY COMISSIONS (SERCs)
//       </h2>

//       <div className="mt-10">

//         {/* First Row (3 items) */}
//         <div className="flex justify-center gap-6 mt-6 text-center">
//           {projects.slice(0, 3).map((item, index) => (
//             <div
//               key={index}
//               className="p-5 bg-white shadow-md rounded-lg border border-gray-200 
//               hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]
//               flex items-center justify-center"
//             >
//               <p className="text-[#7b0000] team-members-designation">{item}</p>
//             </div>
//           ))}
//         </div>

//         {/* Second Row (2 centered items) */}
//         <div className="flex justify-center gap-6 mt-6 text-center">
//           {projects.slice(3).map((item, index) => (
//             <div
//               key={index}
//               className="w-full sm:w-[45%] lg:w-[30%] p-5 bg-white shadow-md rounded-lg border border-gray-200
//               hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]
//               flex items-center justify-center"
//             >
//               <p className="text-[#7b0000] team-members-designation">{item}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
  
// }

import React from 'react'

export default function KeyProjects() {
  const projects = [
    "MERC – DPR Scrutiny Studies",
    "DERC – Energy Audit of TPDDL",
    "TSERC – Agricultural Consumption Studies",
    "AERC – Revenue & Sales Audit (3 Circles)",
    "SOP Audit FY 21–22 & FY 22–23",
  ];

  return (
    <section className="common-section bg-[#f8f8f8] py-12 px-4">
      <h2 className="center-section-heading text-center">
        OUR WORK WITH STATE ELECTRICITY REGULATORY COMISSIONS (SERCs)
      </h2>

      <div className="mt-10">

        {/* First Row (up to 3 items) */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-center">
          {projects.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-lg border border-gray-200 
              hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]
              flex items-center justify-center w-full sm:w-[45%] lg:w-[30%]"
            >
              <p className="text-[#7b0000] team-members-designation">{item}</p>
            </div>
          ))}
        </div>

        {/* Second Row (2 centered items) */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-center">
          {projects.slice(3).map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-lg border border-gray-200
              hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]
              flex items-center justify-center w-full sm:w-[45%] lg:w-[30%]"
            >
              <p className="text-[#7b0000] team-members-designation">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

