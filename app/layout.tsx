import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from './Providers';

import '~app/globals.css';
import Nav from '~components/Nav';
import config from '~site/config';

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <NextTopLoader />
        <Toaster />
        <Providers>
          <Nav />
          <main className="container mx-auto max-w-4xl py-10 px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
