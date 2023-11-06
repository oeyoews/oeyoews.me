import { SiTiddlywiki } from 'react-icons/si';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import Nav from '@/components/Nav';

import './globals.css';

import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Nextjs Blog',
  description: 'Nextjs + TypeScript + Tailwindcss + contentlayer',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/feed.xml',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'rss' }],
    },
  },
};

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${inter.className}`}>
        <NextTopLoader />
        <div className="max-w-4xl mx-auto py-10 px-4">
          <Nav />
          {children}
          <Toaster
            position="top-right"
            richColors={true}
            loadingIcon={<SiTiddlywiki />}
            invert={true}
          />
        </div>
      </body>
    </html>
  );
}
