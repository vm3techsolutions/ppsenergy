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
    <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Recent Articles</h3>
        <h2 className="center-section-heading">
           THOUGHT LEADERSHIP AND KNOWLEDGE FOR A <br/>SUSTAINABLE FUTURE
        </h2>
        
      </div>

       {/* Recent Articles Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly items-stretch">
        {homeRecentArticles.map((item) => (
          <div
            key={item.article_id}
            className=" flex flex-col text-white rounded-b-[10px] shadow-lg overflow-hidden bg-white"
          >
            <div className="group overflow-hidden p-5">
              <Image
                src={item.article_image}
                alt={item.article_title}
                width={800}
                height={500}
                className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 " />
            </div>

            <div className="flex flex-col flex-grow px-4 py-4 text-left">
              <h3 className="title text-[#889F2D] mb-3 mr-5">{item.article_title}</h3>
              <p className="content text-[#3D3D3D] mb-5">{item.article_description}</p>
              <Link href="/home">
               <div className="mt-auto">
                <button className="button mt-3">
                  Explore More
                </button>
               </div>
                
              </Link>
            </div>
          </div>
        ))}
      </div>
   </section>
    
  )
}
