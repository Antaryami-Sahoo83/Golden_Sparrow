import { useNavigate } from "react-router";
import Styles from "./button.module.css";

function Button({ text, title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/jwellery/${title}`);
  };
  return (
    <button className={Styles.btn} onClick={() => handleClick()}>
      {text}
    </button>
  );
}

export default Button;
