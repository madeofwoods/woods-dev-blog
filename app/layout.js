import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// metadataBase can be combined with canonical on other pages
//template will replace %s with provided string on other pages
export const metadata = {
  metadataBase: new URL("https://blog.madeofwoods.com/"),
  title: { default: "MADEOFWOODS", template: `%s | M A D E O F W O O D S` },
  description: "Explore the latest posts from my frontend dev blog.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, minimal-ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              <div className="wrapper">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
