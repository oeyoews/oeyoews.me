import { kv } from '@vercel/kv';

export default async function getViews(slug: string, increment = false) {
  const views = (await kv.get(slug)) as number;
  if (increment) {
    await kv.incr(slug);
    return views + 1;
  }

  if (!views) {
    await kv.set(slug, 0);
    return 0;
  }
  return views;
}
