// "use client"
// import React from 'react'
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from 'lucide-react';
// import { SlCalender } from "react-icons/sl";


// export default function BlogDisplay() {
//     const [homeRecentArticles, setHomeRecentArticles] = useState([]);

//       useEffect(() => {
//         fetch("/data/home/HomeRecentArticles.json")
//           .then((res) => res.json())
//           .then((data) => setHomeRecentArticles(data));
//       }, []);

//   return (
//    <section className='common-section flex flex-col justify-center'>
//     <div className="text-center mb-10">
//     <h3 className="title text-[#889F2D]">Recent Articles</h3>
//     <h2 className="center-section-heading">THOUGHT LEADERSHIP AND KNOWLEDGE FOR A <br/>SUSTAINABLE FUTURE</h2>
//     </div>

//        {/* Recent Articles Grid */}
//        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly items-stretch">
//         {homeRecentArticles.map((item) => (
//           <div
//             key={item.article_id}
//             className=" flex flex-col text-white rounded-b-[10px] shadow-lg overflow-hidden bg-white hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300" >
//             <div className="group overflow-hidden m-5">
//               <Image
//                 src={item.article_image}
//                 alt={item.article_title}
//                 width={800}
//                 height={500}
//                 className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 " />
//             </div>

//             <div className="flex flex-col grow px-4 py-4 text-left">
//                <p className='text-[#000000] flex mb-2'><SlCalender className='mr-2 mt-1'/>{item.article_date}</p>

//               <h3 className="title text-[#889F2D] mb-3 mr-5">{item.article_title}</h3>
             
//               <p className="content text-[#3D3D3D] mb-5">{item.article_description}</p>

//              <Link href={`/insights/blogs/${item.slug}`}>
//   <div className="mt-auto">
//     <button className="button mt-3 flex">Read More <ArrowRight size={20} className="ml-2 mt-1" /></button>
//   </div>
// </Link>


//             </div>
//           </div>
//         ))}
//       </div> */}

    


//    </section>
    
//   )
// }


"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SlCalender } from "react-icons/sl";

export default function BlogDisplay() {
  const [homeRecentArticles, setHomeRecentArticles] = useState([]);

  useEffect(() => {
    fetch("/data/home/HomeRecentArticles.json")
      .then((res) => res.json())
      .then((data) => setHomeRecentArticles(data));
  }, []);

  return (
    <section className="common-section flex flex-col justify-center">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Recent Articles</h3>
        <h2 className="center-section-heading">Thought leadership and knowledge for a sustainable future
        </h2>
      </div>

      {/* Recent Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly items-stretch">
        {homeRecentArticles.map((item) => (
          <div
            key={item.article_id}
            className="flex flex-col h-full text-white rounded-b-[10px] shadow-lg overflow-hidden bg-white hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300"
          >
            <div className="group overflow-hidden m-5">
              <Image
                src={item.article_image}
                alt={item.article_title}
                width={800}
                height={500}
                className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col px-4 pb-5 grow text-left">
              <p className="text-[#000000] flex mb-2">
                <SlCalender className="mr-2 mt-1" />
                {item.article_date}
              </p>

              <h3 className="team-members-name text-[#889F2D] mb-3 mr-5">
                {item.article_title}
              </h3>

              <p className="bulletPoints text-[#3D3D3D] mb-5">
                {item.article_description}
              </p>

              {/* FIXED BUTTON POSITION */}
              <div className="mt-auto">
                <Link href={`/insights/blogs/${item.slug}`}>
                  <button className="button mt-3 flex">
                    Read More{" "}
                    <ArrowRight size={20} className="ml-2 mt-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
