"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.themeToggle} onClick={toggle}>
      <div className={`${styles.moonContainer} ${theme == "light" ? styles.moonLight : styles.moonDark}`}>
        <div className={styles.moon}></div>
      </div>
      <div className={`${styles.sunContainer}  ${theme == "light" ? styles.sunLight : styles.sunDark}`}>
        <div className={styles.sun}></div>
      </div>

      <div className={`${styles.sunset}  ${theme == "light" ? styles.sunRises : styles.sunSets}`}></div>
    </div>
  );
};

export default ThemeToggle;
