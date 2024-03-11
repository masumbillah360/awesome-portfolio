import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./src/components/header/Header";
import Navbar from "./src/components/Nav";
import Footer from "./src/components/Footer";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Masum Billah",
  description: "Web Developer -- Masum Billah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Header /> */}
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
