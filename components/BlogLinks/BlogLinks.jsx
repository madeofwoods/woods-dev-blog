import Link from "next/link";
import styles from "./blogLinks.module.css";
import { sortBlogsByDate } from "@/utils/blogHelpers";

const BlogLinks = ({ blogs }) => {
  const sortedBlogs = sortBlogsByDate(blogs);

  return (
    <div className={styles.container}>
      {sortedBlogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.slug} className={styles.glass}>
          <div className={styles.linkText}>
            <div className={styles.linkDate}>
              {new Date(blog.frontMatter.dateString).toUTCString().slice(5, 11)}
            </div>
            <div className={styles.linkTitle}>{blog.frontMatter.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogLinks;
