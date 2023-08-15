import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';

import ProgressBar from '@/components/Progressbar';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Nextjs Blog',
  description: '个人博客, 使用Nextjs + TypeScript + Tailwindcss 构建',
};

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${inter.className} dark:prose-invert`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          <NextTopLoader />
          {/* nav */}
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header className="print:hidden mb-8">
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
