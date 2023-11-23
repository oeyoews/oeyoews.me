export default function Badge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`${className} badge badge-outline rounded-sm`}>{text}</div>
  );
}
