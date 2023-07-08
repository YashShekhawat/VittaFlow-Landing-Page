import * as classes from "./VittaFlow3.module.css";
import customer from "../../assets/customer.svg";
import { Typography } from "../../components/Typography";

const VittaFlow3 = () => {
  return (
    <div className={`${classes.mainContainer} md:px-28 px-8 md:py-28 py-24`}>
      <div className={classes.textContainer}>
        <Typography typeScale={"captionText"}>OUR FEATURE</Typography>
        <div className="flex flex-col gap-5 mt-3">
          <h1 className={`md:w-8/12`}>
            Communication via automatic{" "}
            <span className={classes.specialText}> Actions by AI </span>
          </h1>

          <div className={`md:flex items-start justify-between`}>
            <div className="md:w-4/12">
              <Typography typeScale={"subText"} className={classes.subText2}>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </Typography>
            </div>
            <div className={"flex justify-center md:-mt-10 mt-10"}>
              <img src={customer} alt="Communication Image" width={450} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VittaFlow3;
