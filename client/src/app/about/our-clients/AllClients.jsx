// "use client"
// import React from 'react'
// import Image from 'next/image'
// import React, { useEffect, useState } from "react";

// export default function AllClients() {
//   const [client, setClient] = useState([]);
  
//   useEffect(() => {
//       fetch("/data/ourclients/OurClients.json")
//         .then((res) => res.json())
//         .then((data) => setClient(data));
//     }, []);
  
  
//   return (
//     <section className="common-section">
//       <div className="text-center mb-10">
//         <h3 className="title text-[#889F2D]">Our Valued Clients</h3>
//         <h2 className="center-section-heading">
//           EMPOWERING ORGANIZATIONS THAT BELIEVE IN <br /> SUSTAINABLE PROGRESS
//         </h2>
//       </div>

//       {/* Grid of Clients */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
//         {clientImage.map((src, i) => (
//           <div
//             key={i}
//             className="flex justify-center p-4 bg-white shadow-sm  transition-all  hover:shadow-[0_0_25px_#889F2D]"
//           >
//             <Image
//               src={client.logo}
//               alt={client.name}
//               width={180}
//               height={100}
//               className="object-contain transition-all duration-300"
//             />

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AllClients() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("/data/ourclients/OurClients.json")
      .then((res) => res.json())
      .then((data) => setClient(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="common-section">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Our Valued Clients</h3>
        <h2 className="center-section-heading">Empowering organizations that believe in <br />
          sustainable progress
        </h2>
      </div>

      {/* Grid of Clients */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
  {client.map((item) => (
    <div
      key={item.id}
      className="flex justify-center items-center p-4 bg-white shadow-sm transition-all hover:shadow-[0_0_25px_#889F2D]"
    >
      {/* Fixed-height wrapper */}
      <div className="h-[100px] lg:h-[150px] w-full flex items-center justify-center">
        <Image
          src={item.logo}
          alt={item.name}
          width={180}
          height={100}
          className="max-h-full w-auto object-contain transition-all duration-300"
        />
      </div>
    </div>
  ))}
</div>
    </section>
  );
}

