import Styles from "./card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Cardcompo({ imagen, title, subtitle }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}>
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={Styles.btnn}>
        <Button text="View More" title={title} />
        {/* <Button text="More" /> */}
      </div>
    </animated.div>
  );
}

export default Cardcompo;
