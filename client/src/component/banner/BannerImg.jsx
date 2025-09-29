"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";


const bannerImageMap = {
//    "/": "/assets/home/HomeBannerImage.png",
}


export default function BannerImage() {
  const pathname = usePathname();

  // Fallback image in case path not matched
  const bannerSrc = bannerImageMap[pathname] || "/assets/banners/default.png";

  return (
    <></>
    // <div className="w-full bg-white flex justify-center items-center">
    //   <div>
    //     <Image
    //       src={bannerSrc}
    //       alt="Banner"
    //       width={933}
    //       height={512}
    //       className="object-cover sm:w-[215vh] sm:h-[80vh]"
    //     />
    //   </div>
    // </div>
  );
}

