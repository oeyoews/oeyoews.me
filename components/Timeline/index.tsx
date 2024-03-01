import { forwardRef } from 'react';

import Dot from './TimelineDot';
import Li from './TimelineLi';
import { TimelineTime as Time } from './TimelineTime';
import Info from './TimelineInfo';

const Timeline = forwardRef(({ children }: ChildrenProps, ref: any) => {
  return (
    <div className="prose max-w-none dark:prose-invert" ref={ref}>
      {children}
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Object.assign(Timeline, { Li, Dot, Time, Info });
