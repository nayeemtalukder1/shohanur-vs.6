// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Shohanur Rahman - Freelance Social Media & Search Engine",
  description: "Freelance Social Media & Search Engine",
  icons: {
    icon: "/favicon.png",        // default favicon
    shortcut: "/favicon.png",    // for older browsers
    apple: "/favicon.png", // (optional) iOS Safari
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-b from-purple-50 via-pink-50 to-green-50 text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}