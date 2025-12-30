import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidMap } from "react-icons/bi";

export default function MapAddress() {
  return (
    <section className="common-section lg:mt-[-50px] ">
      
      {/* Map */}
      <div className="w-full h-[350px] lg:h-[600px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30271.70136684168!2d73.807566!3d18.48535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfda1da46fb7%3A0x36784f9e11a8ca94!2sGirish%20Society%2C%20Warje%20Jakat%20Naka%2C%20Warje%2C%20Pune%2C%20Maharashtra%20411058!5e0!3m2!1sen!2sin!4v1760105673096!5m2!1sen!2sin"
          className="w-full h-full border-0 rounded-lg "
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
      {/* <div className="flex flex-col justify-center gap-y-6 lg:ml-[25px]">

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

      </div> */}

    

    </section>
  );
}
