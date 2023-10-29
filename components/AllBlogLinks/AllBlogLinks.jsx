import styles from "./allBlogLinks.module.css";
import { filterBlogsByYear, getYearsArray, sortBlogsByDate } from "@/utils/blogHelpers";
import BlogLinks from "../BlogLinks/BlogLinks";

const AllBlogLinks = ({ blogs }) => {
  const sortedBlogs = sortBlogsByDate(blogs);
  const years = getYearsArray(blogs);

  return (
    <div className={styles.container}>
      {years.map((year) => (
        <div key={year} className={styles.yearContainer}>
          <div className={styles.year}>{year}</div>
          <BlogLinks blogs={filterBlogsByYear(sortedBlogs, year)} />
        </div>
      ))}
    </div>
  );
};

export default AllBlogLinks;
