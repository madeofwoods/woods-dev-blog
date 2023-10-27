import BlurBackground from "@/components/BallBackground/BallBackground";
import styles from "./page.module.css";
import AllBlogLinks from "@/components/AllBlogLinks/AllBlogLinks";
import HeroCard from "@/components/HeroCard/HeroCard";
import Topics from "@/components/Topics/Topics";
import { getAllBlogs } from "@/utils/blogHelpers";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroCard />
      <Topics />
      <AllBlogLinks blogs={getAllBlogs()} />
      <BlurBackground page={"home"} />
    </div>
  );
}
