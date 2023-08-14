import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import ProgressBar from '@/components/Progressbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          <NextTopLoader />
          {children}
          <Toaster />
        </ThemeProvider>
        {/* {isProd && <Analytics />} */}
      </body>
    </html>
  );
}
