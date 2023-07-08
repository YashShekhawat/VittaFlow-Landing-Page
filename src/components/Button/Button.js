import * as classes from "./Button.module.css";

export const Button = ({ children }) => {
  return (
    <button className={`${classes["button"]} text-white text-sm font-semibold`}>
      {children}
    </button>
  );
};

export default Button;
