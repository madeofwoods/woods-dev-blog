import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./react.module.css";
import { getFilteredBlogs } from "@/utils/blogHelpers";
import TopicsPage from "@/components/TopicsPage/TopicsPage";

const ReactPage = () => {
  const blogs = getFilteredBlogs("react");
  return (
    <div className={styles.container}>
      <TopicsPage blogs={blogs} title={"React"} />
      <BallBackground page={"react"} />
    </div>
  );
};

export default ReactPage;
