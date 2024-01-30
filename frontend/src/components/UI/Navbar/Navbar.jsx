import React from "react";
import styles from "./Navbar.module.css";
import LinkButton from "../LinkButton/LinkButton";

const Navbar = () => {
  return (
    <div className={styles.bar}>
      <LinkButton to={"/cats"}>Все котики</LinkButton>
      <LinkButton to={"/liked"}>Любимые котики</LinkButton>
    </div>
  );
};

export default Navbar;
