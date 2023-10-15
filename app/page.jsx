import styles from "./page.module.css";
import BlogLinks from "@/components/BlogLinks/BlogLinks";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogLinks />
    </div>
  );
}
