"use client";

import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="max-w-full">
      <div className="w-full md:w-[900px] lg:w-[1200px] max-w-screen m-auto overflow-x-hidden">
        {/* header */}
        <header className="flex flex-col w-full p-2 md:p-5 gap-1 mt-10">
          <div className="flex flex-row gap-1 items-center">
            <LuBriefcaseBusiness className="text-secondTextColor text-2xl" />
            <p className="text-secondTextColor text-base font-bold">
              My Personal Portfolio
            </p>
          </div>
          <h1 className="font-extrabold text-2xl md:text-6xl leading-relaxed [word-spacing:2]">
            React & Next.js Developer focused on logic, performance and
            scalability.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row lg:justify-between mt-10 lg:mt-20">
            <p className="md:w-sm lg:w-md  text-secondTextColor text-base lg:text-paragraph [word-spacing:5] leading-relaxed p-2">
              Frontend Developer passionate about building modern, scalable, and
              user-friendly web applications. I specialize in React and Next.js,
              with a strong focus on clean architecture, problem solving, and
              maintainable code.
              <hr className="border-none mt-5" />I enjoy turning ideas into
              responsive and efficient digital experiences while continuously
              learning and improving my skills.
            </p>
            <div className="flex flex-col gap-5 p-2 items-center justify-center mt-10 md:mt-0">
              <div className="w-full flex justify-between gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-md md:text-xl text-secondTextColor" />
                    <h6 className="text-xs md:text-base font-bold text-secondTextColor">
                      GITHUB
                    </h6>
                  </div>
                  <p className="text-sm md:text-base text-thirdTextColor">
                    you can see my projects at github
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaLinkedin className="text-md md:text-xl text-secondTextColor" />
                    <h6 className="text-xs md:text-base font-bold text-secondTextColor">
                      LINKEDIN
                    </h6>
                  </div>
                  <p className="text-sm md:text-base text-thirdTextColor">
                    you can contact me at linkedin
                  </p>
                </div>
              </div>
              <form className="relative col-span-2 w-full" action="">
                <input
                  className="w-full h-12 sm:h-12 bg-input outline-none text-inputText text-xs sm:text-base pl-3 pr-25 rounded-sm"
                  type="text"
                  placeholder="contact me with a message"
                />
                <button
                  className="absolute h-full right-0 top-1/2 -translate-y-1/2 text-xs sm:text-base text-line outline-none px-2 sm:py-2 sm:px-5 interactive"
                  type="submit"
                >
                  <FaTelegramPlane className="text-2xl" />
                </button>
              </form>
            </div>
          </div>
        </header>

        <hr className="w-full h-3 border-none my-5 rounded-full bg-line" />
      </div>
    </div>
  );
}
