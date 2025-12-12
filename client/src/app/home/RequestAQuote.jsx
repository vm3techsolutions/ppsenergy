

"use client";
import React, { useState } from "react";

export default function RequestAQuote() {
  // ⭐ Proper state variables
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ⭐ State for success / error messages
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ⭐ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phone, message };

    try {
      const res = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit");
      }

      console.log("Response:", data);
      setSuccessMsg("✅ Your form has been submitted successfully!");
      setErrorMsg("");

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Optional: hide success message after 5 seconds
      setTimeout(() => setSuccessMsg(""), 5000);

    } catch (error) {
      console.error("Submit error:", error);
      setErrorMsg("❌ Error submitting form. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <section className="common-section flex flex-col justify-center mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">

        <div className="flex flex-col text-left lg:mr-[30px]">
          <h3 className="title text-[#889F2D] my-5">Request A Quote</h3>
          <h2 className="heading mb-5 text-center lg:text-left">
            POWERING BUSINESSES <br /> TOWARDS NET ZERO!
          </h2>

          <p className="content text-[#3D3D3D] pt-6 text-left">
            We, PPS Energy Solutions Private Limited (PPSES), Pune, are the strategic organization for serving Energy and Power sectors...
          </p>
        </div>

        {/* ⭐ FORM STARTS HERE */}
        <div className="z-10">
          <form onSubmit={handleSubmit} className="p-8 bg-[#889F2D] text-white rounded-b-[10px] mt-5">
            <h2 className="mb-8 heading text-center">Get Your Quote Today!</h2>

            {/* ⭐ Display messages */}
            {successMsg && <p className="bulletPoints text-[#ffffff] text-center mb-4">{successMsg}</p>}
            {errorMsg && <p className="text-red-300 text-center mb-4 bulletPoints">{errorMsg}</p>}

            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg mb-6"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg mb-6"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg mb-6"
              required
            />

            <textarea
              name="message"
              placeholder="Requirement"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-lg mb-6"
              rows="4"
              required
            ></textarea>

            <button type="submit" className="buttonGreenBG justify-center">
              Request A Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
