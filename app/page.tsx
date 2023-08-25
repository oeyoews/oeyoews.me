import CalendarHeatmapComponent from '@/components/CalendarPost';

import { allPosts } from '@/.contentlayer/generated';

function page() {
  return <CalendarHeatmapComponent datas={allPosts} />;
}

export default page;
