export const Divider = () => {
  return <hr className="my-4 border-2 rounded-full" />;
};

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="capitalize text-balance">{children}</h1>;
};

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="py-6 prose prose-img:rounded-md max-w-none overflow-auto">
      {children}
    </article>
  );
};
