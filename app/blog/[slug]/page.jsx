import { getBlog } from "@/utils/blogHelpers";
import styles from "./blog.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/MDX/CustomComponents";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
};

const BlogPage = async ({ params }) => {
  console.log(params);
  const data = await getBlog(params.slug);
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.frontMatter.title}</h1>
      <div className={styles.blogWrapper}>
        <MDXRemote source={data.content} components={components} options={mdxOptions} />
      </div>
    </div>
  );
};

export default BlogPage;
