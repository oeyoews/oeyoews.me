// import { unstable_noStore as noStore } from 'next/cache';
import { kv } from '@vercel/kv';

export default async function ViewCounter(params: { slug: string }) {
  // 会变成  λ, 放在pages, 会报错, nostore 同时也会导致所在的父组件全部失效, 降级到v0.2.2
  // noStore();
  const { slug } = params;
  const views = await kv.incr(slug);

  return <>{Intl.NumberFormat('en-us').format(views)} views</>;
}
