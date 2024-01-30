import React, { useState } from "react";
import styles from "./HeartButton.module.css";
import { ReactComponent as Heart } from "../../../img/heart.svg";
import { ReactComponent as Favorite } from "../../../img/favorite.svg";
import { ReactComponent as Hover } from "../../../img/hover.svg";
import { useCookies } from "react-cookie";

const HeartButton = ({ id, clicked, setClicked }) => {
  const [cookies, setCookie] = useCookies();
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const liked = () => {
    if (clicked) {
      if (cookies.liked)
        setCookie(
          "liked",
          cookies.liked.filter((elem) => elem !== id)
        );
    } else {
      if (cookies.liked) setCookie("liked", [...cookies.liked, id]);
      else setCookie("liked", [id]);
    }
    setClicked(!clicked);
  };

  return (
    <button
      className={styles.button}
      onClick={liked}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? <Hover /> : clicked ? <Favorite /> : <Heart />}
    </button>
  );
};

export default HeartButton;
