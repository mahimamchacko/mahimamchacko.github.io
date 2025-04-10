import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { urbanist } from "./fonts";
import exp from "constants";

const metadata: Metadata = {
  title: "Mahima's Portfolio",
  description: "Generated by Mahima",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };
