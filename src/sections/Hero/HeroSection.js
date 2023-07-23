import { Navbar, Typography } from "../../components";
import { Button } from "../../components/Button";
import scrollDown from "../../assets/ScrollDown.svg";

import * as classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div
      className={`px-0 md:px-14 gap-20 pb-20 pt-8 md:pt-20 ${classes["hero-container"]}`}
    >
      <Navbar />
      <div className="flex flex-col items-center">
        <div
          className={`py-16 md:w-2/4 text-center flex flex-col gap-4 items-center`}
        >
          <h1 className="text-white md:w-4/5">
            Save Your Finances For The{" "}
            <span className={classes["focused-text"]}>Future</span>
          </h1>
          <Typography
            typeScale={"subHeading"}
            className={`${classes["hero-sub-heading"]} w-11/12 md:w-9/12`}
          >
            Experience your money working for you like never before by making
            VittaFlow your financial partner.
          </Typography>
        </div>

        <Button>Get in Touch</Button>
      </div>

      <div className={`flex items-center flex-col mt-24 gap-4`}>
        <img src={scrollDown} alt="scroll down" width={30} />
        <Typography className={`text-white text-xs font-light`}>
          Get to know us more
        </Typography>
      </div>
    </div>
  );
};

export default HeroSection;
