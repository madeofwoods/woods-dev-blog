import styles from "./allBlogLinks.module.css";
import { filterBlogsByYear, getPublishedBlogs, getYearsArray, sortBlogsByDate } from "@/utils/blogHelpers";
import BlogLinks from "../BlogLinks/BlogLinks";

const AllBlogLinks = ({ blogs }) => {
  const sortedBlogs = sortBlogsByDate(blogs);
  console.log(sortedBlogs);

  const publishedBlogs = getPublishedBlogs(sortedBlogs);
  const years = getYearsArray(blogs);

  return (
    <div className={styles.container}>
      {years.map((year) => (
        <div key={year} className={styles.yearContainer}>
          <div className={styles.year}>{year}</div>
          <BlogLinks blogs={filterBlogsByYear(publishedBlogs, year)} />
        </div>
      ))}
    </div>
  );
};

export default AllBlogLinks;
