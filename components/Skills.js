import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  return (
    <div className="mb-20 md:mb-44 flex gap-y-6 flex-col items-center ">
      <AiOutlineUnorderedList className="w-8 h-8 text-rose-700" />
      <h1 className="text-3xl md:text-5xl font-semibold">
        Programming <span className="text-rose-800">Skills</span>
      </h1>
      <p className="p-1 md:p-5 md:w-6/12 w-10/12 text-center text-sm md:text-lg">
        I am a Front end & Back end developer. I can develop beautiful and responsive 
        Websites. I am interested in learning programming
        languages
      </p>
      <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-wrap md:gap-10 gap-5 w-10/12 md:w-8/12 items-center justify-center">
      <motion.div variants={item} className="skill"><Image src="/assets/html.png" alt="HTML" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/css.png" className="object-contain" alt="css" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/javascript.png" className="object-contain" alt="javascript" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/java.png" className="object-contain" alt="java" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/mongodb.png" className="object-contain" alt="mongodb" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/react.png" className="object-contain" alt="react" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/express.png" className="object-contain" alt="express" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/redux.png" className="object-contain" alt="redux" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/git.png" className="object-contain" alt="git" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/npm.png" className="object-contain" alt="npm" height={80} width={80}/></motion.div>
      <motion.div variants={item} className="skill"><Image src="/assets/node.png" className="object-contain" alt="node" height={80} width={80}/></motion.div>
      </motion.div>
    </div>
  );
};

export default Skills
