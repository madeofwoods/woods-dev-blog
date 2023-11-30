import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://blog.madeofwoods.com/"),
  title: { default: "MADEOFWOODS", template: `%s | MADEOFWOODS` },
  description: "Explore the latest posts from my frontend dev blog.",
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
      </body>
    </html>
  );
}
