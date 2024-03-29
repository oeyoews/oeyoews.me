import { Toaster } from 'react-hot-toast';

import type { Metadata, Viewport } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from './Providers';

import '~app/globals.css';
import Nav from '~components/Nav';
import config from '~config';
// import MermaidScript from '~components/MermaidScript';

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`
  },
  description: config.description,
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],

  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.5,
  userScalable: true
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="text-black bg-white dark:text-[#cdd9e5] dark:bg-[#1c2128]"
    >
      <body className="antialiased min-h-screen">
        <Toaster
          toastOptions={{
            duration: 1000
          }}
        />
        <Providers>
          {/* <MermaidScript /> */}
          <NextTopLoader
            color="#eb6864"
            height={1}
            shadow={false}
            showSpinner={false}
          />
          <Nav />
          <main className="container mx-auto max-w-4xl py-8 px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
