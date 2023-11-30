// import { getBlog } from "@/utils/blogHelpers";
// import { ImageResponse } from "next/server";

// // export const size = { width: 1200, height: 680 };
// // export const contentType = "image/png";
// // export const runtime = "edge";

// export default async function og({ params }) {
//   try {
//     const slug = params.slug;
//     const blog = await getBlog(slug);

//     // const fontData = await fetch(new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url)).then((res) =>
//     //   res.arrayBuffer()
//     // );

//     // const image = await fetch(new URL("./ogImg.jpg", import.meta.url)).then((res) => res.arrayBuffer());
//     return new ImageResponse(
//       (
//         <div
//           style={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             color: "white",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "20px",
//             position: "relative",
//           }}
//         >
//           <div style={{ position: "absolute", top: 0, left: 0 }}>
//             <img
//               src={"./ogImg.jpg"}
//               alt={blog?.frontMatter.title || "MADEOFWOODS"}
//               style={{ display: "flex", flex: 1, width: 1200, height: 630 }}
//             />
//           </div>
//           <div style={{ fontSize: "30px", color: "white", padding: "20px 50px" }}>
//             {blog?.frontMatter.title}
//           </div>
//         </div>
//       ),
//       {
//         ...size,
//         // fonts: [{ name: "Inter", data: fontData, style: "normal" }],
//       }
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }
