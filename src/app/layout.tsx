import "./globals.css";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "건설클라우드",
    template: "건설클라우드 | %s",
  },
  description: "항상 고객에게 최선을 다하겠습니다!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="kr"
      className={`scroll-smooth ${inter.className}`}
      data-theme="corporate"
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
