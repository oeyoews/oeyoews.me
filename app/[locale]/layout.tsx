import { Analytics } from '@vercel/analytics/react';
import { ReactElement } from 'react-markdown/lib/react-markdown';

import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import { isProd } from '@/lib/isProd';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

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
  params,
}: {
  children: ReactElement;
  params: any;
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {children}
        <Toaster />
        {/* </ThemeProvider> */}
        {isProd && <Analytics />}
      </body>
    </html>
  );
}
