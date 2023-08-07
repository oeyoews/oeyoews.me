type PasswordStoreType = {
  password: string | null;
  setPassword: (password: string) => void;
};

interface SparkleProps {
  size: number;
  color: string;
  style: {
    top: string;
    left: string;
  };
}

interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
}

interface BingData {
  url: string;
  title: string
  copyright: string
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

type Params = {
  slug: string;
};

interface BingImage {
  images: BingImageItem[];
  tooltips: BingTooltips;
}

interface BingImageItem {
  url: string | undefined | StaticImport;
  // title: string | undefined | StaticImport;
  // startdate: string;
  // fullstartdate: string;
  // enddate: string;
  // urlbase: string;
  // copyright: string;
  // copyrightlink: string;
  // quiz: string;
  // wp: boolean;
  // hsh: string;
  // drk: number;
  // top: number;
  // bot: number;
  // hs: any[]; // 如果有一个明确的类型，请用该类型替换 any[]
}

interface BingTooltips {
  loading: string;
  previous: string;
  next: string;
  walle: string;
  walls: string;
}
