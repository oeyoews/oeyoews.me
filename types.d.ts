interface IssueComment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  author_association: string;
  body: string;
  reactions: Reactions;
  performed_via_github_app: null;
}

interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface IssueInfo {
  open_issues: number;
}

interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  // state: State;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  // author_association: AuthorAssociation;
  active_lock_reason: null;
  body: null | string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
  slug: string;
  date: Date;
}

interface TiddlerBaseMetadata {
  title: string;
  type: string;
  created: string;
  creator: string;
  modified: string;
  modifier: string;
  tags: string;
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
