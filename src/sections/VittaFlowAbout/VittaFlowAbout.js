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
      heading: "Expert Team of Traders",
      content:
        "Our experts provide personalized investment guidance, considering your financial goals, risk tolerance, and unique circumstances. Maximize returns with our dedicated team's well-informed decisions and tailored recommendations.",
      img: Users,
    },
    {
      heading: "Up to 14-18% Monthly Returns",
      content:
        "Maximize your earnings with our skilled team of traders and investors. Enjoy monthly returns of up to 14-18% and withdraw your funds whenever you need them.",
      img: Globe,
    },
    {
      heading: "Loss Compensation Fund",
      content:
        "VittaFlow prioritizes your peace of mind by offering a Loss Compensation Fund. This dedicated fund covers losses caused by our mistakes, ensuring accountability and protection for our clients.",
      img: Search,
    },
    {
      heading: "Trust and Commitment",
      content:
        "VittaFlow is committed to earning your trust by being a dependable financial partner. Our dedication to your success in the financial market ensures personalized guidance and support for maximizing returns on your investments.",
      img: Compass,
    },
  ];

  return (
    <div className={`md:px-28 px-7 md:py-16 py-10`}>
      <div
        className={"flex flex-col items-center justify-center gap-14 md:gap-24"}
      >
        <div className={`flex flex-col items-center justify-center gap-2`}>
          <h1 className="text-white">
            About <span className={classes.specialText}>Vitta Flow</span>
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} text-center md:w-5/12`}
          >
            VittaFlow, derived from the Sanskrit word "Vitta", meaning wealth,
            represents our core objective: to help individuals grow their wealth
            through intelligent and strategic investments.
          </Typography>
        </div>
        <div className="flex flex-col gap-10 ">
          <div
            className={`md:flex justify-between items-center flex-wrap w-full`}
          >
            <h2 className={`text-center text-white text-3xl`}>
              What drives Vitta Flow?
            </h2>
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
