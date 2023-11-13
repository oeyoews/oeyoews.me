import { allPosts } from '~/.contentlayer/generated';
import CalendarHeatmapComponent from '~/app/ui/CalendarPost';

function page() {
  return <CalendarHeatmapComponent datas={allPosts} />;
}

export default page;
