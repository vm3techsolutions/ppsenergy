"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LatestJobListing() {
  const [jobs, setJobs] = useState([]);
  
        useEffect(() => {
          fetch("/data/career/JobLists.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
        }, []);
  return (
    <section className='common-section'>
        <div className="text-center mb-10">
        {/* <h3 className="title text-[#889F2D]"></h3> */}
        <h2 className="center-section-heading">Latest Job Listing</h2>
      </div>

   
       <div className="flex flex-col section gap-10 lg:mx-[150px] ">
        {jobs.map((item) => (
          <div
            key={item.job_id}
            className=" flex flex-col text-white rounded-b-[10px] shadow-lg overflow-hidden text-left hover:shadow-[0_0_5px_#889F2D] transition-shadow duration-300"
          >

            <div className="flex flex-col flex-grow px-4 py-4 text-left  ">
              <div>
                <h3 className="title text-[#889F2D] mb-5 mr-5 border-b-[1px] pb-2 ">{item.job_title}</h3>
              </div>

              <div className='lg:flex justify-between content'>
                <p className='content text-[#000000]'>Location: {item.job_experience}</p>
                <p className='content text-[#000000]'>Experience: {item.job_location}</p>
                <p className='content text-[#000000] mr-5'>Payement: {item.job_payment}</p>

              </div>
              
             
              
               <div className="mt-[20px] mb-2 self-center">
                <button className="button mt-3">
                  Apply Now
                </button>
               </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
