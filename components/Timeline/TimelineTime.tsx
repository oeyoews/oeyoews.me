export function TimelineTime({ children }: ChildrenProps) {
  return (
    <time className="block font-normal leading-none text-gray-400">
      {children}
    </time>
  );
}
