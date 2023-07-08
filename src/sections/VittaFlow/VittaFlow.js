import logo from "../../assets/Table.svg";
import cryptoChart from "../../assets/CryptoChart.svg";
import { Typography } from "../../components";

import * as classes from "./VittaFlow.module.css";

const VittaFlow = () => {
  return (
    <div
      className={`${classes.mainContainer} md:px-28 md:py-28 px-8 py-20 flex flex-col md:gap-28 gap-10`}
    >
      <div className={"flex flex-col gap-5"}>
        <h1 className="text-white md:w-2/3">
          <span className={classes.specialTextColor}>Crypto: </span>Where
          Innovation Meets Financial Freedom
        </h1>
        <Typography typeScale={"subText"} className={classes.subHeading}>
          The easy way to buy, sell, send, and receive bitcoin*
        </Typography>
      </div>
      <div className={`flex justify-center`}>
        <picture>
          <source media="(min-width: 660px)" srcSet={logo} />
          <img src={cryptoChart} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default VittaFlow;
