import type { Metadata } from "next";
import { inter } from '@/app/fonts';
import { Header } from "@/components/layout/header";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "FoxCoding",
  description: "Promoting interest in computing and information technologies among members of the Cetys community",
  icons: {
    icon: [
      { url: "/favicon-light.svg?v=2", media: "(prefers-color-scheme: light)", type: "image/svg+xml" },
      { url: "/favicon-dark.svg?v=2",  media: "(prefers-color-scheme: dark)",  type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
