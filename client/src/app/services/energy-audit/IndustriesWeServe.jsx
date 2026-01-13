import React from "react";
import Image from "next/image";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Manufacturing & Industrial Plants",
      image: "/assets/services/energyAudit/ManufacturingAndIndustrialPlants.png",
    },
    {
      title: "Commercial Buildings & Offices",
      image: "/assets/services/energyAudit/CommercialBuildingsAndOffices.png",
    },
    {
      title: "Hotels & Hospitality",
      image: "/assets/services/energyAudit/HotelsAndHospitality.png",
    },
    {
      title: "Hospitals & Healthcare Facilities",
      image: "/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png",
    },
    {
      
      title: "Railways",
      image: "/assets/services/energyAudit/RailwaysEnergyAudit.jpg",
    },
    {
      title: "Airports",
      image: "/assets/services/energyAudit/AirportsEnergyAudit.jpg",
    },
    {
      title: "Small & Medium Enterprises (SME)",
      image: "/assets/services/energyAudit/SMEEnergyAudit.jpg",
    },
    {
      title: "water pumping stations and corporation streetlights",
      image: "/assets/services/energyAudit/StreetLightandPumpingEnergyAudit.jpg",
    },
  ];

  return (
    <section className="common-section  ">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Clients We Serve</h3>
        <h2 className="center-section-heading">Our energy audit expertise spans across</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-[#ffffff]">
        {industries.map((item, index) => (
          <div
            key={index}
           className="border border-[#889F2D] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.3)] group overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_15px_#889F2D]"
          >
            <div className="overflow-hidden h-[300px] sm:h-[280px] md:h-[300px]">
              <Image
                width={400}
                height={300}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover p-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-2 bg-[#7B0000] grow flex items-center justify-center">
              <h3 className="content">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
