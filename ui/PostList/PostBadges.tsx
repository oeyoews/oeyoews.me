export default function Badge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <div className={`${className} badge badge-outline`}>{text}</div>;
}
