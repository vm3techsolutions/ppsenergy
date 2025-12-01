
import React from "react";

export default function ResultImpact() {
  return (
    <section className="common-section px-4 sm:px-8 lg:px-20">
      {/* Title */}
      <div className="mb-10 text-center">
        <h3 className="title text-[#889F2D] mb-5">Result & Impact</h3>
        <p className="content text-[#3D3D3D]">
          Results that speaks for themselves
        </p>
      </div>

      {/* Two large cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-items-center ">
        
        {/* Card 1 */}
        <div className="w-full sm:w-80 lg:w-[420px] h-[220px] bg-[#F2F2F2] rounded-xl flex items-center justify-center  shadow-sm group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300">
          <p className="text-[#889F2D] font-medium leading-6 text-center title ">
            Detailed Results <br />
            Content <br />
            Quantification
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-80 lg:w-[420px] h-[220px] bg-[#F2F2F2] rounded-xl flex items-center justify-center shadow-sm group hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300">
       <p className="text-[#889F2D] font-medium leading-6 text-center title">
            Detailed Results <br />
            Content <br />
            Quantification
          </p>
        </div>

      </div>
    </section>
  );
}
