import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ProgressBar from '@/components/Progressbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import { isProd } from '@/lib/isProd';

// ??
// export const revaliate = 1;

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nextjs Blog',
  //  title: {
  //     template: '%s | NextJs Blog',
  //     default: 'NextJs Blog',
  //   },
  description: '个人博客, 使用Nextjs + TypeScript + Tailwindcss 构建',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ProgressBar />
        {children}
        <Toaster />
        {isProd && <Analytics />}
      </body>
    </html>
  );
}
