import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <div className="mx-auto max-w-5xl font-bold text-center mt-4">
      <Skeleton className="my-4 h-[60px] w-full rounded-md" />
      <Skeleton className="my-4 h-[60px] w-full rounded-md" />
      <Skeleton className="my-4 h-[60px] w-full rounded-md" />
    </div>
  );
}

export default Loading;
