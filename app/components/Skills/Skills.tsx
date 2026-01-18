"use client";
import Image from "next/image";
import { ReactIcon } from "./Skill-Icons/React-Icon";
import { JSIcon } from "./Skill-Icons/JS-Icon";
import { TailwindCSSIcon } from "./Skill-Icons/TailwindCSS-Icon";
import { NodeJsIcon } from "./Skill-Icons/NodeJS-Icon";
import { MongoDBIcon } from "./Skill-Icons/MongoDB-Icon";
import { HTML5Icon } from "./Skill-Icons/HTML5-Icon";
import { GitIcon } from "./Skill-Icons/Git-Icon";
import { CSSIcon } from "./Skill-Icons/CSS-Icon";
import { CSS3Icon } from "./Skill-Icons/CSS3-Icon";
import { ExpressIcon } from "./Skill-Icons/Express-Icon";
import { LogoLoop } from "./Logo-Loop";

const techLogos = [
  { node: <MongoDBIcon />, title: "MongoDB", href: "" },
  { node: <ExpressIcon />, title: "Express", href: "" },
  { node: <ReactIcon />, title: "React", href: "" },
  { node: <NodeJsIcon />, title: "React", href: "" },
  { node: <HTML5Icon />, title: "React", href: "" },
  { node: <CSS3Icon />, title: "React", href: "" },
  { node: <JSIcon />, title: "Next.js", href: "" },
  {
    node: <GitIcon />,
    title: "TypeScript",
    href: "",
  },
  {
    node: <TailwindCSSIcon />,
    title: "Tailwind CSS",
    href: "",
  },
];

function Skills() {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
        My Skills &amp; Expertise
      </h2>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 sm:grid-cols-1 gap-4 max-h-full">
        {/* Left side */}
        <div className="sm:col-span-full lg:col-span-1 ">
          <Image
            src="/skills-image-03.png"
            alt="Hero Image"
            width={200}
            height={200}
            className="mx-auto rounded-3xl mb-6"
          />
        </div>
        {/* Right side */}
        <div className="sm:col-span-full lg:col-span-1 flex justify-center items-center">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Strong understanding of responsive design and cross-browser
              compatibility.
            </li>
            <li>Familiarity with version control systems like Git.</li>

            <li>
              Proficient in HTML, CSS, JavaScript, and modern frameworks like
              React and Next.js.
            </li>
            <li>
              Experience with backend technologies such as Node.js and Express
              to utilize the MERN stack.
            </li>

            <li>
              Knowledge of UI/UX principles to create user-friendly interfaces.
            </li>
          </ul>
        </div>
        {/* <div
          style={{ position: "relative", overflow: "hidden" }}
          className="flex justify-center container"
        >
         
        </div> */}

        {/* <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            I have a diverse set of skills that I bring to every project. My
            expertise includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Strong understanding of responsive design and cross-browser
              compatibility.
            </li>
            <li>Familiarity with version control systems like Git.</li>

            <li>
              Proficient in HTML, CSS, JavaScript, and modern frameworks like
              React and Next.js.
            </li>
            <li>
              Experience with backend technologies such as Node.js and Express
              to utilize the MERN stack.
            </li>

            <li>
              Knowledge of UI/UX principles to create user-friendly interfaces.
            </li>
          </ul>
          <p>
            I'm always eager to learn new skills and stay updated with the
            latest industry trends.
          </p>
        </div> */}
      </div>
    </section>
  );
}
export default Skills;
