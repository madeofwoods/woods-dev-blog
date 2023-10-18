import Link from "next/link";
import styles from "./topicsCard.module.css";

const dictionary = {
  three: { title: "3D Dev", desc: "My ThreeJS journey, using RTF and WebGL" },
  react: { title: "React", desc: "My web dev journey, using React and NextJS" },
  game: { title: "Game Dev", desc: "My game dev journey with JS and Unity" },
};

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
