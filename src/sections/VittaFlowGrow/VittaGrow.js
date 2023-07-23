import GrowCard from "../../components/GrowCard/GrowCard";
import { Typography } from "../../components";
import Target from "../../assets/Target.svg";
import Dollar from "../../assets/Dollar.svg";
import Shield from "../../assets/Shield.svg";
import Chart from "../../assets/Chart.svg";
import Book from "../../assets/Book.svg";
import Circles from "../../assets/Circles.svg";

import * as classes from "./VittaGrow.module.css";

const cardsData = [
  {
    content: "Equity Cash",
    img: Chart,
  },
  {
    content: "Real-Estate",
    img: Target,
  },
  {
    content: "Currency",
    img: Dollar,
  },
  {
    content: "MCX",
    img: Circles,
  },
  {
    content: "Bonds",
    img: Shield,
  },
  {
    content: "Derivatives",
    img: Book,
  },
];

export const VittaFlowGrow = () => {
  return (
    <div
      className={`${classes["main-container"]} px-8 md:px-28 md:pt-32 pt-0 md:pb-44 pb-8`}
    >
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-white">
            How we grow your
            <span className={classes["specialText"]}> Money</span>
          </h1>

          <Typography
            typeScale={"subText"}
            className={`${classes["subHeading"]}`}
          >
            Here are a few ways with which we skyrocket your hard-earned wealth
            and the current most active markets in the space and among our
            analysts.
          </Typography>
        </div>
        <div className="flex flex-wrap gap-6 justify-center md:justify-end">
          {cardsData.map((card) => (
            <GrowCard content={card.content} icon={card.img} width={300} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VittaFlowGrow;
