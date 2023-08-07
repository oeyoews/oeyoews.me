import Link from 'next/link';

import IconOpenAI from './AiIcon';
import { Button } from './ui/button';

export default function AI() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/apps/chat">
        <IconOpenAI className="mx-2 h-4 w-4" />
      </Link>
    </Button>
  );
}
