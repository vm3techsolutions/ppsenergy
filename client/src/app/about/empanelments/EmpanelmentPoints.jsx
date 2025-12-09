"use client"
import React from 'react'

export default function EmpanelmentPoints() {
    const empanelments = [
    "Energy Efficiency Services Limited (EESL) – Pumping Audit",
    "Maharashtra Electricity Regulatory Commission (MERC)",
    "Odisha Electricity Regulatory Commission (OERC)",
    "Empanelled Energy Auditor Consultant – Chhattisgarh State Electricity Regulatory Commission (CSERC)",
    "Assam Electricity Regulatory Commission (AERC)",
    "Delhi Electricity Regulatory Commission (DERC)",
    "Empanelled Energy Auditor – Madhya Pradesh Urja Vikas Nigam Limited (MPUVNL)",
    "Empanelled Energy Auditor – Maharashtra Energy Development Agency (MEDA), Pune",
    "Empanelled Energy Auditor – Gujarat Energy Development Agency (GEDA), Ahmedabad",
    "Empanelled Energy Auditor – Sugar Commissioner, Govt. of Maharashtra",
    "Bureau of Energy Efficiency (BEE) – Accredited Energy Auditors (M&V of Steel, Cement, Fertilizers, DISCOMs, and Mandatory Energy Audits)",
    "National Power Training Institute, Faridabad",
    "Empanelled Energy Auditor – TATA Power, Mumbai",
    "APITCO – Andhra Pradesh Industrial & Technical Consultancy Organization, Hyderabad",
    "Lawrence Berkeley National Laboratory (LBNL), University of California",
    "Falcon Cement, Bahrain",
    "BANA Gas, Bahrain",
    "Camso Load Star, Negombo, Sri Lanka",
    "EDL, Laos PDR",
    "MAZOON Electricity, Muscat",
    "Stanford University",
    "Tokyo University",
    "Mahindra & Mahindra",
    "Pharmaceutical Industrial Cluster, Indore (MP)",
    "Bulk Drug Industrial Cluster, Nalgonda (AP)",
    "Electrical License Holder – Electrical installation verification & corrections",
    "Administrative Staff College of India (ASCI), Hyderabad",
    "Bharat Petroleum Corporation, Mumbai (Vendor No. 900 000)",
    "CYTEL Statistical Software, Pune",
    "D V Joshi & Associates – Architect Firm",
    "UHDE India Private Limited",
    "Meghraj Capital Advisor, Delhi",
    "D O Nikam – Architect Firm, Pune",
    "Shunya Consultant – Architect Firm, Akola",
    "SNC Lavalin, Mumbai",
    "Pune Power Development Pvt. Ltd. (PPDPL) – Power Trading & RECs",
    "Shyam Indus Power Solutions (SIPS), Delhi",
    "Greenko Pvt. Ltd., Hyderabad",
  ];

  return (
    <section className="common-section">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Empanelments</h3>

        <h2 className="center-section-heading">
          Recognitions & Associations
        </h2>

        <p className="mt-4 mb-10 content">
          PPS Energy Solutions is presently empaneled with various Government and Non-Government 
          organizations across India and overseas for providing services in the Energy and 
          Power sector. Our empanelments include regulatory commissions, research institutions, 
          energy development agencies, industries, and global power utilities.
        </p>
      </div>

      {/* Clean List */}
       <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-gray-700 text-lg leading-relaxed">
        {empanelments.map((item, i) => (
         <p key={i} className="flex items-start gap-3 relative">
  <span className="h-2 w-2 bg-[#889F2D] rounded-full mt-2 shrink-0"></span>
  <span className="block leading-normal bulletPoints">{item}</span>
</p>
        ))}
      </div>

    
    </section>
  );
}