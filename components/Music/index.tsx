'use client';

import { useEffect, useRef, useState } from 'react';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

import dynamic from 'next/dynamic';

import useStore from '@/lib/store';
import musicList from '@/musicList';
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
  const { name, artist, id } =
    musicList[Math.floor(Math.random() * musicList.length)];
  const url = `https://music.163.com/song/media/outer/url?id=${id}`;

  // Option
  const props = {
    audio: [
      {
        name,
        artist,
        url,
      },
    ],
  };

  const musicColor = classNames('w-5', 'h-5', 'transition-all', {
    'fill-red-500': !musicStore.isPlaying && true,
    'fill-green-500': musicStore.isPlaying && true,
  });

  const buttonText = musicStore.isPlaying ? '暂停播放' : '开始播放';
  const title = `${buttonText} ${name}`;
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
        title={title}
      >
        <RiNeteaseCloudMusicFill className={musicColor} />
      </button>
    </div>
  );
}

export default Music;
