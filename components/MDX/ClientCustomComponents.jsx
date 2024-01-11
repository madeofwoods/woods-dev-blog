"use client";

import Image from "next/image";
import styles from "./customMDX.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

export const Item = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li className={styles.li}>
      <span>
        <Image
          className={styles.icon}
          src={theme == "light" ? "/img/greenArrowWide.png" : "/img/lilacArrowWide.png"}
          alt=""
          width={16}
          height={16}
        />
      </span>
      <span>{children}</span>
    </li>
  );
};

// export const LinkedIn = ({ link = "http://localhost:3000/posts/generate-dynamic-og-images-with-nextjs" }) => {
//   return (
//     <Link href={link} target="_blank">
//       <div className={styles.linkedInContainer}>
//         <div className="titles">
//           <Image className={styles.linedInAvatar} src={"/img/dog.jpg"} alt="" width={50} height={50} />
//           <div>hello</div>
//         </div>
//       </div>
//     </Link>
//   );
// };
