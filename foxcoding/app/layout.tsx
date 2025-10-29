import type { Metadata } from "next";
import { inter } from '@/app/fonts';
import { Header } from "@/components/layout/header";
import "./globals.css";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "FoxCoding",
  description: "Promoting interest in computing and information technologies among members of the Cetys community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
