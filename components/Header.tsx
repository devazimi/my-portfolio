"use client";

import { LuBriefcaseBusiness } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

interface NetworksType {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

const networks: NetworksType[] = [
  {
    id: 1,
    title: "GITHUB",
    description: "You can see my projects on GitHub",
    icon: FaGithub,
    href: "https://github.com/devazimi",
  },
  {
    id: 2,
    title: "LINKEDIN",
    description: "You can contact me on LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hamidreza-azimi-jozani-245661364/",
  },
  {
    id: 3,
    title: "EMAIL",
    description: "azimihamidreza.work@gmail.com",
    icon: FaEnvelope,
    href: "mailto:azimihamidreza.work@gmail.com",
  },
  {
    id: 4,
    title: "PHONE",
    description: "+98 912 345 6789",
    icon: FaPhone,
    href: "tel:+989123456789",
  },
];

export default function Header() {
  return (
    <header className="flex flex-col w-full  gap-1 mt-10">
      <div className="flex flex-row gap-1 items-center">
        <LuBriefcaseBusiness className="text-secondTextColor text-2xl" />
        <p className="text-secondTextColor text-base font-bold">
          My Personal Portfolio
        </p>
      </div>
      <h1 className="font-extrabold text-2xl md:text-6xl leading-relaxed [word-spacing:2]">
        React & Next.js Developer focused on logic, performance and scalability.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row lg:justify-between mt-10 lg:mt-20">
        <div>
          <p className="md:w-sm lg:w-md  text-secondTextColor text-base lg:text-paragraph [word-spacing:5] leading-relaxed p-2">
            Frontend Developer passionate about building modern, scalable, and
            user-friendly web applications. I specialize in React and Next.js,
            with a strong focus on clean architecture, problem solving, and
            maintainable code.
          </p>
          <hr className="border-none mt-1" />
          <p className="md:w-sm lg:w-md  text-secondTextColor text-base lg:text-paragraph [word-spacing:5] leading-relaxed p-2">
            I enjoy turning ideas into responsive and efficient digital
            experiences while continuously learning and improving my skills.
          </p>
        </div>

        <div className="flex gap-5 p-2 items-center justify-center mt-10 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
            {networks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex flex-col gap-2 bg-card py-3 px-5 rounded-2xl hover:bg-[#262626] hover:border-line hover:-translate-y-1 transition-all duration-300"
                >
                  {/* <div className="flex flex-col gap-2 bg-card py-3 px-5 rounded-2xl"> */}
                  <div className="flex items-center gap-2">
                    <Icon className="text-xl text-secondTextColor" />
                    <h6 className="text-base font-bold text-secondTextColor">
                      {item.title}
                    </h6>
                  </div>
                  <p className="text-base text-thirdTextColor">
                    {item.description}
                  </p>
                  {/* </div> */}
                </Link>
              );
            })}
            {/* <Link
              href={
                "https://www.linkedin.com/in/hamidreza-azimi-jozani-245661364/"
              }
            >
              <div className="flex flex-col gap-2 bg-card py-3 px-5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <FaGithub className="text-xl text-secondTextColor" />
                  <h6 className="text-base font-bold text-secondTextColor">
                    GITHUB
                  </h6>
                </div>
                <p className="text-base text-thirdTextColor">
                  you can see my projects at github
                </p>
              </div>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/hamidreza-azimi-jozani-245661364/"
              }
            >
              <div className="flex flex-col gap-2 bg-card py-3 px-5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-xl text-secondTextColor" />
                  <h6 className="text-base font-bold text-secondTextColor">
                    LINKEDIN
                  </h6>
                </div>
                <p className="text-base text-thirdTextColor">
                  you can contact me at linkedin
                </p>
              </div>
            </Link>
            <div className="flex flex-col gap-2 bg-card py-3 px-5 rounded-2xl">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-secondTextColor text-xl" />
                <h6 className="font-bold text-secondTextColor">EMAIL</h6>
              </div>
              <p className="text-thirdTextColor">your-email@example.com</p>
            </div>

            <div className="flex flex-col gap-2 bg-card py-3 px-5 rounded-2xl">
              <div className="flex items-center gap-2">
                <FaPhone className="text-secondTextColor text-xl" />
                <h6 className="font-bold text-secondTextColor">PHONE</h6>
              </div>
              <p className="text-thirdTextColor">+98 912 345 6789</p>
            </div> */}
          </div>
        </div>
        {/* <div className="w-full flex flex-col gap-5 mt-5"> */}

        {/* </div> */}
      </div>
    </header>
  );
}
