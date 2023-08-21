'use client';

// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

import useStore from '@/lib/store';
import classNames from 'classnames';

// @ts-ignore
const ReactAplayer = dynamic(() => import('react-aplayer'), { ssr: false });

function Music() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);
  const musicStore = useStore();
  const apRef = useRef(null); // 使用 useRef 来保存音乐播放器实例

  const onPlay = () => {
    musicStore.setIsPlaying(true);
  };

  const onPause = () => {
    musicStore.setIsPlaying(false);
  };

  const onInit = (instance: null) => {
    apRef.current = instance;
  };

  // Option
  const props = {
    audio: [
      {
        name: '清风',
        artist: '陈壹千',
        url: 'https://music.163.com/song/media/outer/url?id=1947926942',
      },
    ],
  };

  const musicColor = classNames('w-5', 'h-5', 'transition-all', {
    'fill-red-500': !musicStore.isPlaying && true,
    'fill-green-500': musicStore.isPlaying && true,
  });
  return (
    <div>
      <div className="hidden">
        {hasWindow && (
          <ReactAplayer
            {...props}
            // @ts-ignore
            onInit={onInit}
            onPlay={onPlay}
            onPause={onPause}
          />
        )}
      </div>
      <button
        // @ts-ignore
        onClick={() => apRef.current?.toggle()}
        title={musicStore.isPlaying ? '暂停' : '播放'}
      >
        <RiNeteaseCloudMusicFill className={musicColor} />
      </button>
    </div>
  );
}

export default Music;
