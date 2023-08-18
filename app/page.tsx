import HeatmapComponent from '@/components/CalendarPost';
import CalHeatmapComponent from '@/components/HeatMap';

import { allPosts } from '@/.contentlayer/generated';

function page() {
  // return <HeatmapComponent datas={allPosts} />;
  return <CalHeatmapComponent />;
}

export default page;
