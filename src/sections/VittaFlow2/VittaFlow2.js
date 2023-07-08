import { Typography } from "../../components";
import Map from "../../assets/Map.png";
import Transaction from "../../assets/Transaction.svg";

import * as classes from "./VittaFlow2.module.css";

const VittaFlow2 = () => {
  return (
    <div className={`md:py-28 py-12`}>
      <div className={classes.textContainer}>
        <Typography typeScale={"captionText"} className={"text-white"}>
          SEND AND RECEIVE
        </Typography>
        <div className="flex flex-col items-center gap-8 mt-3">
          <h1 className="md:w-8/12">
            Easily send and receive{" "}
            <span className={classes.specialText}>Cryptocurrency</span>
          </h1>
          <div>
            <button className={classes.buttonStyle}>Start Now</button>
          </div>
        </div>
      </div>

      <div className={"flex justify-center mt-10"}>
        <picture>
          <source media="(min-width: 660px)" srcSet={Map} />
          <img
            src={Transaction}
            alt="Transaction image"
            className="md:w-11/12 w-11/12 m-auto md:m-0"
          />
        </picture>
      </div>
    </div>
  );
};

export default VittaFlow2;
