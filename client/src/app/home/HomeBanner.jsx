"use client"
import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section
      className="relative h-[600px] md:h-[600px] sm:h-[400px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/home/HomeBannerImage.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#567D46]/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-4 md:px-8">
        <h1
          className="
            heading text-white 
            text-4xl md:text-3xl sm:text-2xl 
            leading-tight sm:leading-snug 
            pb-6 sm:pb-4
          "
        >
          EMPOWERING BUSINESSES <br className="hidden sm:block" />
          WITH SUSTAINABLE, <br className="hidden sm:block" />
          COST-EFFECTIVE <br className="hidden sm:block" />
          ENERGY SOLUTIONS
        </h1>

        <Link href="/solutions">
          <button
            className="
              button 
              text-base sm:text-sm md:text-base 
              px-8 sm:px-5 py-3 sm:py-2 mt-6 
              rounded-lg shadow-md 
              hover:bg-green-600 transition
            "
          >
            Explore Solutions
          </button>
        </Link>
      </div>
    </section>
  );
}
