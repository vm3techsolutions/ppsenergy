
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsAll() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects/ProjectsGrid.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []));
  }, []);

  return (
    <section className="common-section ">
      <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Our Projects</h3>
        <h2 className="center-section-heading">Driving progress through expertise & innovation</h2>
        <p className="content text-[#3D3D3D]">
         
          

          From Power Distribution upgrades to Energy Audits, MEP Engineering, Solar EPC installations, and Regulatory Compliance — our team of accredited and 
      
          certified experts has successfully executed a wide range of projects across India and abroad.
        
Our work reflects strong technical capabilities, a commitment to sustainability, and a passion for delivering measurable results.
        </p>
      </div>

      {/* FLEX WRAP + CENTER LAST ROW */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[45%] lg:w-[22%] 
                       mb-8 pb-3 
                       rounded-lg
                       flex flex-col shadow-lg bg-white hover:shadow-[0_0_10px_#889F2D] transition-all duration-300 "
          >
            {/* Image */}
            <Image
  src={project.image}
  alt={project.name}
  width={300}
  height={200}
  className="w-full h-[200px] object-cover object-center rounded-t-lg"
/>

            {/* Content zone */}
            <div className="flex flex-col flex-1 p-4">
              <h3 className="team-members-name text-[#7B0000] my-2">
                {project.name}
              </h3>

              <p className="bulletPoints mb-4">
                {project.description}
              </p>

              {/* PUSH THIS TO THE BOTTOM */}
       
              <Link
                href={project.link}
                className="text-[#889F2D]  mt-auto button text-center"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

