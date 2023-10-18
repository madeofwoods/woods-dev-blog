import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./react.module.css";

const ReactPage = () => {
  return (
    <div className={styles.container}>
      <BallBackground page={"react"} />
    </div>
  );
};

export default ReactPage;
