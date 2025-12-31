"use client";
import React from "react";
import Image from "next/image";

export default function TypesEnergyAudit() {
  return (
    <section className="common-section bg-[#fcfcfc] px-4 sm:px-6 md:px-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
        <div>
          <h3 className="title text-[#889F2D]">Energy Audit</h3>
          <h2 className="dual-section-heading text-lg sm:text-xl md:text-2xl">
            Types of Energy Audit
          </h2>

          <div className="mt-5 space-y-5 text-[#3D3D3D] text-sm sm:text-base md:text-lg pt-5">

            <div>
              <h4 className="team-members-designation text-[#889F2D]">
                Zero Investment Energy Saving Solutions
              </h4>
              <p className="content-section">
                Operational improvements, good housekeeping practices, 
                switching off idle equipment, scheduling optimization and 
                maintenance-based energy conservation measures.
              </p>
            </div>

            <div>
              <h4 className="team-members-designation text-[#889F2D]">
                Low / Medium Cost Energy Solutions
              </h4>
              <p className="content-section">  
                LED lighting upgrades, power factor correction, VFDs, 
                insulation improvements, and energy-efficient motors 
                with short to medium payback periods.
              </p>
            </div>

            <div>
              <h4 className="team-members-designation text-[#889F2D]">
                Capital Investment Energy Solutions
              </h4>
              <p className="content-section">
                High-efficiency equipment replacement, waste heat recovery,
                renewable energy integration, automation systems, and 
                long-term energy performance improvement projects.
              </p>
            </div>

          </div>
        </div>

        {/* Image Section */}
        <Image
          src="/assets/services/energyAudit/EnergyAuditTypes.jpg"
          alt="Types of Energy Audit"
          width={650}
          height={550}
          className="w-full h-[420px] lg:h-[550px] object-cover rounded-[20px] shadow-lg border-b-12 border-[#889F2D]"
        />

      </div>
    </section>
  );
}
