import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./game.module.css";
import { getFilteredBlogs } from "@/utils/blogHelpers";
import TopicsPage from "@/components/TopicsPage/TopicsPage";

const GamePage = () => {
  const blogs = getFilteredBlogs("game");
  return (
    <div className={styles.container}>
      <TopicsPage blogs={blogs} title={"Game Dev"} />
      <BallBackground page={"game"} />
    </div>
  );
};

export default GamePage;
