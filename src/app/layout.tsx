import { lora, open_sans } from "./fonts";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  themeColor: "black",
  title: "Hildor | Front-end engineer",
  description:
    "Desenvolvimento de sites, sistemas, blogs, aplicativos e manutenção de sistemas.",
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/android-chrome-192x192.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
  openGraph: {
    title: "Hildor | Front-end engineer",
    description:
      "Desenvolvimento de sites, sistemas, blogs, aplicativos e manutenção de sistemas.",
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
    index: false,
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
      <body className={`${lora.variable} ${open_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
