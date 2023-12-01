import { getBlog } from "@/utils/blogHelpers";
import { ImageResponse } from "next/server";

export const size = { width: 1200, height: 680 };
export const contentType = "image/png";
// export const runtime = "edge";

export default async function og({ params }) {
  try {
    const slug = params.slug;
    const blog = await getBlog(slug);

    // const interBold = await fetch(new URL("./Inter-Bold.ttf", import.meta.url)).then((res) =>
    //   res.arrayBuffer()
    // );

    // const image = await fetch(new URL(`https://localhost:3000/posts/${slug}/og.jpg`, import.meta.url)).then(
    //   (res) => res.arrayBuffer()
    // );
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <div style={{ position: "absolute", top: 70, left: 70, display: "flex" }}>
            <div className="blog" style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div className="square" style={{ width: 20, height: 20, backgroundColor: "white" }}></div>
              <div style={{ fontSize: "14px", letterSpacing: 2 }}>M A D E O F W O O D S</div>
            </div>
            {/* <img
              src={image}
              alt={blog?.frontMatter.title || "MADEOFWOODS"}
              style={{ display: "flex", flex: 1, width: 1200, height: 630 }}
            /> */}
          </div>
          <div
            className="circle"
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "linear-gradient(55deg, hotpink 20%, blue 45% ,aquamarine 86% )",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.8,
            }}
          ></div>
          <h1
            style={{
              fontSize: "35px",
              color: "white",
              padding: "20px 50px",
              position: "absolute",
              top: "75%",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {blog?.frontMatter.title}
          </h1>
        </div>
      ),
      {
        ...size,
        // fonts: [{ name: "Inter", data: interBold, style: "normal" }],
      }
    );
  } catch (e) {
    console.log(e);
  }
}
