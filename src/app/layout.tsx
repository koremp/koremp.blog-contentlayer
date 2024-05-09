import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "koremp || Dokyun Claire Lim | Software Engineer",
  description:
    "koremp's blog, Software Engineer with psychiatry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
