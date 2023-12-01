import styles from "./navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import LogoTrees from "../LogoTrees/LogoTrees";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.homeContainer}>
          <Link href="/">
            <Image className={styles.home} src="/img/home.png" width={30} height={30} alt="svg" />
          </Link>
        </div>
        <Link href="/">
          <LogoTrees />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
