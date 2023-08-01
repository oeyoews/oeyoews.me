import bing from "@/lib/Bing";
import Image from "next/image";

export default async function BingImage() {
  const { url, title } = await bing();
  return url && <Image src={url} alt={title} width={180} height={60} title={title} />;
}