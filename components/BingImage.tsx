import Image from 'next/image';

export default async function BingImage({ url }: { url: string }) {
  return (
    <Image
      src={`https://bing.com${url}`}
      alt=""
      width={1920}
      height={1080}
      className="rounded-lg shadow-lg"
    />
  );
}
