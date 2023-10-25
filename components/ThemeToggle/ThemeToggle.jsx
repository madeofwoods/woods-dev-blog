"use client";

import { useContext, useState } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    toggle();
    !isClicked && setIsClicked(true);
    console.log(isClicked);
  };

  return (
    <div className={styles.themeToggle} onClick={handleClick}>
      <div
        className={`${styles.moonContainer} ${
          !isClicked ? styles[`loadMoon${theme}`] : theme == "light" ? styles.moonLight : styles.moonDark
        }`}
      >
        <Image className={styles.moonImg} src="/img/moonTexture.png" width={30} height={30} alt="" />
      </div>
      <div
        className={`${styles.sunContainer}  ${
          !isClicked ? styles[`loadSun${theme}`] : theme == "light" ? styles.sunLight : styles.sunDark
        }`}
      >
        <div className={styles.sun}></div>
      </div>
      <div
        className={`${styles.sunset}  ${
          !isClicked ? styles.none : theme == "light" ? styles.sunRises : styles.sunSets
        }`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
