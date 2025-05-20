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
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
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

export default SectionWrapper(Tech, "");

{
  /* <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip> */
}
