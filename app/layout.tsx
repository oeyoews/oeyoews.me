import { FcFlashOn, FcHome, FcIdea } from 'react-icons/fc';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';

import './globals.css';

export const metadata: Metadata = {
  title: 'Nextjs Blog',
  description: 'Nextjs + TypeScript + Tailwindcss + contentlayer',
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
        {/* nav */}
        <div className="max-w-2xl mx-auto py-10 px-4">
          <header className="print:hidden mb-8">
            <div className="flex items-center justify-between">
              <nav className="ml-auto text-sm font-medium space-x-6 flex flex-row">
                <Link href="/" title="Home">
                  <FcHome className="h-5 w-5" />
                </Link>
                <Link href="/posts" title="Blog">
                  <FcIdea className="h-5 w-5" />
                </Link>
                <Link href="/feed.xml" title="Rss" target="_blank">
                  <FcFlashOn className="h-5 w-5" />
                </Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
