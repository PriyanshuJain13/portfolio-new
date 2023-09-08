import React from "react";
import myPic from "@assets/mypic1.jpeg";
import credentials from "@assets/credentials.png";
import resume from "@assets/resume.png";
import button from "@assets/button.png";
import laptop from "@assets/laptop.png";
import Image from "next/image";
import leetcode from "@assets/icons/leetcode.svg";
import github from "@assets/icons/github.svg";
import codeforces from "@assets/icons/codeforces.svg";
import linkedIn from "@assets/icons/linkedin.svg";

const HomeBody = () => {
  return (
    <div className="text-white my-14 flex flex-wrap md:m-">
      <div className="blackBox space-x-2 flex flex-row w-full h-80 p-8 md:w-2/5">
        <div className="mypic w-1/2 pt-10">
          <Image
            src={myPic}
            alt="myPic"
            className="rounded-tl-2xl rounded-br-2xl"
          />
        </div>
        <div className="pt-10 w-1/2 space-y-1 sm:space-y-2">
          <p className="greyTxt">A web developer</p>
          <p className="whiteTxt text-2xl xl:text-4xl">Priyanshu Jain</p>
          <p className="greyTxt">I am a Front-end developer based in India</p>
        </div>
      </div>

      <div className="w-full mt-8 md:w-3/5 md:mt-0 md:px-5">
        <div className="blackBox w-full h-10 pt-2 p-2">
          <marquee>
            Pre Final year B.tech student currently working on my portfolio 😎
          </marquee>
        </div>

        <div className="flex flex-row mt-10 space-x-2">
          <div className="blackBox w-1/2 h-60 p-4 space-y-2">
            <div className="flex justify-center">
              <Image
                src={credentials}
                alt="cred"
                className="w-[160px] lg:w-[250px]"
              />
            </div>
            <div className="flex justify-between lg:px-8">
              <div className="">
                <p className="greyTxt">More about me</p>
                <p className="whiteTxt">Credentials</p>
              </div>
              <a href="/about">
                <button src="">
                  <Image src={button} alt="glow" className="w-10 glow-btn" />
                </button>
              </a>
            </div>
          </div>

          <div className="blackBox w-1/2 h-60 p-4 space-y-2">
            <div className="flex justify-center">
              <Image
                src={laptop}
                alt="laptop"
                className="w-[100px] xl:w-[150px]"
              />
            </div>
            <div className="flex justify-between lg:px-8">
              <div className="">
                <p className="greyTxt">Showcase</p>
                <p className="whiteTxt">Projects</p>
              </div>
              <a href="/about">
                <button src="/">
                  <Image src={button} alt="cred" className="w-10 glow-btn" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-2 flex flex-row mt-8 flex-wrap sm:space-y-0 sm:justify-between">
        <div className="blackBox w-full sm:w-1/4 xl:w-1/5 h-60 p-4 space-y-6 lg:space-y-2">
          <div className="flex justify-center">
            <Image
              src={resume}
              alt="resume"
              className="w-[100px] xl:w-[150px]"
            />
          </div>
          <div className="flex justify-evenly lg:px-8 lg:justify-between">
            <div className="">
              <p className="greyTxt">My Résume</p>
              <p className="whiteTxt">Download</p>
            </div>
            <button src="">
              <a href="/resume" target="_blank">
                <Image src={button} alt="button" className="w-10 glow-btn" />
              </a>
            </button>
          </div>
        </div>

        <div className="blackBox w-full sm:w-1/3 xl:w-1/2 h-60 p-4 space-y-6 lg:space-y-2">
          <div className="flex justify-evenly h-2/3 space-x-4 xl:space-x-16">
            <a
              href="https://www.linkedin.com/in/priyanshu-jain-637406214"
              className="flex flex-between"
              target="_blank"
            >
              <Image
                src={linkedIn}
                alt="logo"
                className="w-[40px] xl:w-[60px] hoverLogo1"
              />
            </a>
            <a
              href="https://github.com/PriyanshuJain13"
              className="flex flex-between"
              target="_blank"
            >
              <Image
                src={github}
                alt="logo"
                className="w-[40px] xl:w-[60px] hoverLogo2"
              />
            </a>
            <a
              href="https://leetcode.com/pjrise13/"
              className="flex flex-between"
              target="_blank"
            >
              <Image
                src={leetcode}
                alt="logo"
                className="w-[40px] xl:w-[60px] hoverLogo3"
              />
            </a>
            <a
              href="https://codeforces.com/profile/priyAnshu.13"
              className="flex flex-between"
              target="_blank"
            >
              <Image
                src={codeforces}
                alt="logo"
                className="w-[40px] xl:w-[60px] hoverLogo4"
              />
            </a>
          </div>
          <div className="flex lg:px-8 lg:justify-between">
            <div className="">
              <p className="greyTxt">Connect with me</p>
              <p className="whiteTxt">Profiles</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/4 xl:w-1/5 h-60 p-4 text-center leading-loose text-stone-500 site-desc ">
          <p>
            Loosely designed in <a target="_blank" href="https://www.figma.com/" className="text-zinc-200">Figma</a> and coded
            in <a target="_blank" href="https://code.visualstudio.com" className="text-zinc-200">Visual Studio</a>. Built with{" "}
            <a target="_blank" href="https://nextjs.org" className="text-zinc-200">Next.js</a> and{" "}
            <a target="_blank" href="https://tailwindcss.com" className="text-zinc-200">Tailwind CSS</a>, deployed with <a target="_blank" href="https://vercel.com" className="text-zinc-200">Vercel</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
