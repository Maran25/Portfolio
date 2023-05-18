import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineLaunch } from "react-icons/md";
import { SiRedux, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa"

const Projects = () => {
  return (
    <div className="mt-28 h-screen flex gap-y-6 flex-col items-center">
      <h1 className="text-3xl md:text-5xl mb-6 md:mb-16 font-semibold">
        Discover My <span className="text-rose-800">Projects</span>
      </h1>
      <div className="flex flex-col md:flex-row space-y-6 items-stretch gap-x-0 md:gap-x-20">
        <div className="bg-slate-100 rounded-lg relative mx-5 lg:mx-0">
          <Image
            src="/assets/ecommerce.png"
            className="rounded-t-lg"
            alt="ecommerce"
            height={200}
            width={400}
          />
          <div className="mt-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-4 pl-4">E-Commerce</h1>
            <div className="flex gap-x-2 mr-4 justify-center">
                <a href="https://github.com/Maran25/Green-Ecommerce" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-7 w-7 text-slate-600 hover:text-black duration-150 hover:drop-shadow-lg" />
                </a>
                <a href="https://green-ecommerce.netlify.app" target="_blank" rel="noopener noreferrer">
                <MdOutlineLaunch className="h-7 w-7 text-slate-600 hover:text-black duration-150 hover:drop-shadow-lg" />
                </a>
            </div>
          </div>
            <p className="w-auto md:w-[370px] px-4 md:p-1 pb-5 mx-auto text-xs md:text-base">
              An e-commerce website developed using React, Tailwind CSS, Redux,
              Sanity.io, Express, and MongoDB. Enjoy seamless admin management,
              effortless product additions, personalized shopping, and
              wishlists. Secure Stripe integration ensures hassle-free
              purchases, elevating your online retail presence.
            </p>
          </div>
          <div className="flex items-center pb-5 pt-2 space-x-3 ml-3">
            <FaReact className="p-2 bg-sky-100 text-blue-700 rounded-full h-10 w-10" />
            <div className="p-2 bg-purple-100 text-purple-700 rounded-full h-10 w-10 flex items-center justify-center">
            <SiRedux className="h-6 w-6" />
            </div>
            <SiMongodb className="p-2 bg-teal-100 text-green-700 rounded-full h-10 w-10" />
            <SiTailwindcss className="p-2 bg-sky-100 text-sky-600 rounded-full h-10 w-10" />
            <SiExpress className="p-2 bg-white rounded-full h-10 w-10" />
          </div>
        </div>
          <div className="bg-slate-100 rounded-lg relative mx-5 lg:mx-0">
            <Image
              src="/assets/notes.png"
              className="rounded-t-lg"
              alt="ecommerce"
              height={200}
              width={400}
            />
            <div className="mt-4">
            <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-4 pl-4">Notes</h1>
            <div className="flex gap-x-2 mr-4 justify-center">
                <a href="https://github.com/Maran25/NotesKeeper" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-7 w-7 text-slate-600 hover:text-black duration-150 hover:drop-shadow-lg" />
                </a>
                <a href="https://notekeepers.netlify.app" target="_blank" rel="noopener noreferrer">
                <MdOutlineLaunch className="h-7 w-7 text-slate-600 hover:text-black duration-150 hover:drop-shadow-lg" />
                </a>
            </div>
          </div>
              <p className="w-auto md:w-[370px] px-4 md:p-1 pb-5 mx-auto text-xs md:text-base">
                User-friendly MERN-based notes keeping website with secure
                registration, login, and organization of notes. Stylish
                interface with customizable note colors for easy differentiation
                and prioritization. Ideal for students, professionals, and task
                tracking.
              </p>
            </div>
            <div className="flex items-center pb-4 md:pt-8 pt-2 space-x-3 ml-3">
            <FaReact className="p-2 bg-sky-100 text-blue-700 rounded-full h-10 w-10" />
            <SiMongodb className="p-2 bg-teal-100 text-green-700 rounded-full h-10 w-10" />
            <SiTailwindcss className="p-2 bg-sky-100 text-sky-600 rounded-full h-10 w-10" />
            <SiExpress className="p-2 bg-white rounded-full h-10 w-10" />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Projects
