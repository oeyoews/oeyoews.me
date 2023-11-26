import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from './Providers';

import '~app/globals.css';
import Nav from '~components/Nav';
import { ThemeSwitcher } from '~components/ThemeSwitcher';

export const metadata: Metadata = {
  title: {
    default: 'Blog with NextJs',
    template: '%s | Blog with NextJs',
  },
  description: 'Nextjs + TypeScript + Tailwindcss + MDX',
  manifest: '/manifest.json',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

{
  /* warning  extra attribute */
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen text-foreground bg-background">
        <NextTopLoader />
        <Toaster />
        <Providers>
          <div className="fixed bottom-2 right-2">
            <ThemeSwitcher />
          </div>
          <Nav />
          <main className="container mx-auto max-w-4xl py-10 px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
