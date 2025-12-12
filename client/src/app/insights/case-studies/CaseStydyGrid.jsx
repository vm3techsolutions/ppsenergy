"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetch("/data/casestudy/CaseStudiesGrid.json")
      .then((res) => res.json())
      .then((data) => setCaseStudies(data));
  }, []);

  return (
    <section className="common-section bg-[#F9FAFB]">
    <div className="text-center mb-12">
  <h3 className="title text-[#889F2D]">
    REAL PROJECTS, REAL IMPACT
  </h3>
  <p className="center-section-heading">
    Showcasing our successful solutions and measurable results in energy optimization, renewable integration, and industrial efficiency.
  </p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((study) => (
          <Link
            key={study.id} // <-- make sure this matches JSON 'id' field
            href={`/insights/case-studies/${study.slug}`}
            className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
          >
            {study.image ? ( // <-- check if image exists
              <Image
                src={study.image} // <-- use 'image' from JSON
                alt={study.title}  // <-- use 'title' from JSON
                width={600}
                height={400}
                className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-300"
              />
            ) : null}

            <div className="p-4">
              <h3 className="team-members-name text-[#7b0000]  mb-2">
                {study.title}  {/* <-- use 'title' from JSON */}
              </h3>
              <p className="bulletPoints text-gray-600">
                {study.short_description} {/* <-- use 'short_description' */}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
