// 'use client';
// import React from 'react'
// import { FaPhone } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Adresses() {
//   return (
//     <section className='common-section flex flex-col'>
//         <div className="text-center mb-10 section">
//         <h3 className="title text-[#889F2D]">Get in Touch</h3>
//         </div>

// {/* 1st Box */}
//         <div className="flex justify-center items-center ">
            
//         <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10  '>
// {/* box-1 */}
//       <motion.div
//           initial={{ opacity: 0, y: -100 }} //slide in top
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.05,
//             // boxShadow: "0 0 25px #7B0000, 0 0 45px #889F2D",
//           }}
//           className=" transition-all">
//         <div className="flex flex-col gap-2 lg:gap-2 group  items-center p-10 shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
//             <FaEnvelope  className="text-[#7B0000] text-[65px] lg:text-[65px] p-3 rounded-[5px] hover:shadow-2xl "/>
//             <p className="content mt-2"><span className="contact-heading">Office Phone :</span> +91-20-25230134 </p>
//             <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> +91-8308327696</p>
//         </div>
//           </motion.div>

// {/* box-2 */}
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.05,
//             // boxShadow: "0 0 25px #7B0000, 0 0 45px #889F2D",
//           }}
//           className=" transition-all">
//         <div className="flex flex-col gap-2 lg:gap-2 group  items-center p-10 shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300"> 
//             <FaPhone className="text-[#7B0000] text-[65px] lg:text-[65px] p-3 rounded-[5px] hover:shadow-2xl "/>
//             <p className="content mt-2"><span className="contact-heading">Office Email Id :</span> office@ppsenergy.in</p>
//             <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> ravi@ppsenergy.in</p>
//         </div>
//         </motion.div>
            
    
//         </div>
//         </div>

//         {/* 2nd Box */}
//   {/* 2nd Row */}
//       <div className="flex justify-center items-stretch mt-[60px] text-center">
//         <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 w-full'>
//           {/* Box 3 */}
         
//          <motion.div
//           initial={{ opacity: 0, x: -100 }}  // Slide from left
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.05,
//             // boxShadow: "0 0 25px #7B0000, 0 0 45px #889F2D",
//           }}
//           className=" transition-all">
//             <div className="flex flex-col justify-between items-center p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
//               <FaMapMarkerAlt className="text-[#7B0000] text-[65px] p-3 rounded-[5px] hover:shadow-2xl" />
//               <p className="content text-center"><span className="contact-heading">Regd. Office :</span> B-403, Bharti Vihar, S.No-78, Bharti Vidyapith Campus, Katraj, Pune - 411046</p>
//             </div>
//             </motion.div>
          

//           {/* Box 4 */}
       
//        <motion.div
//           initial={{ opacity: 0, y: 100 }}  // Slide from bottom
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.05,
//             // boxShadow: "0 0 25px #7B0000, 0 0 45px #889F2D",
//           }}
//           className=" transition-all">
//             <div className="flex flex-col justify-between items-center p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
//               <FaMapMarkerAlt className="text-[#7B0000] text-[65px] p-3 rounded-[5px] hover:shadow-2xl" />
//               <p className="content text-center"><span className="contact-heading">Office Address :</span> 18, 3rd Floor, Ashirwad Building, Girish Society, Warje, Pune - 411058</p>
//             </div>
//             </motion.div>
        

//           {/* Box 5 */}
       
//        <motion.div
//           initial={{ opacity: 0, x: 100 }}  // Slide from right
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.05,
//             // boxShadow: "0 0 25px #7B0000, 0 0 45px #889F2D",
//           }}
//           className=" transition-all">
//             <div className="flex flex-col justify-between items-center p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
//               <FaMapMarkerAlt className="text-[#7B0000] text-[65px] p-3 rounded-[5px] hover:shadow-2xl" />
//               <p className="content text-center"><span className="contact-heading">Corporate Office :</span> BAIF Bhavan, Dr. Manibhai Desai Nagar, Warje, Pune - 411058</p>
//             </div>
//             </motion.div>
        
//         </div>
//       </div>

//     </section>
//   )
// }



'use client';
import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Adresses() {
  return (
    <section className='common-section flex flex-col px-4 sm:px-6 lg:px-20'>
      <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D] text-2xl sm:text-3xl lg:text-4xl font-semibold">Get in Touch</h3>
      </div>

      {/* 1st Row */}
      <div className="flex justify-center items-stretch">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 '>
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="transition-all h-full"
          >
            <div className="flex flex-col justify-between items-center p-8 sm:p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
              <FaEnvelope className="text-[#7B0000] text-5xl sm:text-[65px] p-3 rounded-[5px] hover:shadow-2xl transition-shadow duration-300"/>
              <div className="text-center mt-4">
                <p className="content"><span className="contact-heading">Office Phone :</span> +91-20-25230134</p>
                <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> +91-8308327696</p>
              </div>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="transition-all h-full"
          >
            <div className="flex flex-col justify-between items-center p-8 sm:p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
              <FaPhone className="text-[#7B0000] text-5xl sm:text-[65px] p-3 rounded-[5px] hover:shadow-2xl transition-shadow duration-300"/>
              <div className="text-center mt-4">
                <p className="content"><span className="contact-heading">Office Email Id :</span> office@ppsenergy.in</p>
                <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> ravi@ppsenergy.in</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="flex justify-center items-stretch mt-10">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full'>
          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="transition-all h-full"
          >
            <div className="flex flex-col justify-between items-center p-8 sm:p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
              <FaMapMarkerAlt className="text-[#7B0000] text-5xl sm:text-[65px] p-3 rounded-[5px] hover:shadow-2xl transition-shadow duration-300"/>
              <p className="content text-center mt-4"><span className="contact-heading">Regd. Office :</span> B-403, Bharti Vihar, S.No-78, Bharti Vidyapith Campus, Katraj, Pune - 411046</p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="transition-all h-full"
          >
            <div className="flex flex-col justify-between items-center p-8 sm:p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
              <FaMapMarkerAlt className="text-[#7B0000] text-5xl sm:text-[65px] p-3 rounded-[5px] hover:shadow-2xl transition-shadow duration-300"/>
              <p className="content text-center mt-4"><span className="contact-heading">Office Address :</span> 18, 3rd Floor, Ashirwad Building, Girish Society, Warje, Pune - 411058</p>
            </div>
          </motion.div>

          {/* Box 5 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="transition-all h-full"
          >
            <div className="flex flex-col justify-between items-center p-8 sm:p-10 h-full shadow-lg rounded-b-[10px] hover:shadow-[0_0_15px_#889F2D] transition-shadow duration-300">
              <FaMapMarkerAlt className="text-[#7B0000] text-5xl sm:text-[65px] p-3 rounded-[5px] hover:shadow-2xl transition-shadow duration-300"/>
              <p className="content text-center mt-4"><span className="contact-heading">Corporate Office :</span> BAIF Bhavan, Dr. Manibhai Desai Nagar, Warje, Pune - 411058</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
