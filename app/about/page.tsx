import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about',
  description: 'About you',
};

function page() {
  return <div className="max-w-xl mx-auto m-2">coming</div>;
}

export default page;
