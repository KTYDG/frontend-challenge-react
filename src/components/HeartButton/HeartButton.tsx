import { SetStateAction, useState } from "react";
import styles from "./HeartButton.module.css";
import Heart from "../../img/heart.svg?react";
import Favorite from "../../img/favorite.svg?react";
import Hover from "../../img/hover.svg?react";
import { useCookies } from "react-cookie";

type HeartButtonProps = {
  id: string,
  clicked: boolean,
  setClicked: React.Dispatch<SetStateAction<boolean>>,
}

const HeartButton = ({ id, clicked, setClicked }: HeartButtonProps) => {
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
          cookies.liked.filter((elem: string) => elem !== id)
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
