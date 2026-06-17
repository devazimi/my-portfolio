"use client";

import Link from "next/link";
import GallerySlider from "./Swiper";

const projects = [
  {
    id: 1,
    link: "#",
    title: "Pasjeld Book Store",
    hero: "Pasjeld – Online Book Shopping Platform",
    desc: "Pasjeld is a modern full-stack e-commerce bookstore application developed using Next.js, TypeScript, Tailwind CSS, Prisma, SQLite, NextAuth, and Zod, providing secure user authentication, robust data validation, efficient database management, and a responsive user experience for discovering and purchasing books.",
  },
  {
    id: 2,
    link: "#",
    title: "Programming Quiz Platform",
    hero: "Programming Knowledge Testing System",
    desc: "A web-based programming quiz application that allows users to test their coding knowledge through multiple-choice questions, track their progress, and improve their problem-solving skills in an interactive environment.",
  },
];

export default function Main() {
  return (
    <main className="flex flex-col w-full my-20 gap-5">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col w-full mb-8 gap-5">
          {/* Project Link */}
          <div className="flex flex-row items-center gap-10">
            <Link
              className="font-bold text-secondTextColor text-lg interactive-bg-dark"
              href={project.link}
            >
              {project.title}
            </Link>
            <hr className="hidden sm:block flex-1 border-border" />
          </div>

          {/* Project Presentation */}
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
            <h6 className="w-full md:w-md font-black text-baseTextColor text-4xl">
              {project.hero}
            </h6>
            <div className="flex flex-col w-full md:w-md gap-3">
              <p className="text-secondTextColor">{project.desc}</p>
              <button className="w-50 h-10 bg-btn-dark text-sm text-btn-light p-1 rounded-md interactive-btn-to-light">
                VISIT PROJECT ONLINE
              </button>
            </div>
          </div>
          <div className="my-1">
            <GallerySlider id={project.id} />
          </div>
        </div>
      ))}
    </main>
  );
}
