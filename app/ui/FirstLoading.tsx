'use client';

import { useEffect } from 'react';

import useStore from '~app/lib/store';

export default function FirstLoading() {
  const { firstLoading, setNotFirstLoading } = useStore();
  useEffect(() => {
    setTimeout(() => {
      setNotFirstLoading();
    }, 3000);

    // TODO: layout 上不会卸载组件, 因为是全局的, 一直呈现
    // return () => {
    //   setNotFirstLoading();
    // };
  }, [firstLoading, setNotFirstLoading]);

  return <></>;
}
