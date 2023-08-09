import { RiEye2Line, RiTimeLine } from 'react-icons/ri';

import { isProd } from '@/lib/isProd';
import { kv } from '@vercel/kv';

async function ViewCounter(params: Params) {
  const { slug } = params;
  const views = await kv.incr(slug);
  const counter = Intl.NumberFormat('en-us').format(views);
  return (
    !isProd && (
      <div>
        <RiEye2Line className="inline fill-purple-300 stroke-0" /> {counter}{' '}
        views <RiTimeLine className="inline stroke-0 fill-blue-300" />{' '}
        {new Date().toLocaleString()}
      </div>
    )
  );
}

export default ViewCounter;
