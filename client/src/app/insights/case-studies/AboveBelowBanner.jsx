import React from 'react'

export default function AboveBelowBanner() {
  return (
    <section className='common-section bg-[#7B0000] text-white py-16 mb-20'>
       <div className="text-center">
         <h3 className="title text-[#889F2D]">Ready to transform your energy infrastructure?</h3>
      <h2 className="center-section-heading ">
        Let's discuss how we can help your organization achieve similar <br />
results with a customized energy solution.
      </h2>
    </div> 
    <div className='grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 justify-center  atems-center mt-10 gap-6 flex'>
        <button className='buttonService'>Schedule Consultation</button>
        <button className='buttonNoService'>View More Case Studies</button>
    </div>
    </section>
  )
}
