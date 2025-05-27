import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ronniie.dev",
  description: "A showcase of experimental projects hosted on *.ronniie.dev. Each project is a unique experiment, from fun visualizations to useful tools.",
  keywords: "terminal, projects, web development, experiments, tools, utilities",
  authors: [{ name: "Ronniie" }],
  creator: "Ronniie",
  publisher: "Ronniie",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ronniie.dev',
    title: "ronniie.dev",
    description: "A showcase of experimental projects hosted on *.ronniie.dev. Each project is a unique experiment, from fun visualizations to useful tools.",
    siteName: "ronniie.dev",
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'ronniie.dev favicon',
        type: 'image/x-icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "ronniie.dev",
    description: "A showcase of experimental projects hosted on *.ronniie.dev. Each project is a unique experiment, from fun visualizations to useful tools.",
    creator: '@ronniie',
    images: ['/favicon.png'],
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
      <head>
        {/* Theme Colors */}
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-navbutton-color" content="#f97316" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#f97316" />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
