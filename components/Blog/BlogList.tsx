import BlogItem from '~components/Blog/BlogItem';
import config, { IRoute } from '~config';
import CommitInfo from '~components/CommitInfo';
import LoadMore from '~components/LoadMore';
import Timeline from '~components/Timeline';
import YearHeader from '~components/YearHeader';
import { Post } from '~lib/blog';

const sortByDate = (a: Post, b: Post) =>
  new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;

export default function BlogList({
  data,
  route
}: {
  data: Post[];
  route: IRoute;
}) {
  let currentYear: any = null;
  return (
    <>
      <Timeline>
        {data.sort(sortByDate).map((post, index) => {
          const postYear = new Date(post.metadata.date).getFullYear();
          const yearHeader = currentYear !== postYear && (
            <YearHeader postYear={postYear} />
          );
          currentYear = postYear;
          return (
            <BlogItem
              route={route}
              post={post}
              index={index}
              key={post.metadata.title}
              order={index === data.length - 1 ? 'end' : 'normal'}
            >
              {yearHeader}
            </BlogItem>
          );
        })}
      </Timeline>
    </>
  );
}
