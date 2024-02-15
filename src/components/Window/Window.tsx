import React from "react";
import styles from "./Window.module.css";

type WindowProps = {
  children: React.ReactNode,
}

const Window = ({ children }: WindowProps) => {
  return <div className={styles.window}>{children}</div>;
};

export default Window;
