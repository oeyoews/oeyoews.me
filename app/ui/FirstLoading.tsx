'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

import useStore from '~app/lib/store';

export default function FirstLoading() {
  const { firstLoading, setFirstLoading } = useStore();
  useEffect(() => {
    if (firstLoading === true) {
      setFirstLoading(false);
      toast('欢迎来到我的博客', {
        icon: '👋',
      });
    }
  }, [firstLoading, setFirstLoading]);

  return <></>;
}
