import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="pb-20">

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10 `}>
          My Public Profiles
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Socials.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-row justify-center text-6xl gap-16">
        <a href="https://www.instagram.com/rohitchornele/" target="_blank"><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/rohit-chornele/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com/rohitchornele/" target="_blank"><FaGithub /></a>
    </div>
    </div>
    </>
  );
};

export default SectionWrapper(Footer, "footer");
