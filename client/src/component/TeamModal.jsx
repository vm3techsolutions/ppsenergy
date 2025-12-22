"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes, FaLinkedinIn } from "react-icons/fa";

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
      onClick={onClose}> 
   
      <div
        className="bg-white rounded-xl p-6 max-w-3xl w-full relative shadow-xl overflow-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#7B0000] hover:text-[#889F2D]"  >
          <FaTimes size={22} />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <Image
            width={200}
            height={200}
            src={member.image}
            alt={member.name}
            className="h-[130px] w-[130px]  rounded-full border object-cover shadow-md" />

          <h2 className="team-members-name text-[#7B0000] mt-4">{member.name}</h2>
          <p className="text-[#889F2D] team-members-designation mb-2">
            {member.designation}
          </p>

          {/* {member.linkedin && (
            <Link href={member.linkedin} target="_blank">
              <FaLinkedinIn className="text-[#0077b5] text-3xl hover:scale-110 transition-transform" />
            </Link>
          )} */}
        </div>

        {/* Details Section */}
        <div className="text-gray-700 mt-6 space-y-4 bulletPoints">
          {member.academic && (
            <p>
              <strong className="text-[#7B0000] team-members-modal-name">
                Academic:
              </strong>{" "}
              {member.academic}
            </p>
          )}

          {member.experience && (
            <p>
              <strong className="text-[#7B0000] team-members-modal-name">
                Work Experience:
              </strong>{" "}
              {member.experience}
            </p>
          )}

          {member.expertise && (
            <div>
              <strong className="text-[#7B0000] team-members-modal-name">
                Expertise:
              </strong>
              <ul className="list-disc ml-6 mt-1">
                {member.expertise.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {member.publications && (
            <div>
              <strong className="text-[#7B0000] team-members-modal-name">
                Publications / Papers:
              </strong>
              <ul className="list-disc ml-6 mt-1">
                {member.publications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {member.inventions && (
            <div>
              <strong className="text-[#7B0000] team-members-modal-name">
                Inventions:
              </strong>
              <ul className="list-disc ml-6 mt-1">
                {member.inventions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
