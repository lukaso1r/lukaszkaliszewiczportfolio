import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; 
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: "swap"
});

export const metadata: Metadata = {
  title: "Łukasz Kaliszewicz - Portfolio",
  description: "Początkujący DevOps / IT Administrator"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
            {children}
          <Footer />        
        </ThemeProvider>
      </body>
    </html>
  );
}
