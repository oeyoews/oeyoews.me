'use client';

import { useEffect, useState } from 'react';
import ReactAplayer, { ReactAplayerMethods } from 'react-aplayer';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

import useStore from '@/lib/store';
import musicList from '@/musicList';
import clsx from 'clsx';

function Music() {
  const musicStore = useStore();
  const [ap, setAp] = useState<ReactAplayerMethods>();

  const onPlay = () => {
    musicStore.setIsPlaying(true);
  };

  const onPause = () => {
    musicStore.setIsPlaying(false);
  };

  const onInit = (ap: ReactAplayerMethods) => {
    setAp(ap);
  };
  // if not use dynamic, should use useeffect
  // 其实没有必要使用dynamic
  const [musicFormatedList, setFormatedList] = useState([]);
  useEffect(() => {
    const musicFormatedList = musicList
      .sort(() => Math.random() - 0.5)
      .map((music) => {
        return {
          ...music,
          url: `https://music.163.com/song/media/outer/url?id=${music.id}`,
        };
      });
    // @ts-ignore
    setFormatedList(musicFormatedList);
  }, []);

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
        {/* 等待useEffect完成 */}
        {musicFormatedList.length > 0 && (
          <ReactAplayer
            audio={musicFormatedList}
            onInit={onInit}
            onPlay={onPlay}
            onPause={onPause}
          />
        )}
      </div>
      <button
        onDoubleClick={() => {
          ap?.skipForward();
        }}
        onClick={() => {
          ap?.toggle();
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
