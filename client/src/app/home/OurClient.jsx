// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// export default function OurClient() {
//     const [client, setClient] = useState([]);

//    useEffect(() => {
//       fetch("/data/ourclients/OurClients.json")
//         .then((res) => res.json())
//         .then((data) => setClient(data))
//         .catch((err) => console.error(err));
//     }, []);
  

//   return (
//     <section className="common-section flex flex-col justify-center">
//       <div className="text-center mb-10">
//         <h3 className="title text-[#889F2D]">Our Valued Client</h3>
//         <h2 className="center-section-heading">
//         EMPOWERING ORGANIZATIONS THAT BELIEVE IN <br /> SUSTAINABLE PROGRESS
//         </h2>
//       </div>

//       {/* Client Carousel */}
//       <div className="w-full px-6">
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,}}
//           loop={true}
//           grabCursor={true}
//           spaceBetween={30}
//           centeredSlides={false}
//           slidesPerView={5} // default for desktop
//           breakpoints={{
//             0: {
//               slidesPerView: 2, // Mobile
//               spaceBetween: 20,
//             },
//             640: {
//               slidesPerView: 3, // Tablet
//               spaceBetween: 25,
//             },
//             1024: {
//               slidesPerView: 5, // Desktop
//               spaceBetween: 30,
//             },
//           }} >
//           {clientImage.map((src, i) => (
//             <SwiperSlide key={i} className="flex justify-center">
//               {client.map((item) => (
//                   <div
//                     key={item.id}
//                   >
//                     {/* Fixed-height wrapper */}
//                     <div className="h-[100px] lg:h-[150px] w-full flex items-center justify-center">
//                       <Image
//                         src={item.logo}
//                         alt={item.name}
//                         width={180}
//                         height={100}
//                         className="max-h-full w-auto object-contain transition-all duration-300"
//                       />
//                     </div>
//                   </div>
//                 ))}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="flex justify-center pb-[50px]">
//        <Link href="/about/our-clients">
//             <button className="button mt-7 mb-4">Explore More</button>
//           </Link>
//           </div>
//     </section>
//   );
// }



"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurClient() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("/data/ourclients/OurClients.json")
      .then((res) => res.json())
      .then((data) => setClient(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="common-section flex flex-col justify-center">
      <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Our Valued Client</h3>
        <h2 className="center-section-heading">Empowering organizations that believe in <br /> sustainable progress</h2>
      </div>

      {/* Client Carousel */}
      <div className="w-full px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          grabCursor
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 6, spaceBetween: 30 },
          }}
        >
          {client.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              {/* Fixed-height wrapper for equal logo height */}
              <div className="h-[100px] lg:h-[150px] w-full flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={180}
                  height={100}
                  className="max-h-full w-auto object-contain transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center pb-[50px]">
        <Link href="/about/our-clients">
          <button className="button mt-7 mb-4">Explore More</button>
        </Link>
      </div>
    </section>
  );
}
