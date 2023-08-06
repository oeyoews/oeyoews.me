'use client';

import { useTranslations } from 'next-intl';

import AISummary from '@/components/AISummary';
import AllArticles from '@/components/AllArticles';
import ViewCounter from '@/components/ViewCounter';

export default async function Page() {
  const t = useTranslations('Index');
  return (
    <div className="m-4 sm:m-8">
      return <h1>{t('title')}</h1>;
      <div className="mx-auto max-w-xl">
        <AllArticles />
        <div className="text-center text-gray-400">
          <ViewCounter slug="home" />
        </div>
      </div>
    </div>
  );
}
