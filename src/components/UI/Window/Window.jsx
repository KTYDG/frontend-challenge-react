import React from "react";
import styles from "./Window.module.css";

const Window = ({ children }) => {
  return <div className={styles.window}>{children}</div>;
};

export default Window;
