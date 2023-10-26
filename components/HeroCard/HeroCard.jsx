import styles from "./heroCard.module.css";

const HeroCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glass}>
        <div className={styles.title}>
          Hi there, I&apos;m <span className={styles.titleName}>Matt Woods</span>. Welcome to my blog.&nbsp;
          <div className={styles.titleSpan}>
            This is a coding journal, discussing things I create and learn on my journey as a frontend
            developer. I am focusing on React, NextJS, ThreeJS, React Three Fiber, Shaders and Game
            Development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
