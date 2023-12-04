import { forwardRef } from 'react';

import Dot from './TimelineDot';
import Li from './TimelineLi';

const Timeline = forwardRef(({ children }: ChildrenProps, ref: any) => {
  return (
    <ul className="list-none my-4 prose dark:prose-invert" ref={ref}>
      {children}
    </ul>
  );
});

Timeline.displayName = 'Timeline';

export default Object.assign(Timeline, { Li, Dot });
