import React from "react";
import Navbar from "@components/Navbar";
import Image from "next/image";
import demoImg from "@assets/laptop.png"
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
              <p className="text-red-300"> C , C++ ,JavaScript, TypeScript, HTML, CSS, PHP , Python</p>
            </div>

            <div className="frameworks space-y-3">
              <h2 className="neonText text-2xl">Libraries & Frameworks</h2>
              <p className="text-lime-300">React, Next.js, Tailwind , Node.js , Express , Socket.IO</p>
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
            <div className="projectBox bg-slate-100 w-96 h-40">
              <Image alt="project" src={demoImg}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
