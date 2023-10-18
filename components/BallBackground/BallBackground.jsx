import styles from "./ballBackground.module.css";

const BallBackground = ({ page }) => {
  const ballPage = `${page}Ball`;
  const blurPage = `${page}Blur`;
  return (
    <div className={styles.container}>
      <div className={`${styles.ball}  ${styles[ballPage]}`}></div>
      <div className={`${styles.blur} ${styles[page]} ${styles[blurPage]}`}></div>
      <div className={styles.blurCover}></div>
    </div>
  );
};

export default BallBackground;
