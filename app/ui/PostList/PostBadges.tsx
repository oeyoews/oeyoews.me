export default function Badge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <sup
      className={`${className} rounded-sm text-xs px-1 mx-1 font-light inline-flex text-gray-800 font-serif`}
    >
      {text}
    </sup>
  );
}
