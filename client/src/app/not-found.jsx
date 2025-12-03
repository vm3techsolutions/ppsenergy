import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[200px] text-[#889F2D] font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-3 heading">Page Not Found</h2>
      <p className="mt-2 mb-10 text-gray-600 content">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      {/* <a
        href="/"
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        Go Back Home
      </a> */}
      <Link href="/"><button className="button">Go Back Home</button></Link>
    </div>
  );
}
