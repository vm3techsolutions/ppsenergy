// "use client";
// import React, { useState } from "react";

// export default function QuoteModal({ open, onClose }) {
//   if (!open) return null;

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Quote form submitted:", form);
//     onClose(); // Close modal after submit
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       onClick={onClose} >
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative"
//       onClick={(e) => e.stopPropagation()}  >

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-[#7b0000] hover:text-#889F2D text-xl font-bold" >
//           ✕
//         </button>

//         <h2 className="title text-[#889F2D] text-center">
//           Request a Quote
//         </h2>
//          <h2 className="center-section-heading mb-6 text-center text-black">Get Your Quote Today!</h2>

//         <form
//           onSubmit={handleSubmit}
//           className="p-6 rounded-xl text-white mt-6 border border-[#889F2D] bg-white"  >
         

//           <input
//             type="text"
//             name="name"
//             placeholder="Name*"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg mb-4 text-black bg-[#f8f8f8]"
//             required />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Mobile"
//             value={form.phone}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
//             required/>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
//             required />

//           <textarea
//             name="message"
//             placeholder="Requirement"
//             value={form.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
//             required/>

//           <button
//             type="submit"
//             className="button w-full py-3 rounded-lg text-white" >
//             Request A Quote
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

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

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit");
      }

      console.log("Form submitted:", data);
      setSuccessMsg("✅ Your form has been submitted successfully!");

      // Reset form fields
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMsg(error.message);
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#7b0000] hover:text-[#889F2D] text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="title text-[#889F2D] text-center">Request a Quote</h2>
        <h2 className="center-section-heading mb-6 text-center text-black">
          Get Your Quote Today!
        </h2>

        {errorMsg && (
          <p className="text-red-600 text-center mb-3">{errorMsg}</p>
        )}
        {successMsg && (
          <p className="text-green-600 text-center mb-3">{successMsg}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl text-white mt-6 border border-[#889F2D] bg-white"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg mb-4 text-black bg-[#f8f8f8]"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
            required
          />

          <textarea
            name="message"
            placeholder="Requirement"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="button w-full py-3 rounded-lg text-white flex justify-center items-center"
          >
            {loading ? "Sending..." : "Request A Quote"}
          </button>
        </form>
      </div>
    </div>
  );
}


// "use client";
// import React, { useState } from "react";

// export default function QuoteModal({ open, onClose }) {
//   if (!open) return null;

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg("");

//     try {
//       const res = await fetch("http://localhost:5000/api/submit-form", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to submit");
//       }

//       console.log("Form submitted:", data);

//       onClose(); // Close modal after success
//     } catch (error) {
//       console.error("Submit error:", error);
//       setErrorMsg(error.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-[#7b0000] hover:text-[#889F2D] text-xl font-bold"
//         >
//           ✕
//         </button>

//         <h2 className="title text-[#889F2D] text-center">Request a Quote</h2>
//         <h2 className="center-section-heading mb-6 text-center text-black">
//           Get Your Quote Today!
//         </h2>

//         {errorMsg && (
//           <p className="text-red-600 text-center mb-3">{errorMsg}</p>
//         )}

//         <form
//           onSubmit={handleSubmit}
//           className="p-6 rounded-xl text-white mt-6 border border-[#889F2D] bg-white"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Name*"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg mb-4 text-black bg-[#f8f8f8]"
//             required
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Mobile"
//             value={form.phone}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Requirement"
//             value={form.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-3 rounded-lg mb-4 text-black  bg-[#f8f8f8]"
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="button w-full py-3 rounded-lg text-white flex justify-center items-center"
//           >
//             {loading ? "Sending..." : "Request A Quote"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
