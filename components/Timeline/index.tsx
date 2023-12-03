import Dot from './Dot';
import Li from './Li';

const Timeline = ({ children }: ChildrenProps) => {
  return <ul className="list-none my-4 prose dark:prose-invert">{children}</ul>;
};

export default Object.assign(Timeline, { Li, Dot });
