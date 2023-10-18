import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./three.module.css";

const ThreePage = () => {
  return (
    <div className={styles.container}>
      <BallBackground page={"three"} />
    </div>
  );
};

export default ThreePage;
