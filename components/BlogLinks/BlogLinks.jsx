import Link from "next/link";
import styles from "./blogLinks.module.css";

const BlogLinks = ({ blogs }) => {
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.slug} className={styles.glass}>
          <div className={styles.linkText}>
            <div className={styles.linkDate}>{blog.frontMatter.dateString}</div>
            <div className={styles.linkTitle}>{blog.frontMatter.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogLinks;
