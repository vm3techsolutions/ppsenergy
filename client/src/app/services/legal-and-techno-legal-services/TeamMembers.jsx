// "use client";

// import React, { useEffect, useState } from "react";
// import TeamModal from "@/component/TeamModal";


// export default function TeamMembers() {
//     const [team, setTeam] = useState([]);
//       const [selected, setSelected] = useState(null);
    
//       useEffect(() => {
//         fetch("/data/services/techno-legal/TeamMembers.json")
//           .then((res) => res.json())
//           .then((data) => setTeam(data));
//       }, []);
//   return (
//     <section className="common-section ">
//       <div className="text-center mb-4">
//         <h3 className="title text-[#889F2D]">Our Key Persons</h3>
//         <h2 className="center-section-heading">Experienced minds powering progress</h2>
//         <p className="content text-[#3D3D3D]">PPS Energy Solutions have qualified and experienced professionals who are in Energy/Power Sector for more than 20 Years.</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
//         {team.map((member) => (
// <div
//   key={member.id}
//   onClick={() => setSelected(member)}
//   className="cursor-pointer relative flex flex-col justify-between h-full py-1 "
// >
//   <div className="flex flex-col items-center  text-center">
  

//     <h3 className="team-members-name mt-4 text-[#7B0000]">
//       {member.name}
//     </h3>

//     <p className="content-section text-center mt-2">
//       {member.designation}
//     </p>

//      <button className="buttonTeam my-5">View More</button>
//   </div>

 
// </div>
//         ))}
//       </div>

//       {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
//     </section>
//   )
// }

"use client";

import React, { useEffect, useState } from "react";
import TeamModal from "@/component/TeamModal";

export default function TeamMembers() {
  const [team, setTeam] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/services/techno-legal/TeamMembers.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  const firstRow = team.slice(0, 2);
  const secondRow = team.slice(2, 7);

  return (
    <section className="common-section">
      {/* Heading */}
      <div className="text-center mb-8">
        <h3 className="title text-[#889F2D]">Expert Team</h3>
        <h2 className="center-section-heading">
          Experienced minds powering progress
        </h2>
      </div>

      {/* FIRST ROW (2 MEMBERS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
        {firstRow.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelected(member)}
            className="cursor-pointer flex flex-col items-center text-center"
          >
            <h3 className="team-members-name mt-4 text-[#7B0000]">
              {member.name}
            </h3>
            <p className="content-section mt-2">
              {member.designation}
            </p>
            <button className="buttonTeam my-5">View More</button>
          </div>
        ))}
      </div>

      {/* SECOND ROW (5 MEMBERS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
        {secondRow.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelected(member)}
            className="cursor-pointer flex flex-col items-center text-center"
          >
            <h3 className="team-members-name mt-4 text-[#7B0000]">
              {member.name}
            </h3>
            <p className="content-section mt-2">
              {member.designation}
            </p>
            <button className="buttonTeam my-5">View More</button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <TeamModal member={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
