import { lora, open_sans } from './fonts';
import './globals.scss';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'black',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hildor.dev'),
  title: 'Hildor Júnior | Full-Stack Software Engineer',
  description: 'Full-stack developer with 9+ years of experience building software across finance, healthcare, logistics, and social platforms. Sharing insights on software development, leadership, and technology.',
  category: 'technology',
  keywords: ['software engineer', 'full-stack developer', 'web development', 'software architecture', 'agile', 'leadership', 'innovation'],
  authors: [{ name: 'Hildor Júnior' }],
  icons: {
    icon: '/images/android-chrome-192x192.png',
    shortcut: '/images/android-chrome-512x512.png',
    apple: '/images/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/apple-touch-icon.png',
    },
  },
  openGraph: {
    title: 'Hildor Júnior | Full-Stack Software Engineer',
    description: 'Full-stack developer with 9+ years of experience building software across finance, healthcare, logistics, and social platforms. Sharing insights on software development, leadership, and technology.',
    url: 'https://hildor.dev',
    siteName: 'Hildor Júnior',
    images: [
      {
        url: 'https://hildor.dev/images/profile-2.jpg',
        width: 500,
        height: 500,
        alt: 'Hildor Júnior - Full-Stack Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hildor Júnior | Full-Stack Software Engineer',
    description: 'Full-stack developer with 9+ years of experience. Sharing insights on software development, leadership, and technology.',
    images: ['https://hildor.dev/images/profile-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <head>
        <link rel='preload' as='image' href='/images/profile.webp' type='image/webp' fetchPriority='high' />
        <link rel='icon' href='/images/favicon.ico' sizes='any' />
      </head>
      <body className={`${lora.variable} ${open_sans.variable}`}>
        {children}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WC6G8NFP'
            height='0'
            width='0'
            title='Google Tag Manager'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var loaded=false;function load(){if(loaded)return;loaded=true;['pointerdown','scroll','keydown'].forEach(function(e){window.removeEventListener(e,load)});window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=GTM-WC6G8NFP';document.head.appendChild(s);if(!/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname)){window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};var a=document.createElement('script');a.defer=true;a.src='/_vercel/insights/script.js';document.head.appendChild(a)}}['pointerdown','scroll','keydown'].forEach(function(e){window.addEventListener(e,load,{passive:true})})})();`,
          }}
        />
      </body>
    </html>
  );
}
