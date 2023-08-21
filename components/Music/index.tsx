'use client';

// @ts-ignore
import ReactAplayer from 'react-aplayer';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

import useStore from '@/lib/store';
import classNames from 'classnames';

function Music() {
  const musicStore = useStore();
  const onPlay = () => {
    musicStore.setIsPlaying(true);
  };

  const onPause = () => {
    musicStore.setIsPlaying(false);
  };

  let ap: any;

  const onInit = (instance) => {
    ap = instance;
  };

  const props = {
    audio: [
      {
        name: '清风',
        artist: '陈壹千',
        url: 'https://music.163.com/song/media/outer/url?id=1947926942',
      },
    ],
  };

  const musicColor = classNames('w-5', 'h-5', {
    'fill-red-500': musicStore.isPlaying && true,
  });
  return (
    <div>
      <div className="hidden">
        <ReactAplayer
          {...props}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
      {/* 标记播放状态 */}
      <button
        onClick={() => ap.toggle()}
        title={musicStore.isPlaying ? '暂停' : '播放'}
      >
        <RiNeteaseCloudMusicFill className={musicColor} />
      </button>
    </div>
  );
}

export default Music;
