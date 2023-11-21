'use client';

import React from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function Spinner({
  center = true,
  size = 40,
}: {
  center?: boolean;
  size?: number;
}) {
  const classname = center ? 'flex justify-center items-center' : '';
  return (
    <div className={classname}>
      <ColorRing
        visible={true}
        height={size}
        width={size}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
}
