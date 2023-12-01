import { getBlog } from "@/utils/blogHelpers";
import { ImageResponse } from "next/server";

export const size = { width: 1200, height: 680 };
export const contentType = "image/png";

export default async function og({ params }) {
  try {
    const slug = params.slug;
    const blog = await getBlog(slug);

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
              <div className="square" style={{ width: 27, height: 27, backgroundColor: "white" }}></div>
              <div style={{ fontSize: "22px", letterSpacing: 2, fontWeight: "bold" }}>
                M A D E O F W O O D S
              </div>
            </div>
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
              fontSize: "37px",
              color: "white",
              padding: "20px 50px",
              position: "absolute",
              top: "72%",
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
      }
    );
  } catch (e) {
    console.log(e);
  }
}
