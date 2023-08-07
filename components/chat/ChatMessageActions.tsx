'use client';

import { FiCheck, FiCopy } from 'react-icons/fi';

import { Button } from '@/components/ui/button';

import { useCopyToClipboard } from '@/lib/use-copy-to-clipboard';
import { type Message } from 'ai';

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message;
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  return (
    <div
      className="opacity-0 group-hover:opacity-100 transition-opacity delay-75 flex items-center absolute -bottom-2 right-2"
      {...props}
    >
      <Button variant="ghost" size="icon" onClick={onCopy}>
        {isCopied ? <FiCheck /> : <FiCopy />}
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  );
}
