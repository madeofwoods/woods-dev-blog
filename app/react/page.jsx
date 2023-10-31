import BallBackground from "@/components/BallBackground/BallBackground";
import styles from "./react.module.css";
import { getFilteredBlogs, getPublishedBlogs } from "@/utils/blogHelpers";
import TopicsPage from "@/components/TopicsPage/TopicsPage";

const ReactPage = () => {
  const blogs = getFilteredBlogs("react");
  const publishedBlogs = getPublishedBlogs(blogs);
  return (
    <div className={styles.container}>
      <TopicsPage blogs={publishedBlogs} title={"React"} />
      <BallBackground page={"react"} />
    </div>
  );
};

export default ReactPage;
