import BlogList from '~components/Blog/BlogList';
import { getBlogPosts } from '~lib/blog';

const HomePage = () => {
  const posts = getBlogPosts();

  if (!posts.length) {
    return null;
  }

  return <BlogList data={posts} />;
};

export default HomePage;
