import Link from "next/link";
import styles from "./footer.module.css";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            M A D E O F W O O D S
          </Link>
          <div className={styles.copyright}>
            &copy; 2024 Matt Woods &mdash; <span className={`${dancingScript.className} ${styles.berlin}`}>Berlin</span>
          </div>
        </div>
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/react">
            React
          </Link>
          <Link className={styles.link} href="/three">
            3D Dev
          </Link>
          <Link className={styles.link} href="/game">
            Games
          </Link>
        </div>
        <div className={styles.socials}>
          <Link className={styles.link} href="https://github.com/madeofwoods" target="_blank">
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
