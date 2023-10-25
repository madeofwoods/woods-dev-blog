import styles from "./heroCard.module.css";

const HeroCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glass}>
        <div className={styles.title}>
          Hi there, I&apos;m Matt. Welcome to my diary!&nbsp;
          <div className={styles.titleSpan}>
            Here I share my experiences as a frontend developer, focusing on React, NextJS, React Three Fiber,
            Shaders and Game Development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
