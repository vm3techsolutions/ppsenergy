"use client"
import React from "react";
import Image from "next/image";

export default function AboutBanner() {
  return (
    <section
      className="relative h-[600px] md:h-[600px] sm:h-[400px] flex items-center bg-cover bg-top"
      style={{ backgroundImage: "url('/assets/aboutus/AboutUsBanner.png')" }}
    >
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="section relative z-10 max-w-3xl px-6 sm:px-4 md:px-8">
        <h2
          className="
            heading text-[#7B0000] 
            text-4xl md:text-3xl sm:text-2xl 
            leading-tight sm:leading-snug 
            pb-6 sm:pb-4
          "
        >
          POWERING A <br/> SUSTAINABLE FUTURE
        </h2>

     
      </div>
    </section>
  );
}
