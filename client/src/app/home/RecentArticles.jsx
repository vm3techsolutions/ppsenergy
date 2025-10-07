"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function RecentArticles() {
    const [homeRecentArticles, setHomeRecentArticles] = useState([]);

      useEffect(() => {
        fetch("/data/home/HomeRecentArticles.json")
          .then((res) => res.json())
          .then((data) => setHomeRecentArticles(data));
      }, []);

  return (
   <section className='common-section flex flex-col justify-center'>
    <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Recent Articles</h3>
        <h2 className="center-section-heading">
           THOUGHT LEADERSHIP AND KNOWLEDGE FOR A <br/>SUSTAINABLE FUTURE
        </h2>
        
      </div>

       {/* Recent Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  mt-6 ">
        {homeRecentArticles.map((item) => (
          <div
            key={item.article_id}
            className=" text-white rounded-b-[10px] shadow-md overflow-hidden"
          >
            <div className="group overflow-hidden">
              <Image
                src={item.article_image}
                alt={item.article_title}
                width={800}
                height={500}
                className="w-full h-65 object-cover shadow-lg p-7 transition-transform duration-300 ease-in-out group-hover:scale-110 "
              />
            </div>

            <div className="px-7 py-2 text-left">
              <h3 className="title text-[#889F2D] mb-3 mr-5">{item.article_title}</h3>
              <p className="content text-[#3D3D3D] mb-5">{item.article_description}</p>
              <Link href="/home">
                <button className="button  sm:text-sm md:text-base px-8 sm:px-5 py-3 sm:py-2 rounded-lg shadow-md hover:bg-white-600 transition mt-3 mb-4">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
   </section>
    
  )
}
