import AllArticles from '@/components/AllArticles';

import { isDev } from '@/lib/isDev';

export default async function Page() {
  return (
    <div className="m-4 sm:m-8">
      <div className="mx-auto max-w-xl">
        <AllArticles />
      </div>
    </div>
  );
}
