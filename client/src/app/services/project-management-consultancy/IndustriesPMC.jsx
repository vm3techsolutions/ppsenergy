"use client"
import React from 'react'
import Image from "next/image";

export default function IndustriesPMC() {
         const industries = [
    {
      title: "Infrastructure & Construction",
      image: "/assets/services/energyAudit/ManufacturingAndIndustrialPlants.png",
    },
    {
      title: "Power & Energy",
      image: "/assets/services/energyAudit/CommercialBuildingsAndOffices.png",
    },
    {
      title: "Oil & Gas",
      image: "/assets/services/energyAudit/HotelsAndHospitality.png",
    },
    {
      title: "Manufacturing & Industrial Plants",
      image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
    },
    {
      title: "Water & Wastewater Projects",
      image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
    },
    {
      title: "Commercial & Residential Complexes",
      image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
    },
    {
      title: "Transportation & Logistics Hubs",
      image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
    },
    {
      title: "Government & Public Sector Projects",
      image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
    },
  ];

  return (
       <section className="common-section  bg-[#F9FAFB]">
                          <div className="text-center mb-10">
                            <h3 className="title text-[#889F2D]">Industries We Serve</h3>
                            <h2 className="center-section-heading"> TRUSTED PMC EXPERTISE ACROSS SECTORS</h2>
                             <p className="content text-[#3D3D3D]">We provide Project Management Consultancy services to a wide range of industries, including:</p>
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
  )
}
