import React from "react";
import Navbar from "@components/Navbar";
import Image from "next/image";
import campusNav from "@assets/projects/campusNav.png";
import customClothing from "@assets/projects/customClothing.png";
import zura from "@assets/projects/zura.png";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col p-4 my-8 mx-6 md:mx-14">
      <Navbar />
      <div className="body flex flex-col mt-10 lg:flex-row">
        <div className="left lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:flex-col">
          <div className="personalInfo space-y-4">
            <h1 className="text-white my-name text-5xl lg:text-6xl">
              Priyanshu Jain
            </h1>
            <h3 className="text-white text-2xl lg:text-3xl">
              Student at Jaypee Institute of Information Technology
            </h3>
            <h4 className="text-slate-300">
              I build accessible, inclusive products and digital experiences for
              the web.
            </h4>
          </div>

          <div className="slider hidden lg:block">
            <ul className="mt-16 w-max">
              <li>
                <a
                  className="group flex items-center py-3 active"
                  href="#about"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#skill">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Skills
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#projects">
                  <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right text-white lg:w-1/2">
          <div id="about" className="mt-8 leading-8 text-slate-300 lg:mt-0">
            Back in 2021, I decided to try my hand at web development. Currently
            I am a 3rd year student at JAYPEE INSTITUTE OF INFORMATION
            TECHNOLOGY and doing my Bachelors in Technology in field of Computer
            Science. Also Looking 👨‍🎓 for Software developer opputunities. I have
            created some projects and learned a lot about development from them
            and also done programming in languages like C++ , Python🐍 . When
            I'm not at the computer, I'm usually doing workout or hanging out
            with my friends, or going through some books.
          </div>
          <div id="skill" className="mt-10 space-y-10">
            <h1 className="text-4xl">Skills</h1>

            <div className="programming_language space-y-3">
              <h2 className="neonText text-2xl">Programming Languages</h2>
              <p className="text-red-300">
                {" "}
                C , C++ ,JavaScript, TypeScript, HTML, CSS, PHP , Python
              </p>
            </div>

            <div className="frameworks space-y-3">
              <h2 className="neonText text-2xl">Libraries & Frameworks</h2>
              <p className="text-lime-300">
                React, Next.js, Tailwind , Node.js , Express , Socket.IO
              </p>
            </div>
            <div className="toolsPlatform space-y-3">
              <h2 className="neonText text-2xl">Tools & Platforms</h2>
              <p className="text-blue-300">
                Git, GitHub, Vercel, Heroku, Docker, Firebase, MongoDB, Figma
              </p>
            </div>
          </div>

          <div id="projects" className="mt-10 space-y-10">
            <h1 className="text-3xl">Projects</h1>

            <div className="projectBox p-3 flex">
              <div className="projectImage">
                <Image
                  className="rounded-xl"
                  alt="project"
                  src={zura}
                  height={130}
                />
              </div>
              <div className="projectTxt ml-5 w-1/2">
                <div className="projextTxthead flex">
                  <h3 className="text-green-300 text-2xl"><a target="_blank" href = "https://virtual-forest.vercel.app">Virtual Forest</a></h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 "
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>
                  Built a User Interface for <a target="_blank" href="https://zuraverse.xyz">Zuraverse</a>. It is a  gaming metaverse aiming positive change towards nature conservation through gaming.
                </p>
              </div>
            </div>

            <div className="projectBox p-3 flex">
              <div className="projectImage">
                <Image
                  className="rounded-xl"
                  alt="project"
                  src={campusNav}
                  height={130}
                />
              </div>
              <div className="projectTxt ml-5 w-1/2">
                <div className="projextTxthead flex">
                <h3 className="text-blue-300 text-2xl"><a target="_blank" href="https://github.com/PriyanshuJain13/delorean">Campus Nav</a></h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 "
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm">
                CampusNav is a web application designed to help anyone who has lost their way in JIIT Noida. It provides an interactive map of the campus buildings, locations, and landmarks
                </p>
              </div>
            </div>
            <div className="projectBox p-3 flex">
              <div className="projectImage w-2/5">
                <Image
                  className="rounded-xl"
                  alt="project"
                  src={customClothing}

                
                />
              </div>
              <div className="projectTxt ml-5 w-1/2">
                <div className="projextTxthead flex">
                  <h3 className="text-green-300 text-2xl"><a target="_blank" href="https://github.com/PriyanshuJain13/customClothing">Custom Clothing</a></h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 "
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>
                This is a web applcation made using React.js,three.js and DALLE-API You can customize your shirt design by changing logo or adding abstract to whole design , with help of OpenAi you can generate designs by adding text Prompt.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
