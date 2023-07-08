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
    content: "Send Pay and get paid instantly",
    img: Target,
  },
  {
    content: "Spend Save on everyday spending",
    img: Dollar,
  },
  {
    content: "Bank Faster, simpler banking",
    img: Chart,
  },
  {
    content: "Stocks Buy stocks for as little as $1",
    img: Circles,
  },
  {
    content: "Bitcoin Break into bitcoin",
    img: Shield,
  },
  {
    content: "Taxes File for free and get your max refund",
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
            Together <span className={classes["specialText"]}>We Grow</span>
          </h1>

          <Typography
            typeScale={"subText"}
            className={`${classes["subHeading"]}`}
          >
            We've listed a few industries that we like. If you're not sure if
            your business fits the bill, we'd love to talk anyway.
          </Typography>
        </div>
        <div
          className="flex flex-wrap gap-6 justify-center md:justify-end
        "
        >
          {cardsData.map((card) => (
            <GrowCard content={card.content} icon={card.img} width={300} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VittaFlowGrow;
