import React from 'react'
import Image from 'next/image'

export default function IndustriesWeServe() {
  return (
    <section className='common-section'>
        <div className="text-center mb-6">
        <h3 className="title text-[#889F2D]">Industries We Serve</h3>
        <h2 className="center-section-heading">
        OUR ENERGY AUDIT EXPERTISE SPANS ACROSS
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center text-[#ffffff] '>

        {/* box-1 */}
        <div className='border-[1px] border-[#889F2D]  rounded-b-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.3)] group w-full max-w-md md:max-w-full overflow-hidden'>
            <Image
            width={282}
            height={284}
            src="/assets/services/energyAudit/ManufacturingAndIndustrialPlants.png"
            alt="About Us"
            className="w-full max-w-md md:max-w-full h-[300px] object-cover p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className='p-[10px] bg-[#7B0000] rounded-b-[10px]'>
                <h3 className='content   '>Manufacturing & Industrial Plants</h3>
            </div>
            
        </div>

        {/* box-2 */}
          <div className='border-[1px] border-[#889F2D]  rounded-b-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.3)] group w-full max-w-md md:max-w-full overflow-hidden'>
            <Image
            width={282}
            height={284}
            src="/assets/services/energyAudit/CommercialBuildingsAndOffices.png"
            alt="About Us"
            className="w-full max-w-md md:max-w-full h-[300px] object-cover p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className='p-[10px] bg-[#7B0000] rounded-b-[10px]'>
                <h3 className='content   '>Commercial Buildings & Offices</h3>
            </div>
            
        </div>


        {/* box-3 */}
          <div className='border-[1px] border-[#889F2D]  rounded-b-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.3)] group w-full max-w-md md:max-w-full overflow-hidden'>
            <Image
            width={282}
            height={284}
            src="/assets/services/energyAudit/HotelsAndHospitality.png"
            alt="About Us"
            className="w-full max-w-md md:max-w-full h-[300px] object-cover p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className='p-[10px] bg-[#7B0000] rounded-b-[10px]'>
                <h3 className='content   '>Hotels & Hospitality </h3>
            </div>
            
        </div>


        {/* box-4 */}
         <div className='border-[1px] border-[#889F2D]  rounded-b-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.3)] group w-full max-w-md md:max-w-full overflow-hidden'>
            <Image
            width={282}
            height={284}
            src="/assets/services/energyAudit/HospitalsAndHealthcareFacilities.png"
            alt="About Us"
            className="w-full max-w-md md:max-w-full h-[300px] object-cover p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className='p-[10px] bg-[#7B0000] rounded-b-[10px]'>
                <h3 className='content   '>Hospitals & Healthcare Facilities</h3>
            </div>
            
        </div>


      </div>
    </section>
  )
}
