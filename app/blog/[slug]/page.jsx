import { getBlog } from "@/utils/blogHelpers";
import styles from "./blog.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/MDX/CustomComponents";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import TableOfContents from "@/components/TableOfContents/TableOfContents";

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
};

const getHeadings = (data) => {
  const headings = data
    .split("\n")
    .filter((line) => line[0] === "#")
    .map((line) => line.slice(2));

  const headingsWithId = headings.map((heading) => ({
    heading: heading,
    id: heading.toLowerCase().split(" ").join("-"),
  }));

  const ids = headings.map((heading) => heading.toLowerCase().split(" ").join("-"));

  console.log(headingsWithId);
  console.log(ids);

  return { headings: headingsWithId, ids };
};

const BlogPage = async ({ params }) => {
  console.log(params);
  const data = await getBlog(params.slug);
  console.log(data.content);
  const { headings, ids } = getHeadings(data.content);
  console.log(headings);
  console.log(ids);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.frontMatter.title}</h1>
      <TableOfContents headings={headings} ids={ids} />
      <div className={styles.blogWrapper}>
        <MDXRemote source={data.content} components={components} options={mdxOptions} />
      </div>
    </div>
  );
};

export default BlogPage;
