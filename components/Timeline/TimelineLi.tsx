import clsx from 'clsx';

export default function Li({ children, order }: ChildrenSubProps) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between rounded p-6 text-base my-8 dark:bg-[#2d333b] bg-transparent border-[#d0d7de] dark:border-[#444c56] border border-solid overflow-auto'
        // {
        //   'border-transparent': order === 'end'
        // }
      )}
    >
      {children}
    </div>
  );
}
