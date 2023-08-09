import { type Metadata } from 'next';

import About from '@/components/About';

export const metadata: Metadata = {
  title: 'about',
  description: 'About you',
};

function page() {
  return <About />;
}

export default page;
