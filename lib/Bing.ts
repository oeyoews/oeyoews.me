import { use } from "react";

function getBingImages() {
  const res = use(fetch(
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=9&mkt=zh-cn',
  ));
  const data = (use(res.json()))
  const datas: BingData[] = data.images
  return datas;
}

export default getBingImages;
