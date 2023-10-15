import Link from "next/link";
import styles from "./blogLinks.module.css";
import { getAllBlogs } from "@/utils/blogHelpers";

const BlogLinks = () => {
  const links = getAllBlogs();
  console.log(links);
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <Link href={`/blog/${link.slug}`} key={link.slug}>
          {link.frontMatter.title}
        </Link>
      ))}
    </div>
  );
};

export default BlogLinks;
