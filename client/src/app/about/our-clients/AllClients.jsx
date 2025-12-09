"use client"
import React from 'react'
import Image from 'next/image'

export default function AllClients() {
   const clientImage = [
    "/assets/home/Client1.png",
    "/assets/home/Client2.png",
    "/assets/home/Client3.png",
    "/assets/home/Client4.png",
    "/assets/home/Client5.png",
    "/assets/home/Client6.png",
    "/assets/home/Client7.png",
    "/assets/home/Client8.png",
    "/assets/home/Client9.png",
    "/assets/home/Client10.png",
    "/assets/home/Client11.png",
    "/assets/home/Client12.png",
    "/assets/home/Client13.png",
    "/assets/home/Client14.png",
    "/assets/home/Client15.png",
    "/assets/home/Client16.png",
    "/assets/home/Client17.png",
    "/assets/home/Client18.png",
    "/assets/home/Client19.png",
    "/assets/home/Client20.png",
    "/assets/home/Client21.png",
    "/assets/home/Client22.png",
    "/assets/home/Client23.png",
    "/assets/home/Client24.png",
  ];

  return (
    <section className="common-section">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Our Valued Clients</h3>
        <h2 className="center-section-heading">
          EMPOWERING ORGANIZATIONS THAT BELIEVE IN <br /> SUSTAINABLE PROGRESS
        </h2>
      </div>

      {/* Grid of Clients */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
        {clientImage.map((src, i) => (
          <div
            key={i}
            className="flex justify-center p-4 bg-white shadow-sm  transition-all  hover:shadow-[0_0_25px_#889F2D]"
          >
            <Image
              src={src}
              alt={`Client ${i + 1}`}
              width={180}
              height={100}
              className="object-cover transition-all duration-300 "
            />
          </div>
        ))}
      </div>
    </section>
  );
}