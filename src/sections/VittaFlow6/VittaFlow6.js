import * as classes from "./VittaFlow6.module.css";
import num1 from "../../assets/Number.svg";
import num2 from "../../assets/Number-1.svg";
import num3 from "../../assets/Number-2.svg";
import Company from "../../assets/Company.svg";
import InfoCard from "../../components/InfoCard";
import { PortfolioLogo } from "../../components/PortfolioLogo";
import { Typography } from "../../components";

const VittaFlow6 = () => {
  const data = [
    {
      heading: "Create a Demat Account with our Partners",
      content:
        "Start your financial journey by creating a demat account with our trusted partners. Gain access to a world of investment opportunities, track your portfolio effortlessly, and enjoy secure transactions with ease.",
      img: num1,
    },
    {
      heading: "One-Time Deposit and Minimal Fees",
      content:
        "VittaFlow offers different subscription plans or membership tiers with varying features and benefits. Clients pay a fee to access the platform's services, research reports, investment tools, or premium features.",
      img: num2,
    },
    {
      heading: "Withdraw Monthly Returns",
      content: "Earn 14-18% monthly returns with transparency, no hidden charges. Diversified, professional management, risk management, customer support. Invest now!",
      img: num3,
    },
  ];

  return (
    <div className={`py-10 md:pb-20 px-8 md:px-28`}>
      {/* <div className="flex flex-col items-center gap-8 text-white">
        <span className="font-light text-sm">
          Vitta flow has been featured on
        </span>
        <div className="flex text-white justify-center gap-10 md:gap-32 flex-wrap">
          <PortfolioLogo name={"Company"} logo={Company} />
          <PortfolioLogo name={"Company"} logo={Company} />
          <PortfolioLogo name={"Company"} logo={Company} />
          <PortfolioLogo name={"Company"} logo={Company} />
          <PortfolioLogo name={"Company"} logo={Company} />
        </div>
      </div> */}
      <div
        className={`${classes.wrapper} md:mt-36 mt-24 mb-10 flex flex-col gap-10`}
      >
        <div className={`flex flex-col gap-8 items-center`}>
          <h1 className="text-center">
            How does <br />{" "}
            <span className={classes.specialText}>Vitta Flow</span> work?
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} text-center text-sm w-full md:w-8/12`}
          >
            Experience more than just investment opportunities on our platform;
            it's a comprehensive financial ecosystem. Discover personalized
            financial planning, goal tracking, and portfolio management services
            designed to keep investors on the path to realizing their financial
            dreams.
          </Typography>
        </div>
        <div className={`flex gap-10 flex-wrap px-5 md:px-0 justify-center`}>
          {data.map((item, key) => (
            <InfoCard
              key={key}
              title={item.heading}
              description={item.content}
              icon={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VittaFlow6;
