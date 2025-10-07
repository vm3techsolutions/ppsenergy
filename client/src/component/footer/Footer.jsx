import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <section className=" flex flex-col bg-[#000000] ">

<div className='  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-10  mt-6 text-center lg:text-left px-[80px] pb-[35px] pt-[20px]'>
{/* Column 1 */}
      <div className="flex flex-col justify-evenly md:mr-10 lg:mr-20 items-center lg:items-start">

        <Link href="/">
        <Image
          src="/assets/home/PPSLogoHeader.png"
          alt="Logo"
          width={170}
          height={42}
          className="cursor-pointer bg-[#ffffff] p-4"
        />
      </Link>

      <p className="text-[#ffffff] content" >We are one of the accredited and empanelled energy auditing firms, engaged in Mandatory Energy Audit (MEA) and Measurement & Verification (M&V) under BEE (PAT) Scheme.</p>
      </div>

{/* Column 2 */}
      <div className="flex flex-col  ">
        <h3 className="text-[#ffffff]  title">Quick Links</h3>
        <ul className="list-none  text-white text-base space-y-2 mt-4">
        <li>Project</li>
        <li>About Us</li>
        <li>Insights</li>
        <li>Gallery</li>
        <li>Career</li>
        <li>Contact Us</li>
        </ul>
      </div>

{/* Column 3 */}
      <div className="flex flex-col  ">
        <h3 className="text-[#ffffff] title">Other Links</h3>
        <ul className="list-none  text-white text-base space-y-2 mt-4"> 
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        </ul>
      </div>

{/* Column 4 */}
      <div className='flex flex-col  justify-between '>
        <div className=' text-[#ffffff]  mb-6 pl-[20px] pr-[20px] lg:pl-[0px] lg:pr-[0px]'>
           <h3 className="text-[#ffffff] title">Get In Touch</h3>

          <div className='flex gap-4 mb-4 mt-4'>
            
            <p>Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

           <div className=' mb-4 mt-2'>
          <p>Phone: +91 12345 12345</p>
      
          </div>

           <div className=' mb-4 mt-2 '>
            <p>Email: salesppsenergy@gmail.com</p>
      
          </div>
        </div>

        <div className="flex  gap-4  text-[#000000] text-2xl text-center justify-center lg:justify-start ">
          <div className='border border-gray-300 rounded-[5px] p-1.5'>  <Link href="#"><FaFacebookF className=" rounded-full bg-[#ffffff]  p-1" /></Link>
          </div>
          
          <div className='border border-gray-300 rounded-[5px] p-1.5'>
            <Link href="#"><FaInstagram className=" rounded-full bg-[#ffffff]  p-1" /></Link>
          </div>
            
          <div className='border border-gray-300 rounded-[5px] p-1.5'>
            <Link href="#"><FaYoutube className=" rounded-full bg-[#ffffff]  p-1" /></Link>
          </div>

          <div className='border border-gray-300 rounded-[5px] p-1.5'>
            <Link href="#"><FaLinkedinIn className=" rounded-full bg-[#ffffff]  p-1" /></Link>
          </div>
      
          </div>
        
      </div>
      
</div>

<div className='text-center text-[#ffffff] bg-[#7B0000] py-1 '>
  <p className='py-2'>Designed & Development By: <Link href="https://vm3techsolution.com/plans/?v=212bd1cfe3fb"
   target="_blank">VM3 Tech Solutions LLP</Link> </p>
</div>
    </section> 
    
  )
}

