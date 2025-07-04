import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I am good at
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((technology) => (
        <Tooltip title={technology.name}  key={technology.name} placement="bottom" arrow>
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
