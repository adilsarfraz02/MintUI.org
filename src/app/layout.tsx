import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Nav from "@/components/ui/Navbar";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Mint UI | React Beautiful Components Libary</title>
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
        <Analytics mode={"production"} />;
      </body>
    </html>
  );
}
