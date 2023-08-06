import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import { isProd } from '@/lib/isProd';

// ??
// export const revaliate = 1;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
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

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
    console.log('not founded');
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {children}
          <Toaster />
          {/* </ThemeProvider> */}
        </NextIntlClientProvider>
        {isProd && <Analytics />}
      </body>
    </html>
  );
}
