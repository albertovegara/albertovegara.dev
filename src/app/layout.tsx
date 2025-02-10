import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "alberto-vb.dev",
  description: "Portfolio Web",
  keywords: [
    "alberto-vb",
    "software engineer",
    "web developer",
    "portfolio",
    "alberto vegara belmonte",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Global OG Meta */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Alberto Vegara Belmonte" />
      <meta name="author" content="alberto-vb" />

      <body className="min-h-screen scroll-smooth bg-neutral-100 font-sans antialiased dark:bg-neutral-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-4xl mx-auto px-4 py-4 md:py-6 flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
