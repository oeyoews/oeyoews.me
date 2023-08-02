import { kv } from '@vercel/kv';

async function views(slug: string) {
  const views = await kv.incr(slug);

  return Intl.NumberFormat('en-us').format(views);
}

export default views;
