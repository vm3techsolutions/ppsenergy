import React from 'react'

export default function Banner() {
  return (
   <section className=" relative h-[500px] md:h-[600px] sm:h-[400px] lg:h-[600px] flex items-start bg-cover bg-center justify-center lg:pt-[120px] pt-[60px]"
      style={{ backgroundImage: "url('/assets/team/AssociatesMentorsBanner.jpeg')" }}>
     

    
      {/* Content */}
      <div className="section relative z-10 max-w-3xl px-6 sm:px-4 md:px-8 ">
        <h2 className="heading text-[#7B0000] pb-6 sm:pb-4 ">
        Associates & Mentors
        </h2>
        </div>
    

      
    </section>
  )
}
