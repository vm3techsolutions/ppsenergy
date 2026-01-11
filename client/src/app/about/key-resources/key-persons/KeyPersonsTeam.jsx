"use client"

import React, { useEffect, useState } from "react";
import TeamModal from "../../../../component/TeamModal.jsx";

export default function KeyPersonsTeam() {
  const [team, setTeam] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/keypersons/Team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <section className="common-section ">
      <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Our Key Persons</h3>
        <h2 className="center-section-heading">Experienced minds powering progress</h2>
        <p className="content text-[#3D3D3D]">PPS Energy Solutions have qualified and experienced professionals who are in Energy/Power Sector for more than 20 Years.</p>
      </div>

{/* First Row - 3 members */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
  {team.slice(0, 3).map((member) => (
    <div
      key={member.id}
      onClick={() => setSelected(member)}
      className="cursor-pointer relative flex flex-col justify-between h-full py-1 "
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="team-members-name mt-4 text-[#7B0000]">
          {member.name}
        </h3>

        <p className="content-section text-center mt-2">
          {member.designation}
        </p>

        <button className="buttonTeam my-5">View More</button>
      </div>
    </div>
  ))}
</div>

{/* Second Row - remaining 4 members */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
  {team.slice(3).map((member) => (
    <div
      key={member.id}
      onClick={() => setSelected(member)}
      className="cursor-pointer relative flex flex-col justify-between h-full py-1 "
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="team-members-name mt-4 text-[#7B0000]">
          {member.name}
        </h3>

        <p className="content-section text-center mt-2">
          {member.designation}
        </p>

        <button className="buttonTeam my-5">View More</button>
      </div>
    </div>
  ))}
</div>

      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}