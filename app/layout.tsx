import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import '~app/globals.css';
import Nav from '~ui/Nav';

export const metadata: Metadata = {
  title: {
    default: 'Nextjs Blog',
    template: '%s | Nextjs Blog',
  },
  description: 'Nextjs + TypeScript + Tailwindcss + contentlayer',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/feed.xml',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'rss' }],
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${GeistSans.className}`}>
        <NextTopLoader />
        <Nav />
        <div className="max-w-4xl mx-auto py-10 px-4">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
