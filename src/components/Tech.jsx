import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tooltip } from "@mui/material";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <Tooltip title={technology.name} placement="bottom" arrow>
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
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
