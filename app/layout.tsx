import { FcDatabase, FcFlashOn, FcHome, FcIdea } from 'react-icons/fc';
import { FcAdvertising } from 'react-icons/fc';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';

import VaulButton from '@/components/VaulButton';

import './globals.css';
import HomePage from './posts/page';

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
  const LinkClass = 'w-5 h-5';
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
                  <FcHome className={LinkClass} />
                </Link>
                <Link href="/posts" title="Blog">
                  <FcIdea className={LinkClass} />
                </Link>
                <Link href="/feed.xml" title="Rss" target="_blank">
                  <FcFlashOn className={LinkClass} />
                </Link>
                <VaulButton
                  buttonText={<FcDatabase className={LinkClass} />}
                  title="文章列表"
                >
                  <HomePage />
                </VaulButton>
                <Link href="/about" title="About">
                  <FcAdvertising className={LinkClass} />
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
