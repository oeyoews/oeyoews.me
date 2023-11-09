// https://validator.w3.org/feed/#validate_by_input
import { allPosts } from '@/.contentlayer/generated';
import getTiddlerData from '@/app/lib/getTiddlerData';
import { marked } from 'marked';
import RSS from 'rss';

const renderer = new marked.Renderer();
marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
});
const renderPost = (md: string) => marked.parse(md);
const domain = process.env.Domain;

export async function GET() {
  const feed = new RSS({
    title: 'Nextjs Blog',
    description: 'Nextjs + TypeScript + Tailwindcss + contentlayer',
    pubDate: new Date(),
    feed_url: `${domain}/feed.xml`,
    site_url: domain as string,
  });

  const { tiddlers } = await getTiddlerData();

  // TODO: 似乎下面的feed item 就不可用了
  tiddlers.forEach(({ title, text, date, slug }) => {
    feed.item({
      title,
      description: renderPost(text),
      // maybe sue gray-matter not use remote-mdx's matter
      // description: renderPost(post.content),
      url: `${domain}${slug}`,
      author: 'oeyoews',
      date,
      categories: ['blog'],
      // custom_elements: [{ content: post.description }],
    });
  });

  allPosts
    .filter((post) => !(post.password || post.draft === true))
    .forEach((post) => {
      feed.item({
        title: post.title,
        description: renderPost(post.body.raw),
        // maybe sue gray-matter not use remote-mdx's matter
        // description: renderPost(post.content),
        url: `${domain}${post.slug}`,
        author: 'oeyoews',
        date: post.date,
        categories: ['blog'],
        // custom_elements: [{ content: post.description }],
      });
    });

  const xml = feed.xml({
    indent: true,
  });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
