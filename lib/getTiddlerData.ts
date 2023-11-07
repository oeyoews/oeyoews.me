import formattedTime from './formattedTime';

import md5 from 'md5';

const TidderJsonFile =
  process.env.NEXT_PUBLIC_TiddlerJsonFile ||
  'https://neotw.vercel.app/markdown.json';

export default async function getTiddlerData(tiddlerjsonfile = TidderJsonFile) {
  const res = await fetch(tiddlerjsonfile, {
    // 'force-cache' is the default, and can be omitted
    cache: 'force-cache',
    mode: 'cors',
    method: 'GET',
    credentials: 'include', // 发送凭据，允许包含 cookie 在内的身份验证信息
    // headers: {
    //   Authorization: '', // 设置自定义的 Authorization 请求头
    // },
    next: {
      revalidate: 3600, // In 3600 seconds update
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: Tiddler[] = await res.json();
  return data
    .map((tiddler) => ({
      ...tiddler,
      slug: md5(tiddler.title),
      date: formattedTime(tiddler.created),
    }))
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
}
