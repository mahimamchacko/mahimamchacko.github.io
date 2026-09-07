import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { urbanist } from "./fonts";

const metadata: Metadata = {
  title: "Mahima Chacko",
  description:
    "Portfolio of Mahima Chacko, a software developer building scalable systems in C#, .NET, and TypeScript.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };
