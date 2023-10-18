import Link from "next/link";
import styles from "./topicsCard.module.css";
import { dictionary } from "@/utils/definitions";
const TopicsCard = ({ topic }) => {
  return (
    <Link href={`/${topic}`} className={styles.container}>
      <div className={`${styles.ball} ${styles[topic]}`}></div>
      <div className={styles.title}>{dictionary[topic].title}</div>
      <div className={styles.desc}>{dictionary[topic].desc}</div>
    </Link>
  );
};

export default TopicsCard;
