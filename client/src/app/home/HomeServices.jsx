"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeServices() {
  const [homeServices, setHomeServices] = useState([]);

  useEffect(() => {
    fetch("/data/home/HomeServices.json")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);

  return (
    <section className="common-section flex flex-col justify-center">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Services</h3>
        <h2 className="center-section-heading">COMPREHENSIVE ENERGY STRATEGIES</h2>
        <p className="content text-[#3D3D3D]">Comprehensive energy strategies are totally customized for your efficiency and business growth</p>
      </div>

      {/* Services Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly items-stretch">
      {homeServices.map((item) => (
      <div
      key={item.service_id}
      className="flex flex-col text-white rounded-b-[10px] shadow-lg overflow-hidden bg-white">
      {/* Image */}
      <div className="group overflow-hidden">
        <Image
          src={item.service_image}
          alt={item.service_title}
          width={800}
          height={500}
          className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-4 py-4 text-left">
        <h3 className="title text-[#889F2D] mb-3 border-b border-[#889F2D] pb-2">
          {item.service_title}</h3>
        <p className="content text-[#3D3D3D] mb-5 flex-grow">
          {item.service_description}</p>

        {/* Button (aligned bottom) */}
        <div className="mt-auto">
          <Link href="/home">
            <button className="button mt-3">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

