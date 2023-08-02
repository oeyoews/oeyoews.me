import { RiEye2Line } from 'react-icons/ri';

import { isProd } from '@/lib/isProd';
import { kv } from '@vercel/kv';

async function ViewCounter(params: Params) {
  const { slug } = params;
  const views = await kv.incr(slug);
  const counter = Intl.NumberFormat('en-us').format(views);
  return (
    isProd && (
      <div>
        <RiEye2Line className="inline fill-purple-400 stroke-0" /> {counter}{' '}
        views
      </div>
    )
  );
}

export default ViewCounter;
