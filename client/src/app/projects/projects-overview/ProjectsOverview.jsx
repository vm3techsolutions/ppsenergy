// // // import React from 'react'

// // // export default function ProjectsOverview() {
// // //   return (
// // //     <>
// // //     <section className="bg-gray-100 py-20 text-center">
// // //   <h1 className="text-4xl font-bold text-[#7B0000]">Projects & Expertise</h1>
// // //   <p className="text-gray-600 max-w-2xl mx-auto mt-4">
// // //     Our projects span diverse energy domains including renewable systems, smart grid modernization, efficiency audits, and regulatory compliance — delivering measurable impact.
// // //   </p>
// // // </section>
// // // <section className="py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// // //   {[
// // //     "Energy Audit Projects",
// // //     "Smart Grid & AMI Deployments",
// // //     "Power System Optimization",
// // //     "Regulatory Assignments",
// // //     "Renewable Energy Systems",
// // //     "Industrial & Utility Consulting"
// // //   ].map((item, i) => (
// // //     <div key={i} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
// // //       <h3 className="text-xl font-semibold text-[#7B0000]">{item}</h3>
// // //       <p className="text-gray-600 mt-2">View related case studies & credentials.</p>
// // //     </div>
// // //   ))}
// // // </section>

// // // <section className="py-20 text-center bg-gray-50">
// // //   <h1 className="text-4xl font-bold text-[#7B0000]">Power Distribution Consulting</h1>
// // //   <p className="text-gray-600 max-w-3xl mx-auto mt-4">
// // //     We support DISCOMs and industrial networks through assessment, benchmarking, modernization strategy, and operational improvement.
// // //   </p>
// // // </section>

// // // <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
// // //   {[
// // //     "Load Flow & Network Analysis",
// // //     "Loss Reduction Strategy",
// // //     "Substation & Feeder Optimization",
// // //     "SCADA & Grid Automation Advisory",
// // //     "Distribution Master Planning"
// // //   ].map((x, i) => (
// // //     <div key={i} className="p-6 border rounded-xl shadow hover:shadow-md transition">
// // //       <h3 className="font-semibold text-[#7B0000] text-lg">{x}</h3>
// // //     </div>
// // //   ))}
// // // </section>

// // // <section className="bg-gray-100 text-center py-20">
// // //   <h1 className="text-4xl font-bold text-[#7B0000]">Regulatory Advisory & Compliance</h1>
// // //   <p className="max-w-3xl mx-auto text-gray-600 mt-4">
// // //     Trusted by government bodies and utilities: tariff advisory, petitions, M&V, and compliance audits.
// // //   </p>
// // // </section>

// // // <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-10">
// // //   {[
// // //     "Tariff Petitions & Submissions",
// // //     "Energy Efficiency Compliance (PAT/BEE)",
// // //     "Regulatory Audits & Validation",
// // //     "Training for Regulatory Frameworks",
// // //     "Standards Documentation & Filing Support"
// // //   ].map((item, i) => (
// // //     <div key={i} className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
// // //       <h3 className="text-[#7B0000] font-semibold">{item}</h3>
// // //     </div>
// // //   ))}
// // // </section>

// // //     </>
// // //   )
// // // }


// // "use client";
// // import Image from "next/image";
// // import { useState } from "react";
// // import { FaSolarPanel, FaBolt, FaNetworkWired, FaRegClipboard } from "react-icons/fa";

// // export default function ProjectsPage() {

// //   const [activeTab, setActiveTab] = useState("power");

// //   const categories = [
// //     { id: "power", title: "Power Distribution", icon: <FaBolt size={22} /> },
// //     { id: "regulatory", title: "Regulatory Consulting", icon: <FaRegClipboard size={22} /> },
// //     { id: "smartgrid", title: "AMI / Smart Grid", icon: <FaNetworkWired size={22} /> },
// //     { id: "solar", title: "Solar & Renewable", icon: <FaSolarPanel size={22} /> },
// //   ];

// //   return (
// //     <div className="w-full text-gray-800">
      
// //       {/* Hero Section */}
// //       <section className="relative h-[50vh] w-full">
// //         <Image 
// //           src="/images/projects-hero.jpg"
// //           alt="Projects Hero"
// //           fill
// //           className="object-cover brightness-75"
// //         />
// //         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
// //           <h1 className="text-4xl md:text-6xl font-bold">Projects & Capabilities</h1>
// //           <p className="mt-3 text-lg md:text-xl max-w-2xl">
// //             Engineering, Smart Power Systems & Future-Ready Energy Solutions
// //           </p>

// //           <div className="mt-6 flex gap-4">
// //             <button className="px-6 py-2 bg-[#889F2D] hover:bg-[#6c7c1f] transition rounded-full">
// //               View Case Studies
// //             </button>
// //             <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition rounded-full">
// //               Schedule Consultation
// //             </button>
// //           </div>
// //         </div>
// //       </section>


// //       {/* Overview Section */}
// //       <section className="max-w-6xl mx-auto py-16 px-6">
// //         <h2 className="text-3xl font-bold text-[#7b0000]">Overview</h2>
// //         <p className="mt-4 text-lg leading-relaxed">
// //           PPS Energy Solutions has successfully executed power and energy 
// //           optimization projects globally, offering complete lifecycle services including feasibility 
// //           studies, energy auditing, regulatory advisory, smart metering solutions, EPC support, 
// //           and technology validation.
// //         </p>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
// //           {[
// //             { label: "Industrial Projects", value: "120+" },
// //             { label: "Power Distribution", value: "30+" },
// //             { label: "Countries Served", value: "7+" },
// //             { label: "Audits & Compliance", value: "20+" },
// //           ].map((item, i) => (
// //             <div key={i} className="text-center p-4 border rounded-xl shadow hover:scale-105 transition">
// //               <p className="text-3xl font-bold text-[#889F2D]">{item.value}</p>
// //               <p className="mt-1 font-medium">{item.label}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>


// //       {/* Category Tabs */}
// //       <section className="bg-gray-100 py-16 px-6">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-3xl font-bold text-[#7b0000] text-center">Project Categories</h2>
// //           <p className="text-center mt-2 max-w-3xl mx-auto">
// //             Explore the specialization areas where PPS Energy delivers excellence.
// //           </p>

// //           <div className="flex flex-wrap justify-center gap-4 mt-10">
// //             {categories.map(cat => (
// //               <button
// //                 key={cat.id}
// //                 onClick={() => setActiveTab(cat.id)}
// //                 className={`flex items-center gap-2 px-6 py-3 border rounded-full transition text-lg 
// //                 ${activeTab === cat.id ? "bg-[#889F2D] text-white" : "hover:bg-white hover:shadow"}`}>
// //                 {cat.icon} {cat.title}
// //               </button>
// //             ))}
// //           </div>


// //           {/* Dynamic content placeholder */}
// //           <div className="mt-10 p-6 bg-white rounded-xl shadow">
// //             <h3 className="text-xl font-semibold">
// //               {categories.find(c => c.id === activeTab)?.title}
// //             </h3>
// //             <p className="mt-3 text-gray-600">
// //               Detailed project description will appear here based on selected category.
// //               (We will fill this content next based on your actual project portfolio.)
// //             </p>
// //           </div>
// //         </div>
// //       </section>


// //       {/* CTA Footer */}
// //       <section className="py-20 bg-[#7b0000] text-white text-center">
// //         <h2 className="text-3xl font-bold">Work With Trusted Energy Experts</h2>
// //         <p className="mt-2 text-lg opacity-90">Let’s build smarter, efficient and future-ready infrastructure.</p>
// //         <button className="mt-6 px-8 py-3 text-lg bg-white text-[#7b0000] rounded-full hover:scale-110 transition">
// //           Contact Us
// //         </button>
// //       </section>

// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";

// const categories = [
//   "Power Distribution",
//   "Regulatory Consulting",
//   "AMI / Smart Grid",
//   "Solar & Renewable",
//   "MEP Design",
//   "Research & Training",
//   "Major Case Studies"
// ];

// export default function ProjectsPage() {
//   const [selected, setSelected] = useState("Power Distribution");

//   return (
//     <section className="w-full py-16 px-6 md:px-20 bg-white">
      
//       {/* Page Header */}
//       <div className="text-center max-w-3xl mx-auto mb-12">
//         <h2 className="text-[#889F2D] text-lg tracking-wide uppercase font-semibold">Our Expertise</h2>
//         <h1 className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4">
//           Delivering Excellence Across Power & Energy Domains
//         </h1>
//         <p className="text-gray-600 leading-relaxed">
//           PPS Energy Solutions has executed extensive national and international projects
//           across power distribution, energy audits, AMI deployment, renewable energy,
//           regulatory advisory, and smart infrastructure development.
//         </p>
//       </div>

//       {/* Category Tabs */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelected(cat)}
//             className={`px-5 py-2 text-sm rounded-full border transition duration-200
//               ${
//                 selected === cat
//                   ? "bg-[#889F2D] text-white border-[#889F2D]"
//                   : "border-gray-300 text-gray-700 hover:bg-gray-100"
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Dynamic Content */}
//       <div className="max-w-5xl mx-auto space-y-8 text-gray-700">
//         <h3 className="text-2xl font-semibold text-[#1a1a1a]">{selected}</h3>
//         <div className="border-l-4 border-[#889F2D] pl-6 text-gray-700 leading-relaxed space-y-3">
          
//           {/* Replace BELOW with mapped data later */}
//           <p>
//             PPS Energy Solutions has executed multiple assignments under {selected}
//             category across government entities, utility companies, international energy
//             agencies and private sector industries.
//           </p>

//           <ul className="list-disc pl-4 space-y-2">
//             <li>Example Project Line 01</li>
//             <li>Example Project Line 02</li>
//             <li>Example Project Line 03</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import projects from "../../../../public/data/projects/projects.json";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalData, setModalData] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = projects.filter(p => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 border-l-4 pl-3 border-blue-500">
        Major Projects
      </h1>

      {/* Search + Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search Projects..."
          className="border rounded px-4 py-2 w-full sm:w-64"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((item, i) => (
          <div key={i} className="border rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {item.client} • {item.country}
            </p>

            <p className="mt-3 line-clamp-3 text-gray-700">
              {item.summary}
            </p>

            <button className="mt-4 text-blue-600 font-medium"
              onClick={() => setModalData(item)}>
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-6 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={() => setModalData(null)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold">{modalData.title}</h2>
            <p className="mt-1 text-gray-600">{modalData.client} • {modalData.country}</p>

            <h3 className="mt-6 font-semibold">Scope of Work</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {modalData.scope?.map((s, i) => <li key={i}>{s}</li>)}
            </ul>

            {modalData.description && (
              <>
                <h3 className="mt-6 font-semibold">Project Summary</h3>
                <p className="text-gray-700 text-sm">{modalData.description}</p>
              </>
            )}

            <h3 className="mt-6 font-semibold">Team Involved</h3>
            <p className="text-sm text-gray-700">{modalData.team?.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
