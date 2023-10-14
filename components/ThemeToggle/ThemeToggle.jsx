"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.themeToggle} onClick={toggle}>
      THeM
    </div>
  );
};

export default ThemeToggle;
