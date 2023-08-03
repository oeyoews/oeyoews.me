import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import { isProd } from '@/lib/isProd';

// ??
// export const revaliate = 1;

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nextjs Blog',
  description: '个人博客, 使用Nextjs + TypeScript + Tailwindcss 构建',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {isProd && <Analytics />}
        <Toaster />
      </body>
    </html>
  );
}
