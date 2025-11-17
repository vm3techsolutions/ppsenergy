

import Link from "next/link";
import articles from "../../../../../public/data/home/RecentArticlesDetails.json";
import Image from "next/image";
import { ArrowLeft } from 'lucide-react';

export default async function Page({ params }) {
  const resolvedParams = await params; // ← correct way for Next.js 15+
  const { slug } = resolvedParams;

  const article = articles.find(
    (a) =>
      String(a.article_id) === slug ||
      (a.slug && a.slug.toLowerCase() === slug.toLowerCase())
  );

  if (!article) {
    return <div className="p-10 text-center text-red-500">Blog not found</div>;
  }

  return (
    <section className="common-section">
      <h2 className="center-section-heading text-center mb-10">
        {article.article_title}
      </h2>

      <Image
        src={article.article_image}
        alt={article.article_title}
        width={800}
        height={400}
        className="w-full h-auto mb-6"
      />

      <div className="mb-10">
        <p className="content text-[#3D3D3D] mb-4">
          {article.article_description}
        </p>

        <p className="content">{article.adding_just_for_test}</p>
      </div>


<Link href="/insights/blogs">
 
      <button className="button flex "> <ArrowLeft size={20} className="mr-2 " />  Back to Blogs</button>
</Link>
    </section>
  );
}
