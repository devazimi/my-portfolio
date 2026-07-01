"use client";

import Link from "next/link";
import GallerySlider from "./Swiper";

const projects = [
  {
    id: 1,
    link: "https://pasjeld.vercel.app",
    title: "Pasjeld Book Store",
    hero: "Pasjeld – Online Book Shopping Platform",
    desc: "Pasjeld is a modern full-stack bookstore application built with Next.js, React, and TypeScript. It leverages Prisma ORM with LibSQL/Turso for database management, NextAuth.js for secure authentication, bcryptjs for password security, and Zod for data validation. The user interface is crafted with Tailwind CSS and React Icons, delivering a responsive, scalable, and user-friendly experience for browsing, managing, and purchasing books.",
  },
  {
    id: 2,
    link: "https://rankupquiz.vercel.app",
    title: "Rankup Quiz Platform",
    hero: "Programming Knowledge Testing System",
    desc: "A full-stack programming quiz application built with Next.js, React, and TypeScript. The project utilizes Prisma ORM with LibSQL for efficient database management, NextAuth.js and bcryptjs for secure user authentication, and Zod for robust data validation. The user interface is developed using Material UI (MUI), Tailwind CSS, Emotion, and React Icons, providing a modern, responsive, and intuitive experience for creating, managing, and taking programming quizzes.",
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
              <Link 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer">
                <button className="w-50 h-10 bg-btn-dark text-sm text-btn-light p-1 rounded-md interactive-btn-to-light">
                VISIT PROJECT ONLINE
              </button>
              </Link>
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
