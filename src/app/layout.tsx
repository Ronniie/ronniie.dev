import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ronniie's Terminal",
  description: "A showcase of experimental projects hosted on *.ronniie.dev. Each project is a unique experiment, from fun visualizations to useful tools.",
  keywords: "terminal, projects, web development, experiments, tools, utilities",
  authors: [{ name: "Ronniie" }],
  creator: "Ronniie",
  publisher: "Ronniie",
  robots: "index, follow",
  themeColor: "#f97316", // orange-500
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ronniie.dev',
    title: "Ronniie's Terminal",
    description: "A showcase of experimental projects hosted on *.ronniie.dev. Each project is a unique experiment, from fun visualizations to useful tools.",
    siteName: "Ronniie's Terminal",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ronniie's Terminal",
    description: "A showcase of experimental projects hosted on *.ronniie.dev. Each project is a unique experiment, from fun visualizations to useful tools.",
    creator: '@ronniie',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
