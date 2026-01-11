import React from "react";

export default function CareerBanner() {
  return (
    <div className="relative h-[450px] md:h-[600px] sm:h-[300px] lg:h-[600px] bg-[url('/assets/Certification/CertificationBanner.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="mb-6 heading">
            Our Specialization
          </h1>

          <div className="text-lg center-section-heading mt-14">
            <ul className="flex space-x-12 justify-center">
              <li>• MEA</li>
              <li>• PAT</li>
              <li>• CCTS</li>
              <li>• RCO</li>
              <li>• Green Steel</li>
              <li>• ADEETIE</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
