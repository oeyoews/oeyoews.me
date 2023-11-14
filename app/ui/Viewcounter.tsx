import { kv } from '@vercel/kv';

export default async function ViewCounter(params: { slug: string }) {
  const { slug } = params;
  const views = await kv.incr(slug);

  return <>{Intl.NumberFormat('en-us').format(views)} views</>;
}
