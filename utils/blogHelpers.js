import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getAllBlogs = () => {
  const files = fs.readdirSync("posts");

  const posts = files.map((filename) => {
    const mdxWithMeta = fs.readFileSync(path.join(process.cwd(), "posts", filename));
    const { data: frontMatter } = matter(mdxWithMeta);
    console.log(frontMatter);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts;
};

export const getFilteredBlogs = (topic) => {
  const blogs = getAllBlogs();

  return blogs.filter((blog) => blog.frontMatter.topic == topic);
};

export const getBlog = async (slug) => {
  console.log(slug);
  const source = fs.readFileSync(path.join(process.cwd(), "posts", slug + ".mdx"), "utf-8");

  const { data: frontMatter, content } = matter(source);
  console.log(content);

  return {
    content,
    frontMatter,
  };
};

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
