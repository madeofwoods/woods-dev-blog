import styles from "./allBlogLinks.module.css";
import {
  filterBlogsByYear,
  getAllBlogs,
  getPublishedBlogs,
  getYearsArray,
  sortBlogsByDate,
} from "@/utils/blogHelpers";
import BlogLinks from "../BlogLinks/BlogLinks";

export const generateStaticParams = () => {
  const blogs = getAllBlogs();
  console.log(blogs);
  return { blogs: blogs };
};
const AllBlogLinks = async ({ blogs }) => {
  const sortedBlogs = await sortBlogsByDate(blogs);
  console.log(sortedBlogs);

  // const publishedBlogs = await getPublishedBlogs(sortedBlogs);
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
