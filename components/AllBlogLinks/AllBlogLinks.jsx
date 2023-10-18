import styles from "./allBlogLinks.module.css";
import { getAllBlogs } from "@/utils/blogHelpers";
import BlogLink from "../BlogLinks/BlogLinks";

const AllBlogLinks = () => {
  const links = getAllBlogs();
  links.reverse();
  console.log(links);
  return (
    <div className={styles.container}>
      <div className={styles.year}>2023</div>
      <BlogLink blogs={links} />
    </div>
  );
};

export default AllBlogLinks;
