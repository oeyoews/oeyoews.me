import PlumBlossom from 'react-plum';

export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PlumBlossom />
    </>
  );
}
