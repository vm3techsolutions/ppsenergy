// import React from 'react'

// export default function AMIProjects() {
//     const projects = [
//     "AMI Project – Electricité du Laos",
//     "Smart Street Light Metering – Maharashtra",
//     "EV Charging Metering – TATA Power",
//     "Solar Generation Meter QC",
//     "Feeder Segregation – MSEDCL",
//   ];


//   return (
//      <section className="common-section bg-[#f8f8f8]">
//       <div>
//         <h2 className="center-section-heading text-center">
//           OUR ENERGY AUDIT EXPERTISE SPANS ACROSS
//         </h2>
//       </div>

//       <div className="mt-10">

//         {/* First Row (3 items) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center ">
//           {projects.slice(0, 3).map((item, index) => (
//             <div
//               key={index}
//               className="p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]"
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
//               className="w-full sm:w-[45%] lg:w-[30%] p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px] justify-items-center place-self-center"
//             >
//               <p className="text-[#7b0000] team-members-designation">{item}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }


import React from 'react'

export default function AMIProjects() {
  const projects = [
    "AMI Project – Electricité du Laos",
    "Smart Street Light Metering – Maharashtra",
    "EV Charging Metering – TATA Power",
    "Solar Generation Meter QC",
    "Feeder Segregation – MSEDCL",
  ];

  return (
    <section className="common-section bg-[#f8f8f8]">
      <h2 className="center-section-heading text-center">
        OUR ENERGY AUDIT EXPERTISE SPANS ACROSS
      </h2>

      <div className="mt-10">

        {/* First Row (3 items) */}
        <div className="flex justify-center gap-6 mt-6 text-center">
          {projects.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-lg border border-gray-200 
              hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]
              flex items-center justify-center"
            >
              <p className="text-[#7b0000] team-members-designation">{item}</p>
            </div>
          ))}
        </div>

        {/* Second Row (2 centered items) */}
        <div className="flex justify-center gap-6 mt-6 text-center">
          {projects.slice(3).map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] p-5 bg-white shadow-md rounded-lg border border-gray-200
              hover:shadow-[0_0_20px_#889F2D] transition lg:h-[85px]
              flex items-center justify-center"
            >
              <p className="text-[#7b0000] team-members-designation">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
