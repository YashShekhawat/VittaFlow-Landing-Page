import { Logo, Typography } from "../../components";
import * as classes from "./Footer.module.css";

const footerData = {
  menus: {
    Corporate: [
      {
        link: "#",
        label: "Career",
      },
      {
        link: "#",
        label: "Our Vision",
      },
      {
        link: "#",
        label: "Out Team",
      },
      {
        link: "#",
        label: "Contact",
      },
    ],

    Legal: [
      {
        link: "#",
        label: "Terms and Conditions",
      },
      {
        link: "#",
        label: "Privacy Policy",
      },
      {
        link: "#",
        label: "What's Next",
      },
      {
        link: "#",
        label: "Compliance Documents",
      },
    ],
  },
};

export const Footer = () => {
  return (
    <div className={`${classes["footer-container"]} py-5 md:px-28 px-8`}>
      <div className="flex flex-col md:flex-row gap-16 justify-between py-16">
        <div className={`flex flex-col gap-5 text-white md:w-4/12`}>
          <Logo width={125} height={23} />
          <Typography typeScale={"tinyText"} className={classes["footer-text"]}>
            We specialize in stock market advice and portfolio management,
            aiming for maximum returns on your investments.
          </Typography>
        </div>

        <div className="flex md:gap-11 gap-8">
          {Object.keys(footerData.menus).map((category) => (
            <div className="flex flex-col gap-5">
              <span className="text-white font-semibold">{category}</span>

              <ul className="flex flex-col gap-4">
                {footerData.menus[category].map((menuItem) => (
                  <li>
                    <a
                      href={menuItem.link}
                      className={`${classes["footer-text"]} text-xs font-semibold`}
                    >
                      {menuItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${classes["footer-text"]} text-xs text-center font-semibold`}
      >
        Vitta Flow © {new Date().getFullYear()}, All Rights Reserved
      </div>
    </div>
  );
};
