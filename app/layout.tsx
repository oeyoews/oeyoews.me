import { SiTiddlywiki } from 'react-icons/si';

import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import './globals.css';

import Nav from '@/app/ui/Nav';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from 'sonner';

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
          <Toaster
            position="top-right"
            richColors={true}
            loadingIcon={<SiTiddlywiki />}
            invert={true}
            duration={2000}
          />
        </div>
      </body>
    </html>
  );
}
