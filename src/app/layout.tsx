import Script from "next/script";
import { lora, open_sans } from "./fonts";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  themeColor: "black",
  title: "Hildor Júnior | Senior Front-end Engineer",
  description:
    "Development and maintenance of websites, mobile apps, systems, blogs and applications.",
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/images/android-chrome-192x192.png",
    shortcut: "/images/android-chrome-512x512.png",
    apple: "/images/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/apple-touch-icon.png",
    },
  },
  openGraph: {
    title: "Hildor Júnior | Senior Front-end Engineer",
    description:
      "Development and maintenance of websites, mobile apps, systems, blogs and applications.",
    url: "https://hildor.dev",
    siteName: "Hildor",
    images: [
      {
        url: "https://hildor.dev/_next/image?url=%2Fprofile.jpg&w=640&q=75",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${lora.variable} ${open_sans.variable}`}>
        {children}
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-54463958-2"
        ></Script>
        {/* Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/2796ccc163.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
      </body>
    </html>
  );
}
