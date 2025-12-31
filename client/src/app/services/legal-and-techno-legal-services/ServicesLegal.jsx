"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesLegal() {
     const [marketResearch, setmarketResearch] = useState([]);
            
              useEffect(() => {
                fetch("/data/services/techno-legal/Service.json")
                  .then((res) => res.json())
                  .then((data) => setmarketResearch(data));
              }, []);
  return (
    <section className="common-section flex flex-col justify-center bg-[#fcfcfc]">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Key Legal Services</h3>
        <h2 className="center-section-heading">Comprehensive Market Research, Survey & Training solutions</h2>
        
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-6 justify-evenly items-stretch">
        {marketResearch.map((item) => (
          <div
            key={item.id}
            className="flex flex-col text-white rounded-b-[10px] shadow-lg overflow-hidden bg-white hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
          >
            {/* Image */}
            <div className="group overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="w-full h-[175px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 object-center"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col grow px-2 py-2 ">
              <h3 className="team-members-designation text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2 text-center">
                {item.title}
              </h3>
              {/* <p className="content text-[#3D3D3D] mb-2 grow">{item.desc}</p> */}

              {/* <h3 className="contact-heading text-[#7b0000]  grow">{item.pointsHead}</h3> */}

              <ul className="">
                {item.points?.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 content-section text-[#3d3d3d]">
                    <CheckCircle className="text-[#889F2D] w-4 h-4 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
           
            </div>
               {/* <p className="content text-[#3D3D3D]"> {item.approach}</p> */}
          </div>
        ))}
      </div>
    </section>
  )
}
