'use client';

import { EyeSlashIcon } from '@heroicons/react/24/outline';

import type { NextPage } from 'next';

import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const ViewCounter: NextPage<Slug> = ({ slug, method }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, (url) =>
    fetcher(url, { method }),
  );
  const views = Number(data?.total);
  console.log(views);

  return (
    <span className="flex items-center justify-end">
      {views > 0 ? (
        views.toLocaleString()
      ) : (
        <EyeSlashIcon className="w-4 h-4 mr-1" />
      )}
      {' views'}
    </span>
  );
};

export default ViewCounter;
