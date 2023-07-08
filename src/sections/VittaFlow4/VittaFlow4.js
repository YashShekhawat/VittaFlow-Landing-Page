import * as classes from "./VittaFlow4.module.css";
import { Typography } from "../../components";

const VittaFlow4 = () => {
  return (
    <div
      className={`${classes.mainContainer} md:px-28 px-8 md:pt-48 pt-36 md:pb-72 pb-32`}
    >
      <div className={`${classes.textContainer} w-full md:w-7/12`}>
        <Typography className={"text-white"} typeScale={"captionText"}>
          OUR FEATURE
        </Typography>
        <div className="flex flex-col gap-8">
          <h1 className={"text-white mt-3"}>
            Send and receive payments quickly from anywhere with{" "}
            <span className={classes.specialText}> Vitta Flow </span>
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} w-full md:w-7/12`}
          >
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VittaFlow4;
