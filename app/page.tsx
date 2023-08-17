import PostHeatMap from '@/components/HeatMap';

import { allPosts } from '@/.contentlayer/generated';

function page() {
  return <PostHeatMap datas={allPosts} />;
}

export default page;
