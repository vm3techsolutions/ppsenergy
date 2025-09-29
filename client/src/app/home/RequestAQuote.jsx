"use client"
import React from 'react'
import Image from "next/image";
import { useState } from "react";


export default function RequestAQuote() {
    const [form, setForm] = useState({ name: "", phone: "",  email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };
  return (
    <section className='common-section flex flex-col justify-center mb-10'>

        <div className="text-center mb-4">
        <h3 className="title text-[#889F2D] mb-10">Request A Quote</h3>
        
      </div>

        <div className='flex justify-between justify-items-center'>

              
            <div className='text-left  justify-center w-1/2 mt-35  '>
            <h2 className="dual-section-heading mb-6">POWERING BUSINESSES <br></br> TOWARDS NET ZERO!</h2>
            <p className="content text-[#3D3D3D] pt-3 text-left">
            We, PPS Energy Solutions Private Limited (PPSES) Pune are the strategic organization especially formulated for serving Energy and Power sectors, with proven experience of 3 Million Hours in power regulatory, Energy Audit, MEP, Research and Training in India and abroad.
            </p>
        </div>

            <div >
                    <form onSubmit={handleSubmit} className=" p-10 bg-[#889F2D] shadow ml-40 text-[#ffffff]">
      <h2 className="text-2xl font-bold mb-8 heading text-center">Get Your Quote Today!</h2>

      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6"
        required
      />

      <input
        type="phone"
        name="phone"
        placeholder="Mobile"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6"
        required
      />

      <textarea
        name="message"
        placeholder="Requirement"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6 "
        rows="4"
        required
      />

      <button
        type="submit"
       className="
              button 
              text-base sm:text-sm md:text-base 
              px-8 sm:px-5 py-3 sm:py-2 mt-6 
              rounded-lg shadow-md 
              hover:bg-green-600 transition justify-center
            "
      >
        Request A Quote
      </button>
    </form>
            </div>
        </div>

    </section>
  )
}
