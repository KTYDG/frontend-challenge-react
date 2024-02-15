import { Link, LinkProps, useLocation } from "react-router-dom";
import styles from "./LinkButton.module.css";

const LinkButton = ({ children, to }: LinkProps) => {
  const path = useLocation().pathname;
  const match = path === to;
  return (
    <Link
      className={match ? `${styles.link} ${styles.active}` : styles.link}
      to={to}
    >{}
      {children}
    </Link>
  );
};

export default LinkButton;
