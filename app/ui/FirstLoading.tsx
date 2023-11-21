'use client';

import { useEffect } from 'react';

import useStore from '~app/lib/store';

export default function FirstLoading() {
  const { firstLoading, setNotFirstLoading } = useStore();
  // 不要加上依赖, 由于timeout 会引起页面重新渲染
  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   setNotFirstLoading();
    // }, 1000);

    // TODO: layout 上不会卸载组件, 因为是全局的, 一直呈现
    return () => {
      setNotFirstLoading();
    };
    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, []);

  return <></>;
}
