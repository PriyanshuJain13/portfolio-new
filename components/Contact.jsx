import React from "react";
import Image from "next/image";
import dev from "@assets/dev.png";

const Contact = () => {
  return (
    <div className="text-neutral-50 flex flex-col justify-between md:flex-row" id="contact">
      <Image src={dev} />
      <div className="w-full md:w-1/2">
        <div className="blackBox flex flex-col p-6 space-y-3">
          <div className="flex flex-row space-x-2 text-4xl ml-2">
            <h1>LETS WORK</h1>
            <h1 className="text-blue-700">TOGETHER</h1>
          </div>
          <form
            id = "Contact-form"
            action="https://formspree.io/f/xpzgrovq"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input className="blackBox p-4" type="text" placeholder="Name*" />
            <input className="blackBox p-4" type="email" placeholder="Email*" />
            <input
              className="blackBox p-4"
              type="text"
              placeholder="Your Subject"
            />
            <textarea
              className="blackBox p-4"
              placeholder="Your message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="blackBox p-2 submitBtn font-semiboldbold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
