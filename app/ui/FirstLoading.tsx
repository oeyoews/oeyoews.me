'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

import useStore from '~app/lib/store';

export default function FirstLoading() {
  const { firstLoading, setNotFirstLoading } = useStore();
  useEffect(() => {
    setTimeout(() => {
      setNotFirstLoading();
    }, 3000);

    // layout 上面 不会卸载, 因为是全局的, 一直呈现
    // return () => {
    //   setNotFirstLoading();
    // };
  }, [firstLoading, setNotFirstLoading]);

  return <></>;
}
