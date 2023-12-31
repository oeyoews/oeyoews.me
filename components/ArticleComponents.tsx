import clsx from 'clsx';

export const Divider = ({ thickness = 1 }: { thickness?: number }) => {
  return (
    <hr
      className={clsx(
        'my-4 rounded-full not-prose',
        thickness === 1 && 'border-2'
      )}
    />
  );
};

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="capitalize text-balance">{children}</h1>;
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mt-0 mb-2 truncate text-blance capitalize">{children}</h2>
  );
};

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="py-6 max-w-none prose prose-indigo dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden">
      {children}
    </article>
  );
};
