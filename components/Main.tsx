"use client";

import Link from "next/link";
import GallerySlider from "./Swiper";

export default function Main() {
  return (
    <main className="flex flex-col w-full my-20 gap-5">
      {/* Project Link */}
      <div>
        <Link
          className="font-bold text-secondTextColor text-lg interactive-bg-dark"
          href={"#"}
        >
          Pasjeld Book Store
        </Link>
      </div>

      {/* Project Presentation */}
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <h6 className="w-full md:w-md font-black text-baseTextColor text-4xl">
          Pasjeld – Online Book Shopping Platform
        </h6>
        <div className="flex flex-col w-full md:w-md gap-3">
          <p className="text-secondTextColor">
            Pasjeld is a modern full-stack e-commerce bookstore application
            developed using Next.js, TypeScript, Tailwind CSS, Prisma, SQLite,
            NextAuth, and Zod, providing secure user authentication, robust data
            validation, efficient database management, and a responsive user
            experience for discovering and purchasing books.
          </p>
          <button className="w-50 h-10 bg-btn-dark text-sm text-btn-light p-1 rounded-md interactive-btn-to-light">
            VISIT PROJECT ONLINE
          </button>
        </div>
      </div>
      <div className="my-1">
        <GallerySlider />
      </div>
    </main>
  );
}
