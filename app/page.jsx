import BlurBackground from "@/components/BallBackground/BallBackground";
import styles from "./page.module.css";
import BlogLinks from "@/components/BlogLinks/BlogLinks";
import HeroCard from "@/components/HeroCard/HeroCard";
import Topics from "@/components/Topics/Topics";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroCard />
      <Topics />
      <BlogLinks />
      <BlurBackground page={"home"} />
    </div>
  );
}
