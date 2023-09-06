import React from "react";
import Navbar from "@components/Navbar";

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
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I've had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation. My main focus
            these days is building products and leading projects for our clients
            at Upstatement. In my free time I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I'm not at the computer, I'm usually rock
            climbing, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds
          </div>
          <div id="skills">

          </div>
          <div id="projects"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
