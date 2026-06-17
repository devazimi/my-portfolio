import {
  FaCode,
  FaLayerGroup,
  FaPalette,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import { IconType } from "react-icons";

interface SkillType {
  id: number;
  title: string;
  icon: IconType;
  technologies: string[];
}

export const skills: SkillType[] = [
  {
    id: 1,
    title: "Frontend",
    icon: FaCode,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 2,
    title: "State Management",
    icon: FaLayerGroup,
    technologies: ["Redux Toolkit", "Context API"],
  },
  {
    id: 3,
    title: "Styling & UI",
    icon: FaPalette,
    technologies: [
      "Tailwind CSS",
      "Material UI (MUI)",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    title: "Backend & Database",
    icon: FaDatabase,
    technologies: ["Prisma", "SQLite", "NextAuth"],
  },
  {
    id: 5,
    title: "Tools & Workflow",
    icon: FaTools,
    technologies: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="w-full flex-col my-20">
      {/* header */}
      <div className="w-full flex flex-col gap-5">
        <h1 className="font-bold text-secondTextColor text-lg">
          Skills & Technologies
        </h1>
        <p className="max-w-2xl text-thirdTextColor text-xl md:text-4xl font-black leading-normal">
          A collection of technologies, tools, and workflows I use to create
          performant, responsive, and user-focused web applications.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-10 items-stretch">
        {skills.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-card h-full border border-border rounded-2xl p-6 hover:bg-[#262626] hover:border-line hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-5 gap-3">
                <Icon className="text-xl font-bold text-baseTextColor" />
                <h2 className="text-xl font-bold text-baseTextColor">
                  {item.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 font-medium text-sm rounded-full bg-btn-light text-btn-dark interactive-btn-to-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
