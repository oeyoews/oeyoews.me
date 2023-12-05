import { Toaster } from 'react-hot-toast';

import type { Metadata, Viewport } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from '~app/Providers';
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.5,
  userScalable: true,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
        <NextTopLoader />
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
