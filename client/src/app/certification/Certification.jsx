// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// export default function Certifications() {
//   const [data, setData] = useState([]);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     fetch("/data/Certification/Certification.json")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <section className="common-section">
//       <div className="text-center mb-12">
//         <h3 className="title text-[#889F2D]">Our Specialization</h3>
//         <h2 className="center-section-heading">Leading Certifications & Compliance Services</h2>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-lg shadow-lg p-5 flex flex-col hover:shadow-[0_0_15px_#889F2D] transition duration-300"
//           >
//             {/* <Image
//               src={item.image}
//               alt={item.title}
//               width={500}
//               height={300}
//               className="w-full h-[220px] object-cover rounded-lg mb-4"
//             /> */}

//             <h3 className="team-members-name text-[#889F2D] mb-2">{item.title}</h3>

//             <p className="text-[#3D3D3D] mb-4">{item.short_description}</p>

            

//             <button
//               className="button mt-auto flex"
//               onClick={() => setSelected(item)}
//             >
//               View More <ArrowRight size={20} className="ml-2 mt-1" />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* MODAL POPUP */}
//     {selected && (
//   <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//     <div className="bg-white max-w-2xl p-6 rounded-lg shadow-xl relative max-h-[80vh] overflow-y-auto">

//       <button
//         className="absolute top-3 right-3 text-black font-bold"
//         onClick={() => setSelected(null)}
//       >
//         ✕
//       </button>

//       <h2 className="text-2xl font-bold text-[#889F2D] mb-3">
//         {selected.title}
//       </h2>
      
//       <p className="text-[#3D3D3D] whitespace-pre-line mb-4">
//         {selected.full_description}
//       </p>

//        <p className="text-[#3D3D3D] whitespace-pre-line mb-4">
//         {selected.full_description2}
//       </p>

//       {selected.highlights && (
//         <ul className="mt-4 list-disc pl-6 text-[#3D3D3D]">
//           {selected.highlights.map((line, idx) => (
//             <li key={idx}>{line}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   </div>
// )}

//     </section>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Certifications() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/Certification/Certification.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="common-section relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="title text-[#889F2D]">Our Specialization</h3>
        <h2 className="center-section-heading">
          Leading Certifications & Compliance Services
        </h2>
      </div>

      {/* Cards Grid (3 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white rounded-b-[10px] shadow-lg overflow-hidden hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
          >
            {/* Image */}
            <div className="group overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col grow px-4 py-4 text-left">
              <h3 className="team-members-name text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2">
                {item.title}
              </h3>

              <p className="bulletPoints text-[#3D3D3D] mb-5 grow">
                {item.short_description}
              </p>

             <button
  className="button mt-auto flex items-center w-fit"
  onClick={() => setSelected(item)}
>
  View More <ArrowRight size={18} className="ml-2" />
</button>
            </div>
          </div>
        ))}
      </div>

      {/* -------- MODAL -------- */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blur Background */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white max-w-3xl w-full mx-4 p-6 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto z-10">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#889F2D] mb-4">
              {selected.title}
            </h2>

            <p className="text-[#3D3D3D] whitespace-pre-line mb-4">
              {selected.full_description}
            </p>

            {selected.full_description2 && (
              <p className="text-[#3D3D3D] whitespace-pre-line mb-4">
                {selected.full_description2}
              </p>
            )}

            {selected.highlights && (
              <ul className="mt-4 list-disc pl-6 text-[#3D3D3D]">
                {selected.highlights.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
