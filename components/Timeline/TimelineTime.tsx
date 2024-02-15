export function TimelineTime({ children }: ChildrenProps) {
  return (
    <time className="block font-serif leading-none text-gray-400/60 text-sm">
      {children}
    </time>
  );
}
