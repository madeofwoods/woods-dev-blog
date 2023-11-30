// import Image from "next/image";
// import { ImageResponse } from "next/server";

// export const runtime = "edge";

// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const hasTitle = searchParams.has("title");
//     const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "M A D E O F W O O D S";

//     const fontData = await fetch(new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url)).then((res) =>
//       res.arrayBuffer()
//     );

//     const image = await fetch(new URL("../../assets/images/mountains.jpg", import.meta.url)).then((res) =>
//       res.arrayBuffer()
//     );

//     return new ImageResponse(
//       (
//         <div
//           style={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             color: "black",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "20px",
//             position: "relative",
//             backgroundColor: "#0c0c40",
//             // backgroundImage: url("../../assets/images/mountains.jpg"),
//           }}
//           className="ogContainer"
//         >
//           <h1
//             style={{
//               fontSize: "50px",
//               fontWeight: "700",
//               fontFamily: "Inter",
//               zIndex: 5,
//               position: "relative",
//               color: "white",
//             }}
//           >
//             {title}
//           </h1>
//           <img
//             width={"20%"}
//             height={"20%"}
//             src={image}
//             alt=""
//             style={{ position: "absolute", zIndex: -1, top: "10%" }}
//           />
//         </div>
//       ),
//       {
//         fonts: [{ name: "Inter", data: fontData, style: "normal" }],
//       }
//     );
//   } catch (e) {
//     return new Response("Failed to generate OG image", { status: 500 });
//   }
// }
