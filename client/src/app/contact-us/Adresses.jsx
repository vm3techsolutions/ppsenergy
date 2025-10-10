import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Adresses() {
  return (
    <section className='common-section flex flex-col'>
        <div className="text-center mb-10 section">
        <h3 className="title text-[#889F2D]">Get in Touch</h3>
      </div>

{/* 1st Box */}
<div class="flex justify-center items-center ">
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10'>

            <div className="flex flex-col gap-2 lg:gap-6 group  items-center p-10 shadow-2xl rounded-b-[10px]">
                        <div className="  ">
                        <FaEnvelope  className="text-[#7B0000]  text-[25px] lg:text-[40px]   p-1 transition-transform duration-300 ease-in-out group-hover:scale-110"/></div>
                        <div className="flex flex-col gap-y-2 items-center">
                            <p className="content"><span className="contact-heading">Office Phone :</span> +91-20-25230134 </p>
                            <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> +91-8308327696</p>
                        </div>
                    </div>

            <div className="flex flex-col gap-2 lg:gap-6 group  items-center p-10 shadow-2xl rounded-b-[10px]"> 
                        <div className="">
                        <FaPhone className="text-[#7B0000] text-[25px] lg:text-[40px] p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col gap-y-2 items-center">
                            <p className="content"><span className="contact-heading">Office Email Id :</span> office@ppsenergy.in</p>
                            <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> ravi@ppsenergy.in</p>
                        </div>
                    </div>
            
        </div>
        </div>

        {/* 2nd Box */}
        <div class="flex justify-center items-center  mt-[60px]">
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 '>

            <div className="flex flex-col gap-2 lg:gap-6 group  items-center p-10 shadow-2xl rounded-b-[10px]">
                        <div className="  ">
                        <FaMapMarkerAlt className="text-[#7B0000]  text-[25px] lg:text-[40px]  p-1  transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col gap-y-2 text-center ">
                            <p className="content"><span className="contact-heading">Regd. Office :</span> B-403, Bharti Vihar, S.No-78, Bharti Vidyapith Campus, Katraj, Pune - 411046</p>
                        </div>
                    </div>

            <div className="flex flex-col gap-2 lg:gap-6 group  items-center p-10 shadow-2xl rounded-b-[10px]"> 
                        <div className="">
                        <FaMapMarkerAlt className="text-[#7B0000]  text-[25px] lg:text-[40px]  p-1  transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col gap-y-2 text-center">
                            <p className="content"><span className="contact-heading">Office Address :</span> 18, 3rd Floor, Ashirwad Building, Girish Society, Warje, Pune - 411058</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:gap-6 group  items-center p-10 shadow-2xl rounded-b-[10px]"> 
                        <div className="">
                        <FaMapMarkerAlt className="text-[#7B0000]  text-[25px] lg:text-[40px]  p-1  transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col gap-y-2 text-center">
                            <p className="content"><span className="contact-heading">Corporate Office :</span> BAIF Bhavan, Dr. Manibhai Desai Nagar, Warje, Pune - 411058</p>
                        </div>
                    </div>
            
        </div>
        </div>

    </section>
  )
}
