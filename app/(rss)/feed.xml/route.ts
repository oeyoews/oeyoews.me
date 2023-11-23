// https://validator.w3.org/feed/#validate_by_input
import { marked } from 'marked';
import RSS from 'rss';
import { getBlogPosts } from '~app/blog/blog';
import getTiddlerData from '~lib/getTiddlerData';

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
    description: 'Nextjs + TypeScript + Tailwindcss + MDX',
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

  const posts = getBlogPosts();
  posts
    // TODO
    // .filter((post) => !(post.metadata?.password || post.metadata.draft === true))
    .forEach((post) => {
      feed.item({
        title: post.metadata.title,
        description: renderPost(post.content),
        // maybe sue gray-matter not use remote-mdx's matter
        // description: renderPost(post.content),
        url: `${domain}${post.slug}`,
        author: 'oeyoews',
        date: post.metadata.date,
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
