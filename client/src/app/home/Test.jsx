import React from 'react'

export default function Test() {
  return (
    <section className="flex flex-col text-center">
        <div>
        <div className="mb-4">
        <h3 className="title text-[#889F2D]">Testimonials</h3>
        <h2 className="center-section-heading">
          COMPREHENSIVE ENERGY STRATEGIES
        </h2>
       </div>
       </div>

        {/* Testimonials */}
      <div
  className="relative flex items-center justify-center bg-no-repeat bg-contain w-full h-[650px] bg-center "
  style={{ backgroundImage: "url('/assets/home/TestimonialsBG.png')" }} // use your vector background
>
   <div className="flex flex-col text-center items-center justify-center ">
    <header className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <h2>Devyani</h2>
      <div>
        <h3>Bhakti</h3>
        <h3>Prajakta</h3>
      </div>
    </header>

    <article className="mt-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptates amet,
        molestias eaque aspernatur suscipit incidunt accusamus optio deserunt eius tempore laborum
        minus odio consectetur rem quisquam! Debitis, a adipisci.
      </p>
    </article>
  </div>
</div>
    </section>
  )
}
