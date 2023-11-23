export default function Badge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <sup
      className={`${className} badge badge-outline badge-sm rounded-sm ml-1 font-normal`}
    >
      {text}
    </sup>
  );
}
