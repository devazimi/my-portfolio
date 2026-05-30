"use client";

import { LuBriefcaseBusiness } from "react-icons/lu";

export default function HomePage() {
  return (
    <div className="max-w-full">
      <div className="w-[1200px] m-auto border">
        {/* header */}
        <header className="flex flex-col w-full p-5 gap-1 mt-10">
          <div className="flex flex-row gap-1 items-center">
            <LuBriefcaseBusiness className="text-secondTextColor text-2xl" />
            <p className="text-secondTextColor text-base font-bold">
              My Personal Portfolio
            </p>
          </div>
          <h1 className="font-extrabold text-6xl leading-relaxed [word-spacing:2]">
            React & Next.js Developer focused on logic, performance and
            scalability.
          </h1>
          <div className="flex flex-row justify-between mt-20">
            <p className="w-md text-secondTextColor text-paragraph [word-spacing:5] leading-relaxed">
              Frontend Developer passionate about building modern, scalable, and
              user-friendly web applications. I specialize in React and Next.js,
              with a strong focus on clean architecture, problem solving, and
              maintainable code. I enjoy turning ideas into responsive and
              efficient digital experiences while continuously learning and
              improving my skills.
            </p>
            {/* <div className="flex flex-col">
              <div className="flex flex-row">
                <div className=""></div>
              </div>
            </div> */}
          </div>
        </header>
      </div>
    </div>
  );
}
