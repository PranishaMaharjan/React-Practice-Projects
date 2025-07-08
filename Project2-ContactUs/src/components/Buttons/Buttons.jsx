import styles from "./Buttons.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const Buttons = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Buttons;
