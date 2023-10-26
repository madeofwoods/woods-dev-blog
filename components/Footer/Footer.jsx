import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            M A D E O F W O O D S
          </Link>
          <div className={styles.copyright}>&copy; 2023 Matt Woods</div>
        </div>
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/react">
            React
          </Link>
          <Link className={styles.link} href="/three">
            ThreeJS
          </Link>
          <Link className={styles.link} href="/game">
            Games
          </Link>
        </div>
        <div className={styles.socials}>
          <Link className={styles.link} href="https://github.com/halfbloodquince" target="_blank">
            Github
          </Link>
          <Link className={styles.link} href="https://www.linkedin.com/in/madeofwoods/" target="_blank">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
