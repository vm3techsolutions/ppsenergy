// import React from 'react'

// export default function ProjectBG() {
//   return (
//     <section className="section-vertical-padding text-center">
//       <div className="mb-10">
//         <h3 className="title text-[#889F2D] mb-5">Project Backgrounds</h3>
//         <p className="content text-[#3D3D3D]">Our client, a leading manufacturing facility with operations across India, was facing rising energy costs, inefficiencies in equipment usage, and increasing <br />pressure to adopt sustainable practices. They approached us to conduct a comprehensive energy audit and deliver a strategy that balances <br /> cost savings with sustainability goals.</p>
//       </div>

//       {/* Background Info Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left bg-[#F5F5F5] p-12 justify-items-center">

//         <div>
//           <h3 className="process-bullet-section-heading text-[#7B0000]">Client</h3>
//           <p className="process-bullet-section-desc text-[#000000]">ABC Manufacturing Co.</p>
//         </div>

//         <div>
//           <h3 className="process-bullet-section-heading text-[#7B0000]">Location</h3>
//           <p className="process-bullet-section-desc text-[#000000]">ABCDE, India</p>
//         </div>

//         <div>
//           <h3 className="process-bullet-section-heading text-[#7B0000]">Duration</h3>
//           <p className="process-bullet-section-desc text-[#000000]">6 Months</p>
//         </div>

//         <div>
//           <h3 className="process-bullet-section-heading text-[#7B0000]">Industry</h3>
//           <p className="process-bullet-section-desc text-[#000000]">Manufacturing</p>
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";

export default function ProjectBG() {
  return (
    <section className="section-vertical-padding text-center ">
      {/* Title + Description */}
      <div className="mb-10 ">
        <h3 className="title text-[#889F2D] mb-5">Project Backgrounds</h3>
        <p className="content text-[#3D3D3D]">
          Our client, a leading manufacturing facility with operations across India,
          was facing rising energy costs, inefficiencies in equipment usage, and
          increasing <br /> pressure to adopt sustainable practices. They approached us to
          conduct a comprehensive energy audit and deliver a strategy that balances <br />
          cost savings with sustainability goals.
        </p>
      </div>

      {/* Background Info Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-8 
        text-left 
        bg-[#F5F5F5] 
        p-6 
        sm:p-10 
        lg:p-12
        lg:justify-items-center
      ">
        <div>
          <h3 className="process-bullet-section-heading text-[#7B0000]">Client</h3>
          <p className="process-bullet-section-desc text-[#000000]">
            ABC Manufacturing Co.
          </p>
        </div>

        <div>
          <h3 className="process-bullet-section-heading text-[#7B0000]">Location</h3>
          <p className="process-bullet-section-desc text-[#000000]">
            ABCDE, India
          </p>
        </div>

        <div>
          <h3 className="process-bullet-section-heading text-[#7B0000]">Duration</h3>
          <p className="process-bullet-section-desc text-[#000000]">
            6 Months
          </p>
        </div>

        <div>
          <h3 className="process-bullet-section-heading text-[#7B0000]">Industry</h3>
          <p className="process-bullet-section-desc text-[#000000]">
            Manufacturing
          </p>
        </div>
      </div>
    </section>
  );
}
