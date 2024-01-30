import React, { useState } from "react";
import styles from "./CatImg.module.css";
import HeartButton from "../HeartButton/HeartButton";

const CatImg = ({ src, id, liked }) => {
  const [clicked, setClicked] = useState(liked);
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={styles.cont}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={styles.box} src={src} alt="" />
      {hover && (
        <HeartButton id={id} clicked={clicked} setClicked={setClicked} />
      )}
    </div>
  );
};

export default CatImg;
