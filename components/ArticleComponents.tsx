import clsx from 'clsx';

export const Divider = ({ width = 2 }: { width?: number }) => {
  return (
    <hr className={clsx('my-4 rounded-full not-prose', `border-${width}`)} />
  );
};

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="capitalize text-balance">{children}</h1>;
};

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="py-6 max-w-none prose dark:prose-invert prose-img:rounded-md overflow-auto">
      {children}
    </article>
  );
};
