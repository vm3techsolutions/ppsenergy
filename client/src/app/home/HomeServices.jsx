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
      <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Services</h3>
        <h2 className="center-section-heading">
          COMPREHENSIVE ENERGY STRATEGIES
        </h2>
        <p className="content text-[#3D3D3D]">
          Comprehensive energy strategies are totally customized for your
          efficiency and business growth
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
        {homeServices.map((item) => (
          <div
            key={item.service_id}
            className=" text-white rounded-[10px] shadow-md overflow-hidden"
          >
            <div className="group overflow-hidden">
              <Image
                src={item.service_image}
                alt={item.service_title}
                width={800}
                height={500}
                className="w-full h-56 object-cover p-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="px-4 py-2 text-left">
              <h3 className="title text-[#889F2D] mb-3  border-b-1 mr-5">{item.service_title}</h3>
              <p className="content text-[#3D3D3D] mb-5">{item.service_description}</p>
              <Link href="/home">
                <button className="button  sm:text-sm md:text-base px-8 sm:px-5 py-3 sm:py-2 rounded-lg shadow-md hover:bg-green-600 transition mt-3 mb-4">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

