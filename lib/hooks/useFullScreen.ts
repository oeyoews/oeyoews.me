import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface FullScreenHook {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
}

export function useFullScreen(): FullScreenHook {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // 进入全屏
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      // 退出全屏
      document.exitFullscreen();
      setIsFullScreen(false);

      // toast(`退出全屏`, {
      //   icon: '🖥️',
      //   position: 'bottom-right',
      //   // TODO: darkmode automatically
      //   // style: {
      //   //   borderRadius: '10px',
      //   //   background: '#333',
      //   //   color: '#fff',
      //   // },
      // });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'f') {
        toggleFullScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { isFullScreen, toggleFullScreen };
}
