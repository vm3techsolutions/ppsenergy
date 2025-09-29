"use client"
import React from 'react'
import Image from "next/image";

export default function OurClient() {
    const clientImage = [
        
    ]
  return (
    <section className='common-section flex flex-col justify-center'>
        <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Our Valued Client</h3>
        <h2 className="center-section-heading">EMPOWERING ORGANIZATIONS THAT BELIEVE IN <br></br>SUSTAINABLE PROGRESS</h2>
        
      </div>

      {/* Client Images */}
      <div className='flex justify-center gap-10'>
        {/* client1 */}
         <Image
        src="/assets/home/Client1.png" 
        alt="Client1"
        width={200}
        height={100}
      />

      {/* client2 */}
         <Image
        src="/assets/home/Client2.png"
        alt="Client2"
        width={200}
        height={100}
      />

      {/* client3 */}
         <Image
        src="/assets/home/Client3.png" 
         alt="Client3"
        width={200}
        height={100}
      />

      {/* client4 */}
         <Image
        src="/assets/home/Client4.png" 
        alt="Client4"
        width={200}
        height={100}
      />

      {/* client5 */}
         <Image
        src="/assets/home/Client5.png" // path starts from /public
        alt="Client5"
        width={200}
        height={100}
      />

      {/* client6 */}
         <Image
        src="/assets/home/Client6.png" // path starts from /public
        alt="Client5"
        width={200}
        height={100}
      />



      </div>
    </section>
  )
}
