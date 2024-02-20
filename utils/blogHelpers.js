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

// From interview with Max, for future ref

// const getHeadingsGeneric = (data, number = 1) => {
//   const headings = data
//     .split("\n")
//     .filter((line) => line.startsWith(`${"#".repeat(number)} `))
//     .map((line) => line.slice(1 + number));
// };

//return the headings, ids and h for the TOC
export const getHeadings = (data) => {
  const headings = data.split("\n").filter((line) => line.startsWith("#"));

  const headingsWithId = headings.map((heading) => {
    const trimmedHeading = heading.replace(/#/g, "").trim();
    return {
      heading: trimmedHeading,
      id: trimmedHeading.toLowerCase().split(" ").join("-"),
      htagLevel: heading.split(" ")[0].length,
    };
  });

  return { headings: headingsWithId };
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
