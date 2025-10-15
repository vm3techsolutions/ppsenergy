"use client"
import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section
      className="relative h-[450px] md:h-[600px] sm:h-[300px] lg:h-[600px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/home/HomeBannerImage.png')" }}>
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="section relative z-10 max-w-3xl px-6 sm:px-4 md:px-8">
        <h1 className="heading text-white pb-6 sm:pb-4" >
          EMPOWERING BUSINESSES <br className="hidden sm:block" />
          WITH SUSTAINABLE, <br className="hidden sm:block" />
          COST-EFFECTIVE <br className="hidden sm:block" />
          ENERGY SOLUTIONS
        </h1>

        <Link href="/solutions">
          <button className="buttonGreenBG mt-8 "> Explore Solutions </button>
        </Link>
      </div>
    </section>
  );
}
