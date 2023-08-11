interface VaulProps {
  buttonText: string;
  title?: string;
  content?: string | React.ReactNode;
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
