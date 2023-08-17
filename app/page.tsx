import HeatmapComponent from '@/components/CalendarPost';

import { allPosts } from '@/.contentlayer/generated';

function page() {
  return <HeatmapComponent datas={allPosts} />;
}

export default page;
