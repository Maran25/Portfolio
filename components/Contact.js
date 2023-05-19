"use client";

import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [details, setDetails] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        message: details.message,
      }),
    })
      .then((response) => {
        console.log(response);
        toast.success("Thanks for Contacting", { position: "bottom-center" });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsSubmitted(false);
        setDetails({ name: "", email: "", message: "" });
      });
  };

  return (
    <div className="md:mt-16 mt-72 md:mb-28 w-10/12 mx-auto">
      <div className=" flex flex-col justify-center w-full h-full">
        <h1 className="text-3xl md:text-5xl text-center mb-12 font-semibold">
          <span className="text-rose-800">Contact</span> Me
        </h1>
        <div className="flex flex-col-reverse md:flex-row mt-0 mb-10 md:mt-6">
          <div className="w-full md:w-1/2 text-xs md:text-base">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-slate-100 rounded-full">
                  <GoLocation className="h-6 w-6" />
                </div>
                <p>Trichy - Tamilnadu</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-slate-100 rounded-full">
                  <CiMail className="h-6 w-6" />
                </div>
                <p>sent2manimaran@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-slate-100 rounded-full">
                  <BsTelephone className="h-6 w-6" />
                </div>
                <p>7010738437</p>
              </div>
              <div className="flex pt-5 space-x-3">
              <a href="https://github.com/Maran25" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-10 w-10 text-slate-600 hover:text-black duration-150 hover:drop-shadow-lg" />
              </a>
              <a href="https://www.linkedin.com/in/mani-maran-74b82a25b" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="h-10 w-10 text-slate-600 hover:text-black duration-150 hover:drop-shadow-lg" />
              </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="w-full md:w-1/2 mb-10 md:mb-auto">
            <form onSubmit={handleForm} className="flex flex-col space-y-3">
              <input
                type="text"
                required
                placeholder="Name"
                className="form"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="form"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
              <textarea
                rows={6}
                required
                type="text"
                placeholder="Message"
                value={details.message}
                className="form"
                onChange={(e) =>
                  setDetails({ ...details, message: e.target.value })
                }
              />
              <button
                disabled={isSubmitted}
                className="w-full p-2 text-center bg-rose-500 hover:bg-rose-600 rounded-md text-white font-semibold duration-150"
              >
                {!isSubmitted ? "Send" : "Sending..."}
              </button>
            </form>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Contact;
