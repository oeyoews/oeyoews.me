'use client';

import { useRef } from 'react';
// @ts-ignore
import ReactAplayer from 'react-aplayer';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

import useStore from '@/lib/store';
import musicList from '@/musicList';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import useSound from 'use-sound';

function Music() {
  const [play, { stop }] = useSound('/sounds/menu-open.mp3');
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
  // if not use dynamic, should use useeffect
  // NOTE: 没有使用useEffect, random, 总会变化
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
    'animate-pulse': musicStore.isPlaying && true,
  });

  const buttonText = musicStore.isPlaying ? '暂停播放' : '开始播放';
  const title = `${buttonText} ${name}`;
  return (
    <div>
      <div className="hidden">
        <ReactAplayer
          {...props}
          // @ts-ignore
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
      <button
        onClick={() => {
          // @ts-ignore
          apRef.current?.toggle();
          if (!musicStore.isPlaying) {
            Swal.fire({
              title: '开始播放',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000,
              toast: true,
              showCancelButton: false,
              position: 'bottom-end',
            });
          } else {
            play();
          }
        }}
        title={title}
      >
        <RiNeteaseCloudMusicFill className={musicColor} />
      </button>
    </div>
  );
}

export default Music;
