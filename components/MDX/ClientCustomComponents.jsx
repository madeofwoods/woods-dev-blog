"use client";

import Image from "next/image";
import styles from "./customMDX.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const Item = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li className={styles.li}>
      <span>
        <Image
          className={styles.icon}
          src={theme == "light" ? "/img/blackList.png" : "/img/blueList.png"}
          alt=""
          width={14}
          height={14}
        />
      </span>
      <span>{children}</span>
    </li>
  );
};
