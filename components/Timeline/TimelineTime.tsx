import { FaC, FaCalendar } from 'react-icons/fa6';

export function TimelineTime({ children }: ChildrenProps) {
  return (
    <time className="inline-flex items-center gap-2">
      <FaCalendar />
      {children}
    </time>
  );
}
