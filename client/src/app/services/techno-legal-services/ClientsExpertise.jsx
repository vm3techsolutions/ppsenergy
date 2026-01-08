import React from 'react'

export default function ClientsExpertise() {
  const projects = [
    "Regulatory case filings",
    "Policy drafting and interpretation",
    "Compliance audits",
    "Techno-legal advisory services"
  ];

  return (
    <section className="common-section  py-12 px-4 text-center">
      <h3 className="title text-[#889F2D]">Clients & Experience</h3>
      <h2 className="center-section-heading">
        PPS has supported organizations such as MEDA, MERC, utilities, renewable energy developers,
        and corporate clients in India through:
      </h2>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white  rounded-lg
                       hover:shadow-[0_0_20px_#889F2D] transition
                       h-[85px] flex items-center justify-center"
          >
            <p className="text-[#7b0000] team-members-designation text-center">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
