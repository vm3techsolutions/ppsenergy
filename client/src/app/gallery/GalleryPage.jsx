

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// export default function GalleryPage() {
//   const [galleryImages, setGalleryImages] = useState([]);

//   useEffect(() => {
//     fetch("/data/gallery/Gallery.json")
//       .then((res) => res.json())
//       .then((data) => setGalleryImages(data));
//   }, []);

//   return (
//     <section className="common-section flex flex-col justify-center bg-[#F9FAFB]">
//       <div className="text-center mb-10">
//         <h3 className="center-section-heading text-[#889F2D]">Our Gallery</h3>
//         {/* <h2 className="center-section-heading">PROJECT HIGHLIGHTS</h2> */}
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {galleryImages.map((img) => (
//           <div
//             key={img.id}
//             className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300"
//           >
//             <Image
//               src={img.image}
//               alt={img.title}
//               width={600}
//               height={400}
//               className="w-full h-[250px] object-cover hover:scale-110 transition duration-300"
//             />

//             {/* <div className="px-4 py-3">
//               <h3 className="text-[#889F2D] font-semibold text-lg border-b border-[#889F2D] pb-2">
//                 {img.title}
//               </h3>
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch("/data/gallery/Gallery.json")
      .then((res) => res.json())
      .then((data) => setGalleryImages(data));
  }, []);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="common-section flex flex-col justify-center bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <h3 className="center-section-heading text-[#889F2D]">Our Gallery</h3>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* {galleryImages.map((img, index) => (
          <div
            key={img.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img.image}
              alt={img.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))} */}
        {galleryImages.map((img, index) => (
  <div
    key={img.id || index}
    className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-[0_0_25px_#889F2D] transition-shadow duration-300 cursor-pointer"
    onClick={() => openLightbox(index)}
  >
    <Image
      src={img.image}
      alt={img.title}
      width={600}
      height={400}
      className="w-full h-[250px] object-cover hover:scale-110 transition duration-300"
    />
  </div>
))}
      </div>

      {/* Lightbox Popup */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white"
            onClick={closeLightbox}
          >
            <X size={35} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-5 text-white"
            onClick={showPrev}
          >
            <ChevronLeft size={45} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh]">
            <Image
              src={galleryImages[selectedIndex].image}
              alt="Preview"
              width={1000}
              height={800}
              className="w-auto h-auto max-h-[80vh] mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-5 text-white"
            onClick={showNext}
          >
            <ChevronRight size={45} />
          </button>
        </div>
      )}
    </section>
  );
}
