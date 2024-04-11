import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative font-sans antialiased", inter.className)}>
        <main className="relative min-h-screen flex flex-col">
          <div className="flex-grow">
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
