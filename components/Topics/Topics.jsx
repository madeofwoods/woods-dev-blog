import TopicsCard from "../TopicsCard/TopicsCard";
import styles from "./topics.module.css";
const Topics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topicsContainer}>
        <TopicsCard topic="react" />
        <TopicsCard topic="three" />
        <TopicsCard topic="game" />
      </div>
    </div>
  );
};

export default Topics;
