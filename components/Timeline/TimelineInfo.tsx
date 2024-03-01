import { ReactNode } from 'react';

export default function Info({ children }: { children: ReactNode }) {
  return (
    <div className="flex space-x-2 text-gray-400 items-center text-sm">
      {children}
    </div>
  );
}
