import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./three.module.css";
import TopicsPage from "@/components/TopicsPage/TopicsPage";
import { getFilteredBlogs } from "@/utils/blogHelpers";

const ThreePage = () => {
  const blogs = getFilteredBlogs("three");
  return (
    <div className={styles.container}>
      <TopicsPage blogs={blogs} title={"3D Dev"} />
      <BallBackground page={"three"} />
    </div>
  );
};

export default ThreePage;
