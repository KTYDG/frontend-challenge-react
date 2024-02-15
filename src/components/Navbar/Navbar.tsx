import styles from "./Navbar.module.css";
import LinkButton from "../LinkButton/LinkButton";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.bar}>
        <LinkButton to="/cats">Все котики</LinkButton>
        <LinkButton to="/liked">Любимые котики</LinkButton>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
