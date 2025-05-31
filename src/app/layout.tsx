import type { Metadata } from 'next';
import ClientProviders from './ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'SharpUX | Website, App & Software Development Company in Vadodara, Gujarat',
  description:
    'SharpUX is a top-rated software development agency in Vadodara, Gujarat. We specialize in modern website development, mobile app creation, and custom software solutions across Ahmedabad, Surat, and Gujarat. Hire expert developers today.',
  keywords: [
    // Core Services
    'website development company Vadodara',
    'web development agency Gujarat',
    'mobile app development Vadodara',
    'software development company Ahmedabad',
    'custom software solutions Gujarat',
    'web design agency Vadodara',
    'app development company Gujarat',
    
    // Question-based keywords
    'how to hire web developers in Vadodara',
    'best website development company in Gujarat',
    'which software company is best in Vadodara',
    'how much does website development cost in Ahmedabad',
    'where to find mobile app developers in Gujarat',
    'who is the best web development agency in Vadodara',
    'what is the cost of app development in Gujarat',
    'how to choose software development company in Ahmedabad',
    
    // Local SEO
    'Vadodara web developers',
    'Ahmedabad software company',
    'Gujarat IT company',
    'Surat web development',
    'Baroda software agency',
    'Gujarat mobile app developers',
    'Vadodara IT services',
    'Ahmedabad web design company',
    
    // Technology specific
    'Next.js developers Vadodara',
    'React developers Gujarat',
    'Node.js development Ahmedabad',
    'Python developers Vadodara',
    'Laravel development Gujarat',
    'WordPress development Vadodara',
    'Shopify developers Ahmedabad',
    'Flutter app development Gujarat',
    
    // Service intent keywords
    'hire dedicated developers Vadodara',
    'outsource web development Gujarat',
    'freelance developers Ahmedabad',
    'remote developers Gujarat',
    'offshore development Vadodara',
    'IT outsourcing company Gujarat',
    
    // Business solutions
    'e-commerce development Vadodara',
    'startup web development Gujarat',
    'enterprise software Ahmedabad',
    'digital transformation Vadodara',
    'business automation Gujarat',
    'CRM development Ahmedabad',
    'ERP solutions Vadodara',
    
    // Competition keywords
    'SharpUX vs other agencies',
    'top 10 web development companies Gujarat',
    'best IT company in Vadodara',
    'leading software agency Ahmedabad',
    'affordable web development Gujarat',
    'cheap website development Vadodara',
    
    // Long-tail keywords
    'professional website development services in Vadodara Gujarat',
    'custom mobile app development company near Ahmedabad',
    'experienced software developers for hire in Gujarat',
    'reliable web development agency in Vadodara with good reviews',
    'full stack developers available in Ahmedabad Gujarat',
    
    // Brand and location
    'SharpUX Vadodara',
    'SharpUX Gujarat',
    'India web development',
    'software company India',
  ],
  authors: [{ name: 'SharpUX', url: 'https://sharpux.com' }],
  openGraph: {
    title: 'SharpUX | Leading Website & App Development Agency in Vadodara, Gujarat',
    description:
      'Need a website or app in Gujarat? SharpUX builds fast, scalable digital products for businesses in Vadodara, Ahmedabad, and across Gujarat. Get a free quote today!',
    url: 'https://sharpux.com',
    siteName: 'SharpUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SharpUX | Top Software Development Agency in Vadodara, Gujarat',
    description:
      'Looking for developers in Gujarat? SharpUX delivers custom web, app, and software solutions that drive growth for businesses in Vadodara and Ahmedabad.',
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