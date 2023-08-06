'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ToastWrapper = (props: {
  text: string;
  title: string;
  description: string;
}) => {
  const { text, title, description } = props;
  const { toast } = useToast();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        toast({
          title,
          description,
        });
      }}
    >
      {text}
    </Button>
  );
};

export default ToastWrapper;
