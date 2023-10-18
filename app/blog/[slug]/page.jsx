import { getBlog, getHeadings } from "@/utils/blogHelpers";
import styles from "./blog.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/MDX/CustomComponents";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { dictionary } from "@/utils/definitions";

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
};

const BlogPage = async ({ params }) => {
  const data = await getBlog(params.slug);
  const { headings, ids } = getHeadings(data.content);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.frontMatter.title}</h1>
      <div className={styles.subtitle}>
        <span>{dictionary[data.frontMatter.topic].title || ""}</span>
        {" // "}
        <span>{data.frontMatter.dateString}</span>
      </div>
      <TableOfContents headings={headings} ids={ids} />
      <div className={styles.blogWrapper}>
        <MDXRemote source={data.content} components={components} options={mdxOptions} />
      </div>
    </div>
  );
};

export default BlogPage;
