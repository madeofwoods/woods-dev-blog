import styles from "./navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import svgIcon from "../../public/svg/tree.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navLogo}>
          <Link href="/">
            <Image className={styles.logo} src={svgIcon} width={40} height={40} alt="svg" />
          </Link>
          {/* <SVGComponent /> */}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
