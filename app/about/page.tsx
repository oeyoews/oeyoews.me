import { type Metadata } from 'next';

import Imagec from '@/components/Imagec';

export const metadata: Metadata = {
  title: 'about',
  description: 'About you',
};

function page() {
  return (
    <div className="max-w-xl mx-auto m-2">
      coming
      <Imagec
        src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="demo"
        height={222}
        width={222}
      />
    </div>
  );
}

export default page;
