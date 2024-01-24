'use server';

import BlogList from '~components/Blog/BlogList';
import { getBlogPosts } from '~lib/blog';

const HomePage = () => {
  const posts = getBlogPosts();

  if (!posts.length) {
    return null;
  }

  return <BlogList data={posts} route="markdown" />;
};

export default HomePage;
