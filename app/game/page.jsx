import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./game.module.css";
import { getFilteredBlogs, getPublishedBlogs } from "@/utils/blogHelpers";
import TopicsPage from "@/components/TopicsPage/TopicsPage";

const GamePage = () => {
  const blogs = getFilteredBlogs("game");
  const publishedBlogs = getPublishedBlogs(blogs);
  return (
    <div className={styles.container}>
      <TopicsPage blogs={publishedBlogs} title={"Game Dev"} />
      <BallBackground page={"game"} />
    </div>
  );
};

export default GamePage;
