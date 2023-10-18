import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./game.module.css";

const GamePage = () => {
  return (
    <div className={styles.container}>
      <BallBackground page={"game"} />
    </div>
  );
};

export default GamePage;
