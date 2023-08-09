import { type Metadata } from 'next';

import VaulButton from '@/components/VaulButton';

export const metadata: Metadata = {
  title: 'about',
  description: 'About you',
};

function page() {
  const content = 'This is a demo for you';
  return (
    <div className="max-w-xl mx-auto m-2">
      <VaulButton buttonText="about" title="About me" content={content} />
    </div>
  );
}

export default page;
