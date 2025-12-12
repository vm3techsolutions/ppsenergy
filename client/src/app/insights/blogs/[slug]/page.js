


// import Link from "next/link";
// import articles from "../../../../../public/data/home/RecentArticlesDetails.json";
// import Image from "next/image";
// import { ArrowLeft } from "lucide-react";

// export default async function Page({ params }) {
//   const resolvedParams = await params; // Next.js 15+ requirement
//   const { slug } = resolvedParams;

//   // Find article by ID or slug
//   const article = articles.find(
//     (a) =>
//       String(a.article_id) === slug ||
//       (a.slug && a.slug.toLowerCase() === slug.toLowerCase())
//   );

//   if (!article) {
//     return (
//       <div className="p-10 text-center text-red-500">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <section className="common-section px-4 lg:px-0 lg:mx-[100px]">

//       {/* Banner Image */}
//       <Image
//         src={article.article_image}
//         alt={article.title}
//         width={1200}
//         height={600}
//         className="w-full h-auto lg:w-[1200px] lg:h-[550px] object-cover rounded-lg mx-auto lg:mb-10 mb-5"
//       />

//       {/* Main Title */}
//       <h2 className="center-section-heading text-center mb-10">
//         {article.title}
//       </h2>

//       {/* Description */}
//       <div className="mb-10">
//         <p className="content text-[#3D3D3D] mb-6">
//           {article.description}
//         </p>

//         {/* Section 1 */}
//         <h3 className="process-bullet-section-heading mb-2">
//           {article.title1}
//         </h3>
//         <p className="bulletPoints mb-3">
//           {article.title1_description}
//         </p>

//         {article.title1_points?.length > 0 && (
//           <ul className="list-disc ml-6 mb-8">
//             {article.title1_points.map((point, index) => (
//               <li key={index} className="text-[#3D3D3D] mb-2">
//                 {point}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Section 2 */}
//         <h3 className="process-bullet-section-heading mb-2">
//           {article.title2}
//         </h3>
//         <p className="bulletPoints mb-3">
//           {article.title2_description}
//         </p>

//         {article.title2_points?.length > 0 && (
//           <ul className="list-disc ml-6 mb-8">
//             {article.title2_points.map((point, index) => (
//               <li key={index} className="text-[#3D3D3D] mb-2">
//                 {point}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Section 3 */}
//         <h3 className="process-bullet-section-heading mb-2">
//           {article.title3}
//         </h3>
//         <p className="bulletPoints mb-6">
//           {article.title3_description}
//         </p>
//       </div>

//       {/* Back Button */}
//       <div className="mt-6">
//         <Link href="/insights/blogs">
//           <button className="button flex items-center">
//             <ArrowLeft size={20} className="mr-2" />
//             Back to Blogs
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import articles from "../../../../../public/data/home/RecentArticlesDetails.json";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const article = articles.find(
    (a) =>
      String(a.article_id) === slug ||
      (a.slug && a.slug.toLowerCase() === slug.toLowerCase())
  );

  if (!article) {
    return <div className="p-10 text-center text-red-500">Blog not found</div>;
  }

  // Extract all dynamic titles (title1, title2, title3...)
  const sections = Object.keys(article)
    .filter((key) => key.startsWith("title") && key !== "title")
    .map((key) => {
      const number = key.replace("title", "");
      return {
        title: article[key],
        description: article[`title${number}_description`] || "",
        points: article[`title${number}_points`] || []
      };
    });

  return (
    <section className="common-section px-4 lg:px-0 lg:mx-[100px]">

      <Image
        src={article.article_image}
        alt={article.title}
        width={1200}
        height={600}
        className="w-full h-auto lg:w-[1200px] lg:h-[550px] object-cover rounded-lg mx-auto lg:mb-10 mb-5"
      />

      <h2 className="center-section-heading text-center mb-10">
        {article.title}
      </h2>

      <p className="content text-[#3D3D3D] mb-8">{article.description}</p>

      {/* AUTO-RENDER ALL SECTIONS */}
      {sections.map((sec, idx) => (
        <div key={idx} className="mb-10">
          {sec.title && (
            <h3 className="process-bullet-section-heading mb-2">{sec.title}</h3>
          )}

          {sec.description && (
            <p className="bulletPoints mb-3">{sec.description}</p>
          )}

          {sec.points?.length > 0 && (
            <ul className="list-disc ml-6 mb-4">
              {sec.points.map((point, i) => (
                <li key={i} className="text-[#3D3D3D] mb-2">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* CONCLUSION */}
      {article.conclusion_title && (
        <>
          <h3 className="process-bullet-section-heading mb-2">
            {article.conclusion_title}
          </h3>
          <p className="content text-[#3D3D3D] mb-8">
            {article.conclusion_description}
          </p>
        </>
      )}

      <div className="mt-6">
        <Link href="/insights/blogs">
          <button className="button flex items-center">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blogs
          </button>
        </Link>
      </div>
    </section>
  );
}
