import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <section className=" flex flex-col bg-[#000000] ">

<div className='  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-10 mt-10 section'>
{/* Column 1 */}
      <div className="flex flex-col justify-evenly  ">

        <Link href="/">
        <Image
          src="/assets/home/PPSLogoHeader.png"
          alt="Logo"
          width={170}
          height={42}
          className="cursor-pointer bg-[#ffffff] p-4"/>
        </Link>

       <p className="text-[#ffffff] content mt-2" >We are one of the accredited and empanelled energy auditing firms, engaged in Mandatory Energy Audit (MEA) and Measurement & Verification (M&V) under BEE (PAT) Scheme.</p>
       </div>

{/* Column 2 */}
      <div className="flex flex-col  lg:ml-10">
        <h3 className="text-[#ffffff]  title">Quick Links</h3>
        <ul className="list-none  text-white text-base space-y-2 mt-4">
        <li><Link href="/projects">Project</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/insights">Insights</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/career">Career</Link></li>
        <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </div>

{/* Column 3 */}
      <div className="flex flex-col  ">
        <h3 className="text-[#ffffff] title">Other Links</h3>
        <ul className="list-none  text-white text-base space-y-2 mt-4"> 
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
        </ul>
      </div>

{/* Column 4 */}
      <div className='flex flex-col  justify-between '>
      <div className=' text-[#ffffff]  mb-6'>
      <h3 className="text-[#ffffff] title">Get In Touch</h3>

      <div className='flex gap-4 mb-4 mt-4'>
      <p>Address: 18, 3rd Floor, Ashirwad Building, Girish Society, Warje -411058</p>
      </div>

      <div className=' mb-4 mt-2'>
      <p><Link href="Phone: +91 12345 12345">Phone: +91 12345 12345</Link></p>
      </div>

      <div className=' mb-4 mt-2 '>
      <p><Link href="Email: salesppsenergy@gmail.com">Email: salesppsenergy@gmail.com</Link></p>
      </div>
      </div>

      <div className="flex  gap-4  text-[#000000] text-2xl justify-items-start mb-[30px] ">
      <div className='border border-gray-300 rounded-[5px] p-1.5 group'>  <Link href="#"><FaFacebookF className=" rounded-full bg-[#ffffff]  p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" /></Link>
      </div>
          
      <div className='border border-gray-300 rounded-[5px] p-1.5 group '>
      <Link href="#"><FaInstagram className=" rounded-full bg-[#ffffff]  p-1 transition-transform duration-300 ease-in-out group-hover:scale-110"  /></Link>
      </div>
            
      <div className='border border-gray-300 rounded-[5px] p-1.5 group'>
      <Link href="#"><FaYoutube className=" rounded-full bg-[#ffffff]  p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" /></Link>
      </div>

      <div className='border border-gray-300 rounded-[5px] p-1.5 group'>
      <Link href="#"><FaLinkedinIn className=" rounded-full bg-[#ffffff]  p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" /></Link>
      </div>
      </div>
      </div>
      </div>

      <div className='text-center text-[#ffffff] bg-[#7B0000] py-1 section '>
      <p className='py-2 '>Designed & Development By: <Link href="https://vm3techsolution.com/plans/?v=212bd1cfe3fb" target="_blank">VM3 Tech Solutions LLP</Link> </p></div>
    </section> 
    
  )
}

