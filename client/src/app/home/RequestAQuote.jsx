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

        <div className="text-center lg:mb-10">
   
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>

        <div className='flex  flex-col text-left   lg:mr-[30px] '>
          <div>
            <h3 className="title text-[#889F2D] my-5">Request A Quote</h3>
            <h2 className="heading mb-5 text-center lg:text-left">POWERING BUSINESSES <br></br> TOWARDS NET ZERO!</h2>
          </div>
          <div>
             <p className="content text-[#3D3D3D] pt-6 text-left">
            We, PPS Energy Solutions Private Limited (PPSES) Pune are the strategic organization especially formulated for serving Energy and Power sectors, with proven experience of 3 Million Hours in power regulatory, Energy Audit, MEP, Research and Training in India and abroad.
            </p>
          </div>
               
           
        </div>

        <div className='z-10'>
        <form onSubmit={handleSubmit} className=" p-8 bg-[#889F2D] lg:ml-30 text-[#ffffff] rounded-b-[10px] mt-5 ">
        <h2 className="mb-8 heading text-center">Get Your Quote Today!</h2>

      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6"
        required/>

      <input
        type="phone"
        name="phone"
        placeholder="Mobile"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6"
        required/>

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6"
        required/>

      <textarea
        name="message"
        placeholder="Requirement"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-6 "
        rows="4"
        required/>

      <button
        type="submit"
       className="buttonGreenBG justify-center">Request A Quote</button>
    </form>
    </div>
    </div>

    </section>
  )
}
