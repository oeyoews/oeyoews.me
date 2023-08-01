async function getBingImages(): Promise<BingImageItem> {
  let url, title, res, data;
  try {
    res = await fetch("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-cn");
    data = (await res.json()) as BingImage;
    url = "https://bing.com" + data?.images[0].url;
    title = data?.images[0].title;
  } catch (e) {
    console.log("Bing 图片获取失败", e);
  }
  return { url, title };
}

export default getBingImages;
