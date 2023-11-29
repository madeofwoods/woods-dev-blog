import { dateFormat, getAllBlogs, getBlog, getHeadings } from "@/utils/blogHelpers";
import styles from "./blog.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/MDX/CustomComponents";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { dictionary } from "@/utils/definitions";
import Head from "next/head";

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
};

export const generateStaticParams = async () => {
  const posts = getAllBlogs();
  const params = posts.map((post) => ({ slug: post.slug }));
  return params;
};

const BlogPage = async ({ params }) => {
  const data = await getBlog(params.slug);
  console.log(params.slug);
  const { headings, ids } = getHeadings(data.content);
  console.log(headings);

  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta
          property="og:url"
          content={`blog.madeofwoods.com/${dictionary[data.frontMatter.topic].title}`}
          key="ogurl"
        />
        <meta property="og:image" content={"/img/moon.jpg"} key="ogimage" />
        <meta property="og:site_name" content="M A D E O F W O O D S" key="ogsitename" />
        <meta property="og:title" content={dictionary[data.frontMatter.topic].title} key="ogtitle" />
        {/* <meta property="og:description" content={description} key="ogdesc" /> */}
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.frontMatter.title}</h1>
        <div className={styles.subtitle}>
          <span>{dictionary[data.frontMatter.topic].title || ""}</span>
          {" // "}
          <span>{dateFormat(data.frontMatter.dateString)}</span>
        </div>
        <TableOfContents headings={headings} ids={ids} />
        <div className={styles.blogWrapper}>
          <MDXRemote source={data.content} components={components} options={mdxOptions} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
