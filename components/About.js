import Image from "next/image";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const About = () => {
  return (
    <div className="mb-10 flex flex-col md:flex-row justify-center py-20 w-10/12 mx-auto">
      <div className="w-full md:w-1/2 flex flex-col space-y-3 md:mb-auto mb-10">
        <h1 className="subheading pb-5">Hear about me!</h1>
        <ul className="space-y-3 list-disc text-xs md:text-base">
        <li>
          My name is Manimaran a Full Stack Web Developer with hands on
          experience in building React Apps. Works efficiently both in frontend
          as well as backend.
        </li>
        <li>
          As a Full Stack Web Developer, I'm passionate about building highly
          functional and visually appealing web applications. With my strong
          understanding of both frontend and backend technologies, I can create
          seamless web experiences that delight users.
        </li>
        <li>
          I'm always eager to take on new challenges and push myself to learn
          new skills.
        </li>
        <li>
          Overall, I'm a highly motivated and detail-oriented Full Stack Web
          Developer with a track record of delivering high-quality work on time. 
          I'm committed to staying up-to-date with the latest
          web development trends and technologies, and I'm always looking for
          new opportunities to hone my skills and grow as a developer.
        </li>
        </ul>

        <p className="pt-8 pb-3">Stay Connected with me !</p>
        <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 text-xs md:text-base">
        <a href="https://www.linkedin.com/in/mani-maran-74b82a25b" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-x-2"><Image src='/assets/linkedin.png' alt="linkedin" height={30} width={30} />Linkedin</div>
        </a>
        <a href="https://www.instagram.com/_ma.ran_" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-x-2"><Image src='/assets/instagram.jpg' alt="instagram" height={30} width={30} />Instagram</div>
        </a>
            <a href="https://github.com/Maran25" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-x-2"><Image src='/assets/github.png' alt="github" height={30} width={30} />Github</div>
            </a>
            <a href="mailto:sent2manimaran@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-x-2"><Image src='/assets/gmail.png' alt="gmail" height={30} width={30} />Gmail</div>
            </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center ">
        <h1 className="subheading">Education</h1>

        <div className="mt-7 flex flex-col space-y-6 text-xs md:text-base">
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Bachelor of Computer Application</h3>
            <p>Jamal Mohamed College</p>
            <div className="flex space-x-2">
            <AiOutlineCalendar className="h-7 w-7"/>
            <p>Jun 2020 - May 2023</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Computer Science</h3>
            <p>Seventh-Day Adventist Hr Sec School</p>
            <div className="flex space-x-2">
            <AiOutlineCalendar className="h-7 w-7"/>
            <p>Jun 2019 - Apr 2020</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Secondary School</h3>
            <p>Seventh-Day Adventist Hr Sec School</p>
            <div className="flex space-x-2">
            <AiOutlineCalendar className="h-7 w-7"/>
            <p>Jun 2018 - Apr 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
