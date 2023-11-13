'use client';

import { useRef } from 'react';
import { ReactAplayerMethods } from 'react-aplayer';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

import dynamic from 'next/dynamic';

import clsx from 'clsx';
import useStore from '~/app/lib/store';
import musicList from '~/musicList';

// if use useEffect adjudge window, not work, so use dynamic ???
const ReactAplayer = dynamic(() => import('react-aplayer'), { ssr: false });

function Music() {
  const musicStore = useStore();
  const apRef = useRef<ReactAplayerMethods | null>(null);

  const onPlay = () => {
    musicStore.setIsPlaying(true);
  };

  const onPause = () => {
    musicStore.setIsPlaying(false);
  };

  const onInit = (instance: ReactAplayerMethods) => {
    if (!apRef.current) {
      apRef.current = instance;
    }
  };
  // if not use dynamic, should use useeffect
  // 其实没有必要使用dynamic
  const musicFormatedList = musicList.map((music) => {
    return {
      // ...music,
      url: `https://music.163.com/song/media/outer/url?id=${music.id}`,
    };
  });

  const musicColor = clsx('w-5', 'h-5', 'transition-all', {
    'fill-red-500': !musicStore.isPlaying && true,
    'fill-green-500': musicStore.isPlaying && true,
    'animate-spin': musicStore.isPlaying && true,
  });

  const buttonText = musicStore.isPlaying ? '暂停播放' : '开始播放';
  const title = `${buttonText}`;
  return (
    <div>
      <div className="hidden">
        <ReactAplayer
          order="random"
          audio={musicFormatedList}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
      <button
        onDoubleClick={() => {
          apRef.current?.skipForward();
          // 停止状态下切换到下一首需要播放
          apRef.current?.play();
        }}
        onClick={() => {
          apRef.current?.toggle();
          // use store
          // console.log(ap?.list.audios[0].name);
        }}
        title={title}
      >
        <RiNeteaseCloudMusicFill className={musicColor} />
      </button>
    </div>
  );
}

export default Music;
