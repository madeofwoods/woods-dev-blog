import fs from "fs";
import matter from "gray-matter";
import path from "path";

//get all blogs from blogPosts folder
export const getAllBlogs = () => {
  const files = fs.readdirSync("blogPosts");

  const posts = files.map((filename) => {
    const mdxWithMeta = fs.readFileSync(path.join(process.cwd(), "blogPosts", filename));
    const { data: frontMatter } = matter(mdxWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts;
};

// for filtering by topic -- React, 3D, Game
export const getFilteredBlogs = (topic) => {
  const blogs = getAllBlogs();
  const sortedBlogs = sortBlogsByDate(blogs);

  return sortedBlogs.filter((blog) => blog.frontMatter.topic == topic);
};

//get the post for the posts/[slug] page
export const getBlog = async (slug) => {
  const source = fs.readFileSync(path.join(process.cwd(), "blogPosts", slug + ".mdx"), "utf-8");

  const { data: frontMatter, content } = matter(source);

  return {
    content,
    frontMatter,
  };
};

//return the headings and the ids for the TOC -- this should be refactored along with TableOfContents.jsx to use ids from the headingsWithId object
export const getHeadings = (data) => {
  const headings = data
    .split("\n")
    .filter((line) => line[0] === "#")
    .map((line) => line.slice(2));

  const headingsWithId = headings.map((heading) => ({
    heading: heading,
    id: heading.toLowerCase().split(" ").join("-"),
  }));

  const ids = headings.map((heading) => heading.toLowerCase().split(" ").join("-"));

  return { headings: headingsWithId, ids };
};

//note -- sort mutates original array. so the return is most likely redundant. Can be refactored.
export const sortBlogsByDate = (blogs) => {
  const sortedBlogs = blogs.sort((a, b) => {
    return new Date(b.frontMatter.dateString).getTime() - new Date(a.frontMatter.dateString).getTime();
  });

  return sortedBlogs;
};

//for displaying blogs on homepage
export const filterBlogsByYear = (blogs, year) => {
  return blogs.filter((blog) => blog.frontMatter.dateString.slice(0, 4) == year);
};

export const getPublishedBlogs = (blogs) => {
  return blogs.filter((blog) => blog.frontMatter.isPublished);
};

//for displaying years on homepage
export const getYearsArray = (blogs) => {
  const publishedBlogs = getPublishedBlogs(blogs);

  return [...new Set(publishedBlogs.map((item) => String(item.frontMatter.dateString).slice(0, 4)))];
};

export const dateFormat = (date) => {
  const dateString = new Date(date);
  return dateString.toUTCString().slice(4, 16);
};
