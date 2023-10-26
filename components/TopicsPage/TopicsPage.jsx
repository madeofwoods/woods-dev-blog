import React from "react";
import Glass from "../Glass/Glass";
import BlogLink from "../BlogLinks/BlogLinks";
import styles from "./topicsPage.module.css";

const TopicsPage = ({ blogs, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Glass>
          <div className={styles.title}>{title}</div>
        </Glass>
      </div>
      <div className={styles.fadeIn}>
        {blogs.length > 0 ? (
          <BlogLink blogs={blogs} />
        ) : (
          <div className={styles.emptyBlogContainer}>
            <Glass>
              <div className={styles.emptyBlog}>🚧 Blog In Construction 🚧</div>
            </Glass>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicsPage;
