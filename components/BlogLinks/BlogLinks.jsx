import Link from "next/link";
import styles from "./blogLinks.module.css";

const formatDate = (date) => {
  return `${date.slice(6, 11)}-${date.slice(3, 5)}-${date.slice(0, 2)}`;
};

const sortBlogsByDate = (blogs) => {
  const sortedBlogs = blogs.sort((a, b) => {
    return (
      new Date(formatDate(b.frontMatter.dateString)).getTime() -
      new Date(formatDate(a.frontMatter.dateString)).getTime()
    );
  });

  return sortedBlogs;
};

const BlogLinks = ({ blogs }) => {
  const sortedBlogs = sortBlogsByDate(blogs);
  return (
    <div className={styles.container}>
      {sortedBlogs.map((blog) => (
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
