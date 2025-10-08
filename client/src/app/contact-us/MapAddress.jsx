import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidMap } from "react-icons/bi";

export default function MapAddress() {
  return (
    <section className="common-section grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* Map */}
      <div className="w-full h-[350px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7569.070505351922!2d73.85496849829174!3d18.45939882936651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sB-403%2C%20Bharti%20Vihar%2C%20S.No-78%2C%20Bharti%20Vidyapith%20Campus%2C%20Katraj%2C%20Pune%20-%20411046!5e0!3m2!1sen!2sin!4v1759912342892!5m2!1sen!2sin"
          className="w-full h-full border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1HJEG0hbrHDM3k-epT5P4ia95EkKovp4&ehbc=2E312F&noprof=1" width="640" height="600" className="w-full h-full rounded-lg"
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>

{/* Adrees Section */}
      <div className="flex flex-col justify-center gap-y-6 lg:ml-[25px]">

        <div className="flex gap-2 lg:gap-6 group"> 
            <div className="border-[2px] h-fit rounded-[5px] mt-[5px]">
            <FaPhone className="text-[#7B0000] text-[25px] lg:text-[40px] p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" />
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="content"><span className="contact-heading">Office Email Id :</span> office@ppsenergy.in</p>
                <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> ravi@ppsenergy.in</p>
            </div>
        </div>



        <div className="flex gap-2 lg:gap-6 group">
            <div className="border-[2px] h-fit rounded-[5px] mt-[5px]">
            <FaEnvelope  className="text-[#7B0000]  text-[25px] lg:text-[40px]   p-1 transition-transform duration-300 ease-in-out group-hover:scale-110"/></div>
            <div className="flex flex-col gap-y-2">
                <p className="content"><span className="contact-heading">Office Phone :</span> +91-20-25230134 </p>
                <p className="content"><span className="contact-heading">Dr. Ravi Deshmukh :</span> +91-8308327696</p>
            </div>
        </div>



        <div className="flex gap-2 lg:gap-6 group">
            <div className="border-[2px] h-fit rounded-[5px] mt-[5px]">
                <FaMapMarkerAlt className="text-[#7B0000]  text-[25px] lg:text-[40px]  p-1  transition-transform duration-300 ease-in-out group-hover:scale-110" />
            </div>
            
            <div className="flex flex-col gap-y-2">
                <p className="content"><span className="contact-heading">Regd. Office :</span> B-403, Bharti Vihar, S.No-78, Bharti Vidyapith Campus, Katraj, Pune - 411046</p>
                <p className="content"><span className="contact-heading">Office Address :</span> 18, 3rd Floor, Ashirwad Building, Girish Society, Warje, Pune - 411058</p>
                <p className="content"><span className="contact-heading">Corporate Office :</span> BAIF Bhavan, Dr. Manibhai Desai Nagar, Warje, Pune - 411058</p>
            </div>
        </div>

      </div>

    

    </section>
  );
}
