
"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CoreServices() {
  const [powerConsultancyServices, setpowerConsultancyServices] = useState([]);

  useEffect(() => {
    fetch("/data/services/power-consultancy/Services.json")
      .then((res) => res.json())
      .then((data) => setpowerConsultancyServices(data));
  }, []);

  return (
    <section className="common-section flex flex-col justify-center bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Services</h3>
        <h2 className="center-section-heading">COMPREHENSIVE ENERGY STRATEGIES</h2>
        <p className="content text-[#3D3D3D]">
          Comprehensive energy strategies are totally customized for your efficiency and business growth
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12 justify-evenly items-stretch">
        {powerConsultancyServices.map((item) => (
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
                className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col grow px-4 py-4 text-left">
              <h3 className="process-bullet-section-heading text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2">
                {item.title}
              </h3>
              <p className="bulletPoints text-[#3D3D3D] mb-2 grow">{item.desc}</p>

              <ul className="">
                {item.points?.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 subheading text-[#3d3d3d]">
                    <CheckCircle className="text-[#889F2D] w-4 h-4 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
