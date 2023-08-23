import dynamic from 'next/dynamic';

import { allPosts } from '@/.contentlayer/generated';

const HeatmapComponent = dynamic(() => import('@/components/CalendarPost'), {
  ssr: false,
  loading: () => <div className="text-center font-semibold">Loading ...</div>,
});

function page() {
  return <HeatmapComponent datas={allPosts} />;
}

export default page;
