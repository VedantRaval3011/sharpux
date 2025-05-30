import type { Metadata } from 'next';
import ClientProviders from './ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'SharpUX | Website, App & Software Development Company',
  description:
    'SharpUX is a top-rated software development company specializing in modern website development, mobile app creation, and custom software solutions. Hire expert developers today.',
  keywords: [
    'website development',
    'web developers',
    'app development',
    'hire software developers',
    'custom software',
    'mobile app developers',
    'SharpUX',
    'India web development',
    'Next.js developers',
    'software company',
  ],
  authors: [{ name: 'SharpUX', url: 'https://sharpux.com' }],
  openGraph: {
    title: 'SharpUX | Website, App & Software Development Company',
    description:
      'Need a website or app? SharpUX builds fast, scalable digital products tailored to your business.',
    url: 'https://sharpux.com',
    siteName: 'SharpUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SharpUX | Website, App & Software Development Company',
    description:
      'Looking for developers? SharpUX delivers custom web, app, and software solutions that drive growth.',
    creator: '@sharpux',
  },
  metadataBase: new URL('https://sharpux.com'),
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}