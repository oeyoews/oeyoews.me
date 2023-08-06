// app/page.tsx -- server component
import Chat from './chat';

export const runtime = 'edge';

export default function Page() {
  return <Chat />;
}
