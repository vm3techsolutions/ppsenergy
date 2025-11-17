// "use client"
// import React from 'react'
// import Image from "next/image";


// export default function IndustriesMarketResearch() {
//      const industries = [
//     {
//       title: "Manufacturing & Engineering",
//       image: "/assets/services/energyAudit/ManufacturingAndIndustrialPlants.png",
//     },
//     {
//       title: "FMCG & Retail",
//       image: "/assets/services/energyAudit/CommercialBuildingsAndOffices.png",
//     },
//     {
//       title: "Energy & Utilities",
//       image: "/assets/services/energyAudit/HotelsAndHospitality.png",
//     },
//     {
//       title: "Education & Skill Development",
//       image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
//     },
//     {
//       title: "Government & Public Sector",
//       image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
//     },
//     {
//       title: "Healthcare & Pharmaceuticals",
//       image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
//     },
//     {
//       title: "Real Estate & Infrastructure",
//       image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
//     },
//     {
//       title: "IT & Technology",
//       image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
//     },
//   ];
//   return (
//      <section className="common-section  bg-[#F9FAFB]">
//                       <div className="text-center mb-10">
//                         <h3 className="title text-[#889F2D]">Industries We Serve</h3>
//                         <h2 className="center-section-heading"> SERVING DIVERSE SECTORS WITH CUSTOM SOLUTIONS</h2>
//                          <p className="content text-[#3D3D3D]">Our Market Research, Survey, and Training services cater to a wide range of industries, including:</p>
//                       </div>
            
//                       <div className="space-y-8 text-center text-[#ffffff]">
//               {/* First Row: 4 items */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {industries.slice(0, 4).map((item, index) => (
//                   <div
//                     key={index}
//                     className="border border-[#889F2D] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.3)] group overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_15px_#889F2D]"
//                   >
//                     <div className="overflow-hidden h-[300px] sm:h-[280px] md:h-[300px]">
//                       <Image
//                         width={400}
//                         height={300}
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover p-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
//                       />
//                     </div>
//                     <div className="p-2 bg-[#7B0000] grow flex items-center justify-center">
//                       <h3 className="content">{item.title}</h3>
//                     </div>
//                   </div>
//                 ))}
//               </div>
            
//               {/* Second Row: 3 items centered */}
//               <div className="flex justify-center gap-8 flex-wrap">
//                 {industries.slice(4).map((item, index) => (
//                   <div
//                     key={index}
//                     className="border border-[#889F2D] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.3)] group overflow-hidden flex flex-col w-full sm:w-[45%] lg:w-[23%] transition-all duration-300 hover:shadow-[0_0_15px_#889F2D]"
//                   >
//                     <div className="overflow-hidden h-[300px] sm:h-[280px] md:h-[300px]">
//                       <Image
//                         width={400}
//                         height={300}
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover p-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
//                       />
//                     </div>
//                     <div className="p-2 bg-[#7B0000] grow flex items-center justify-center">
//                       <h3 className="content">{item.title}</h3>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//                     </section>
//   )
// }


"use client"
import React from 'react'
import Image from "next/image";

export default function IndustriesMarketResearch() {
  const industries = [
    { title: "Manufacturing & Engineering", image: "/assets/services/energyAudit/ManufacturingAndIndustrialPlants.png" },
    { title: "FMCG & Retail", image: "/assets/services/energyAudit/CommercialBuildingsAndOffices.png" },
    { title: "Energy & Utilities", image: "/assets/services/energyAudit/HotelsAndHospitality.png" },
    { title: "Education & Skill Development", image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png" },
    { title: "Government & Public Sector", image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png" },
    { title: "Healthcare & Pharmaceuticals", image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png" },
    { title: "Real Estate & Infrastructure", image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png" },
    { title: "IT & Technology", image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png" },
  ];

  return (
    <section className="common-section bg-[#F9FAFB]">
      
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Industries We Serve</h3>
        <h2 className="center-section-heading">SERVING DIVERSE SECTORS WITH CUSTOM SOLUTIONS</h2>
        <p className="content text-[#3D3D3D]">
          Our Market Research, Survey, and Training services cater to a wide range of industries, including:
        </p>
      </div>

      {/* ALL 8 ITEMS IN ONE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {industries.map((item) => (
          <div
            key={item.title}
            className="border border-[#889F2D] rounded-[10px] shadow group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_#889F2D]"  >
            <div className="overflow-hidden h-[300px]">
              <Image
                width={400}
                height={300}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover p-2 transition-transform duration-300 group-hover:scale-110"/>
            </div>
        
        <div className="p-2 bg-[#7B0000] grow flex items-center justify-center">
              <h3 className="content text-[#ffffff]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
