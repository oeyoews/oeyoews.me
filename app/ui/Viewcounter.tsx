import { unstable_noStore as noStore } from 'next/cache';

import { kv } from '@vercel/kv';

export default async function ViewCounter(params: { slug: string }) {
  noStore();
  const { slug } = params;
  const views = await kv.incr(slug);

  return <>{Intl.NumberFormat('en-us').format(views)} views</>;
}
