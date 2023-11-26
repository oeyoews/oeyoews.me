export const Divider = () => {
  return <hr className="my-4 border-2 rounded-full not-prose" />;
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
