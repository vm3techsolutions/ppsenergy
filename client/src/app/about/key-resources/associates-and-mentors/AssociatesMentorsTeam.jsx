
"use client";

import React, { useEffect, useState } from "react";
import TeamModal from "../../../../component/TeamModal.jsx";
import { FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function AssociatesMentorsTeam() {
  const [team, setTeam] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/keypersons/AssociatesMentors.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <section className="common-section bg-[#f8f8f8]">
      <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Our Key Persons</h3>
        <h2 className="center-section-heading">EXPERIENCED MINDS POWERING PROGRESS</h2>
        <p className="content text-[#3D3D3D]">
          PPS Energy Solutions have qualified and experienced professionals who are in Energy/Power Sector for more than 20 Years.
        </p>
      </div>

      {/* First 4 fixed columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {team.slice(0, 4).map((member) => (
          <TeamCard key={member.id} member={member} setSelected={setSelected} />
        ))}
      </div>

      {/* If extra members exist, center them */}
      {team.length > 4 && (
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
          {team.slice(4).map((member) => (
            <div key={member.id} className="w-full sm:w-[45%] lg:w-[23%]">
              <TeamCard member={member} setSelected={setSelected} />
            </div>
          ))}
        </div>
      )}

      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

// ---------------- Card component (unchanged) ----------------

const TeamCard = ({ member, setSelected }) => (
  <div
    key={member.id}
    onClick={() => setSelected(member)}
    className="cursor-pointer relative flex flex-col justify-between h-full shadow-lg rounded-b-[10px] py-1 px-3 bg-white border border-[#ffffff] hover:shadow-[0_0_5px_#889F2D] transition-all duration-300 content-section"
  >
    <div className="flex flex-col items-center grow text-center">
      <Image
        width={260}
        height={205}
        src={member.image}
        alt={member.name}
        className="w-full h-[275px] lg:object-cover object-contain object-top mt-2 transition-transform"
      />

      <h3 className="team-members-name mt-4 text-[#7B0000]">{member.name}</h3>
      <p className="process-bullet-section-desc text-center mt-2">
        {member.designation}
      </p>
    </div>

    <div className="flex justify-between items-center w-full mt-4 pb-2">
      <div className="rounded-full p-2 bg-[#7b0000]">
        {/* <Link href={member.linkedin || "#"} onClick={(e) => e.stopPropagation()}>
          <FaLinkedinIn className="text-[#7b0000] p-1 text-2xl bg-white rounded-sm hover:scale-110 transition-transform" />
        </Link> */}

        <Link 
  href={member.linkedin || "#"} 
  onClick={(e) => e.stopPropagation()} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaLinkedinIn className="text-[#7b0000] p-1 text-2xl bg-white rounded-sm hover:scale-110 transition-transform" />
</Link>
      </div>

      <div className="bg-[#889F2D] text-white p-2 rounded-full shadow-md hover:bg-[#6f8224] transition">
        <FaArrowRight size={14} />
      </div>
    </div>
  </div>
);
