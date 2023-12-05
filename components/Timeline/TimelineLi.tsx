import clsx from 'clsx';

export default function Li({ children, order }: ChildrenSubProps) {
  return (
    <li
      className={clsx(
        'pl-4 border-gray-100/80 pb-6 relative my-0 border-l-2 group',
        {
          'border-transparent': order === 'end',
        },
      )}
    >
      {children}
    </li>
  );
}
