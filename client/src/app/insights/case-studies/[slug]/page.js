"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function CaseStudyDetails() {
  const [caseStudy, setCaseStudy] = useState(null);
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  useEffect(() => {
    fetch("/data/casestudy/CaseStudyDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((cs) => cs.slug === slug);
        setCaseStudy(found);
      });
  }, [slug]);

  if (!caseStudy) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="common-section bg-white">
      {/* Title */}
      
      {/* Hero Image */}
      <div className="max-w-6xl mx-auto mb-10">
        <Image
          src={caseStudy.hero_image}
          width={1200}
          height={600}
          alt={caseStudy.title}
         className="w-full h-auto lg:w-[1200px] lg:h-[550px] object-cover rounded-lg mx-auto lg:mb-10 mb-5"
        />
      </div>

      <div className="text-center my-10">
        <h2 className="center-section-heading text-center">
          {caseStudy.title}
        </h2>
      </div>


      {/* Project Background */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h3 className="dual-section-heading text-[#7b0000]">Project Background</h3>
        <p className="text-gray-700 bulletPoints mt-2">{caseStudy.project_background}</p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 text-center">
        {[
          { label: "Client", value: caseStudy.client },
          { label: "Location", value: caseStudy.location },
          { label: "Duration", value: caseStudy.duration },
          { label: "Industry", value: caseStudy.industry }
        ].map((info, i) => (
          <div key={i} className="bg-[#F9FAFB] p-5 rounded-lg shadow">
            <h4 className="process-bullet-section-heading">{info.label}</h4>
            <p className="text-gray-700">{info.value}</p>
          </div>
        ))}
      </div>

      {/* Impact */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="dual-section-heading text-[#7b0000] text-center">
          {caseStudy.impact_title}
        </h3>

        <p className="text-center text-gray-600 mt-2 bulletPoints">
          {caseStudy.impact_subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {caseStudy.impact_metrics.map((item, i) => (
            <div key={i} className="bg-[#F9FAFB] p-5 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#889F2D]">{item.number}</div>
              <p className="text-gray-700 mt-2 bulletPoints">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
        <div>
          <h3 className="dual-section-heading text-[#7b0000]">{caseStudy.challenge_title}</h3>
          <ul className="mt-4 space-y-3 text-gray-700 bulletPoints">
            {caseStudy.challenge_points.map((c, i) => (
              <li key={i}>• {c}</li>
            ))}
          </ul>
        </div>

        <Image
          src={caseStudy.challenge_image}
          alt="challenge"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Solution Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
        <Image
          src={caseStudy.solution_image}
          alt="solution"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />

        <div>
          <h3 className="dual-section-heading text-[#7b0000]">{caseStudy.solution_title}</h3>
          <ul className="mt-4 space-y-3 text-gray-700 bulletPoints">
            {caseStudy.solution_points.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Methodology Steps */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h3 className="dual-section-heading text-[#7b0000]">Methodology</h3>

        <div className="mt-10 space-y-10">
          {caseStudy.methodology_steps.map((step, index) => (
            <div key={index} className="p-6 bg-[#F9FAFB] rounded-xl shadow">
              <h4 className="process-bullet-section-heading mb-2">
                {step.step} — {step.title}
              </h4>
              <p className="text-gray-700 bulletPoints">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h3 className="dual-section-heading text-[#7b0000]">Results</h3>

        <div className="mt-6 space-y-6">
          {caseStudy.results.map((res, i) => (
            <div key={i}>
              <h4 className="process-bullet-section-heading">
                {res.title}
              </h4>
              <p className="text-gray-700 bulletPoints">{res.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
