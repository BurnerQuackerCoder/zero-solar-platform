import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zero Solar | Funds & Infrastructure Management",
  description: "Zero-investment solar infrastructure for Mumbai high-rises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer /> {/* Consistent footer across all pages */}
      </body>
    </html>
  );
}