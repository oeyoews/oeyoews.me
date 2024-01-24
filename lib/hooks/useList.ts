import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import config from '~config';

/** @see https://nextjs.org/learn/dashboard-app/adding-search-and-pagination */
export default function useList() {
  // const { replace } = useRouter();
  const pathname = usePathname();
  const listparams = useSearchParams();
  const list = Number(listparams.get('list')) || config.steps;

  const handleLoadItems = () => {
    const params = new URLSearchParams(listparams);
    params.set('list', (list + config.steps).toString());
    window.history.replaceState(null, '', `${pathname}?${params.toString()}`);
  };

  return {
    list,
    handleLoadItems
  };
}
