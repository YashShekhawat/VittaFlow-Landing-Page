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
            Automated Trading and
            <span className={classes.specialText}> Live Support </span>
          </h1>

          <div className={`md:flex items-start justify-between`}>
            <div className="md:w-4/12">
              <Typography typeScale={"subText"} className={classes.subText2}>
                Our AI-assisted algorithm handles your demat account, reflecting
                decisions based on your capital, risk appetite, and other
                factors. Enjoy 24/7 live trade support for transparency and
                entitlements.
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
