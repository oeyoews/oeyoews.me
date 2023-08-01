import { FiEye } from 'react-icons/fi';

import { kv } from '@vercel/kv';

async function ViewCounter({ slug }: { slug: string }) {
  const views = await kv.incr(slug);

  return (
    <>
      <FiEye className="inline" /> {Intl.NumberFormat('en-us').format(views)}{' '}
      views
    </>
  );
}

export default ViewCounter;
