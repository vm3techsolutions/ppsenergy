"use client"

import React from "react";
import Link from "next/link";
import { MdSunny } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";
import { IoIosWater } from "react-icons/io";


export default function AboutUsFirst () {
    return(
        <>
        <div className="common-section text-center flex flex-col justify-center">

            <div className="pb-2">
            <h3 className="title pb-2  text-[#889F2D]">About Us</h3>
            <h2 className="center-section-heading pb-2 tex">DRIVEN BY INNOVATION, COMMITTED TO SUSTAINABILITY</h2>
            <p className="content text-[#3D3D3D]">The strategic organization especially formulated for serving Energy and Power sectors, with proven experience</p>
            </div>
            

             <div className="flex justify-center gap-40 mt-6">
                <div>
                    <MdSunny className='text-center text-8xl w-full text-[#7B0000]'/>
                    <h2 className="title text-[#3D3D3D] mt-2">Solar Energy</h2>
                </div>

                <div>
                    <IoIosWater className='text-center text-8xl w-full text-[#7B0000]'/>
                    <h2 className="title text-[#3D3D3D] mt-2">Water Energy</h2>
                </div>

                <div>
                    <RiRecycleFill  className='text-center text-8xl w-full text-[#7B0000]'/>
                    <h2 className="title text-[#3D3D3D] mt-2">Wind Energy</h2>
                </div>

            </div>

        </div>
        
        </>
    )
}