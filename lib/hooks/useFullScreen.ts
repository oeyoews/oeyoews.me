import { useCallback, useEffect, useState } from 'react';

interface FullScreenHook {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
}

export function useFullScreen(): FullScreenHook {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(Boolean(document.fullscreenElement));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'f') {
        toggleFullScreen();
      }
    };

    // initial sync, including cases where fullscreen state was changed outside this hook
    handleFullscreenChange();
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleFullScreen]);

  return { isFullScreen, toggleFullScreen };
}
