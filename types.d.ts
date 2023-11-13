interface IssueInfo {
  open_issues: number;
}
interface Issue {
  url: string;
  responitory_url: string;
  comments_url: string;
  title: string;
  id: number;
  number: number;
  html_url: string;
  body: string;
  user: { login: string; avatar_url: string };
  labels: { name: string; color: string; description: string; url: string }[];
  state: string;
  locked: boolean;
  create_at: string;
  updated_at: string;
}

interface TiddlerBaseMetadata {
  title: string;
  tags: string;
  type: string;
  created: string;
  creator: string;
  modified: string;
  description: string;
  ['page-cover']: string;
}

interface TiddlerVanillaMetadata extends TiddlerBaseMetadata {
  text: string;
}

interface TiddlerMetadata extends TiddlerBaseMetadata {
  slug: string;
  date: Date;
}

type Tiddler = TiddlerVanillaMetadata & TiddlerMetadata;

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
