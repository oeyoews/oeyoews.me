interface Tiddler {
  title: string;
  text: string;
  tags: string;
  type: string;
  created: string;
  creator: string;
  modified: string;
}

interface PostInfo {
  count: number;
  titles: string[];
}

interface DataObject {
  [date: string]: PostInfo;
}

interface VaulProps {
  buttonText: string | React.ReactNode;
  title?: string;
  children?: string | React.ReactNode;
}

interface SparkleProps {
  size: number;
  color: string;
  style: {
    top: string;
    left: string;
  };
}

interface Sparkle extends SparkleProps {
  id: string;
  createdAt: number;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

type Params = {
  slug: string;
};

// Bing Image

interface BingImage {
  images: BingImageItemData[];
  tooltips: BingTooltips;
}

interface BingImageItemData {
  url: string;
  title: string;
  copyright: string;
  urlBase?: string;
  startdate?: string;
  fullstartdate?: string;
  enddate?: string;
  className?: string;
}

interface BingTooltips {
  loading: string;
  previous: string;
  next: string;
  walle: string;
  walls: string;
}

declare module 'react-aplayer' {
  interface AplayerProps {
    onInit?: (instance) => void;
    onPlay?: () => void;
    onPause?: () => void;
    audio: any;
    order: 'random' | 'list';
  }
  const ReactAplayer: React.FC<AplayerProps>;
  export interface ReactAplayerMethods {
    toggle: () => void;
    play: () => void;
    skipForward: () => void;
    list: {
      show: any;
      hide: any;
      toggle: any;
      audios: { id: string; name: string; url: string }[];
    };
  }
  export default ReactAplayer;
}
