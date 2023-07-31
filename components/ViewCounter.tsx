import { kv } from "@vercel/kv";

async function ViewCounter(slug) {
  const views = await kv.incr(slug);

  return <>{Intl.NumberFormat("en-us").format(views)} views</>;
}

export default ViewCounter;
