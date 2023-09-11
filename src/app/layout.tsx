import "./globals.css";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import { Gothic_A1 } from "next/font/google";
import type { Metadata } from "next";

const gothicA1 = Gothic_A1({ subsets: ["latin"], weight: "600" });

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
      className={`scroll-smooth ${gothicA1.className}`}
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
