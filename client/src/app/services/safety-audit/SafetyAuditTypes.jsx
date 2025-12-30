// "use client";
// import { useState } from "react";
// import { Flame, Zap, HardHat, ClipboardCheck, Building2, Users } from "lucide-react";

// export default function SafetyAuditTypes() {

//      const audits = [
//     { title: "Comprehensive Safety Audit", icon: ClipboardCheck, desc: "Full-scale review covering processes, equipment, workforce safety, and compliance." },
//     { title: "Fire Safety Audit", icon: Flame, desc: "Evaluation of fire detection, suppression systems, evacuation procedures, and readiness." },
//     { title: "Electrical Safety Audit", icon: Zap, desc: "Assessment of electrical installations, grounding, and load management." },
//     { title: "Process Safety Audit", icon: HardHat, desc: "Focused on high-risk industrial operations and process safety management systems." },
//     { title: "Construction Safety Audit", icon: Building2, desc: "On-site evaluation of construction safety protocols, scaffolding, PPE use, and hazard control." },
//     { title: "Behavioral Safety Audit", icon: Users, desc: "Observation-based analysis to improve worker awareness, attitude, and response toward safety practices." },
//   ];

//   const [active, setActive] = useState(0);

//   return (
//    <section className="flex flex-col justify-center pt-[50px] pb-[50px] bg-[#F9FAFB]">
//       <div className="text-center mb-10">

//         <h2 className="center-section-heading">Types of Safety Audits We Conduct</h2>
//       </div>

//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 px-6">
//         {/* Tabs */}
//         <div className="flex lg:flex-col flex-wrap justify-center gap-4 lg:w-1/3">
//           {audits.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = index === active;
//             return (
//               <button
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
//                   isActive ? "bg-[#7B0000] text-white border-[#7B0000]" : "bg-white border-gray-300 hover:border-[#889F2D]"
//                 }`}
//               >
//                 <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#889F2D]"}`} />
//                 <span className="content text-left">{item.title}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Content */}
//         <div className="bg-white shadow-lg p-8 rounded-2xl lg:w-2/3 border-l-4 border-[#889F2D] transition-all duration-300">
//           <h3 className="dual-section-heading text-[#7B0000] mb-4">{audits[active].title}</h3>
//           <p className="content">{audits[active].desc}</p>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client";
import { Flame, Zap, HardHat, ClipboardCheck, Building2, Users } from "lucide-react";

export default function SafetyAuditTypes() {
  const audits = [
    { title: "Comprehensive Safety Audit", icon: ClipboardCheck, desc: "Full-scale review covering processes, equipment, workforce safety, and compliance." },
    { title: "Fire Safety Audit", icon: Flame, desc: "Evaluation of fire detection, suppression systems, evacuation procedures, and readiness." },
    { title: "Electrical Safety Audit", icon: Zap, desc: "Assessment of electrical installations, grounding, and load management." },
    { title: "Process Safety Audit", icon: HardHat, desc: "Focused on high-risk industrial operations and process safety management systems." },
    { title: "Construction Safety Audit", icon: Building2, desc: "On-site evaluation of construction safety protocols, scaffolding, PPE use, and hazard control." },
    { title: "Behavioral Safety Audit", icon: Users, desc: "Observation-based analysis to improve worker awareness, attitude, and response toward safety practices." },
  ];

  return (
    <section className="flex flex-col justify-center pt-[50px] pb-[50px] bg-[#F9FAFB]">
      <div className="text-center mb-12">
        <h3 className="title text-[#889F2D] uppercase">Types of Safety Audits</h3>
         <h2 className="center-section-heading">Types of Safety Audits we conduct</h2>
        <p className="content text-[#3D3D3D] max-w-3xl mx-auto mt-4">
          Our expert auditors perform a range of specialized safety audits designed to ensure compliance, reliability, and workplace safety across industries.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {audits.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#889F2D] hover:border-[#889F2D] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-[#889F2D]/10 p-4 rounded-full group-hover:bg-[#7B0000]/10 transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-[#7B0000] transition-transform duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <h3 className="contact-heading text-[#7B0000]">{item.title}</h3>
                <p className="content-section text-[#3D3D3D] ">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

