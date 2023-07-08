import * as classes from "./VittaFlowAbout.module.css";
import Users from "../../assets/Users.svg";
import Globe from "../../assets/Globe.svg";
import Search from "../../assets/Search.svg";
import Compass from "../../assets/Compass.svg";
import AboutCard from "../../components/AboutCard";
import { Typography } from "../../components";

const VittaFlowAbout = () => {
  const data = [
    {
      heading: "Open Source",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      img: Users,
    },
    {
      heading: "Worldwide",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      img: Globe,
    },
    {
      heading: "Transparent",
      content:
        "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
      img: Search,
    },
    {
      heading: "Community Driven",
      content:
        "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
      img: Compass,
    },
  ];

  return (
    <div className={`md:px-28 px-7 md:py-16 py-10`}>
      <div className={"flex flex-col items-center justify-center gap-14 md:gap-24"}>
        <div className={`flex flex-col items-center justify-center gap-2`}>
          <h1 className="text-white">
            About <span className={classes.specialText}>Vitta Flow</span>
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} text-center md:w-5/12`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet
            vitae dolor non aliquam. Malesuada.
          </Typography>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className={`md:flex justify-between items-center flex-wrap w-full`}>
            <h2 className={`text-center text-white text-3xl`}>What drives Vitta Flow?</h2>
            <Typography
              typeScale={"subText"}
              className={`text-white md:w-4/12 text-center md:visible hidden`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </Typography>
          </div>
          <div className={`flex flex-wrap gap-8 justify-center`}>
            {data.map((data, key) => (
              <AboutCard
                key={key}
                title={data.heading}
                description={data.content}
                icon={data.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VittaFlowAbout;
