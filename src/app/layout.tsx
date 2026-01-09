import Script from 'next/script';
import { lora, open_sans } from './fonts';
import './globals.scss';
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  themeColor: 'black',
  title: 'Hildor Júnior | Full-Stack Software Engineer',
  description: 'Full-stack developer with 9+ years of experience building software across finance, healthcare, logistics, and social platforms. Sharing insights on software development, leadership, and technology.',
  category: 'technology',
  keywords: ['software engineer', 'full-stack developer', 'web development', 'software architecture', 'agile', 'leadership', 'innovation'],
  authors: [{ name: 'Hildor Júnior' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
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
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/favicon.ico' sizes='any' />
      </head>
      <body className={`${lora.variable} ${open_sans.variable}`}>
        {children}
        {/* Google Tag Manager */}
        <Script id='gtag' strategy='afterInteractive'>
          {`            
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-WC6G8NFP');
          `}
        </Script>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WC6G8NFP'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* Font Awesome */}
        <Script src='https://kit.fontawesome.com/2796ccc163.js' crossOrigin='anonymous' strategy='lazyOnload'></Script>
        <Analytics />
      </body>
    </html>
  );
}
