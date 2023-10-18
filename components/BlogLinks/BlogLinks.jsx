import Link from "next/link";
import styles from "./blogLinks.module.css";
import { getAllBlogs } from "@/utils/blogHelpers";

const BlogLinks = () => {
  const links = getAllBlogs();
  links.reverse();
  return (
    <div className={styles.container}>
      <div className={styles.year}>2023</div>
      {links.map((link) => (
        <Link href={`/blog/${link.slug}`} key={link.slug} className={styles.link}>
          <div className={styles.glass}>
            <div className={styles.linkText}>
              <div className={styles.linkDate}>{link.frontMatter.dateString}</div>
              <div className={styles.linkTitle}>{link.frontMatter.title}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogLinks;
