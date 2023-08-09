import { RiTimeLine } from 'react-icons/ri';

import AllArticles from '@/components/AllArticles';
import ViewCounter from '@/components/ViewCounter';

export default async function Page() {
  return (
    <div className="m-4 sm:m-8">
      <div className="mx-auto max-w-xl">
        <AllArticles />
        <div className="my-4 text-sm text-center text-gray-400">
          <ViewCounter slug="home" />
          <div className="my-1">
            <RiTimeLine className="inline stroke-0 fill-blue-300" />{' '}
            {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
