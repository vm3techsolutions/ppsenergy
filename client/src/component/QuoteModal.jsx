"use client";
import React, { useState } from "react";

export default function QuoteModal({ open, onClose }) {
  if (!open) return null;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote form submitted:", form);
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative"
      onClick={(e) => e.stopPropagation()}  >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#7b0000] hover:text-#889F2D text-xl font-bold" >
          ✕
        </button>

        <h2 className="title text-[#889F2D] text-center">
          Request a Quote
        </h2>
         <h2 className="center-section-heading mb-6 text-center text-black">Get Your Quote Today!</h2>

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl text-white mt-6 border border-[#889F2D] bg-white"  >
         

          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg mb-4 text-black bg-[#f8f8f8]"
            required />

          <input
            type="text"
            name="phone"
            placeholder="Mobile"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
            required/>

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
            required />

          <textarea
            name="message"
            placeholder="Requirement"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
            required/>

          <button
            type="submit"
            className="button w-full py-3 rounded-lg text-white" >
            Request A Quote
          </button>
        </form>
      </div>
    </div>
  );
}
