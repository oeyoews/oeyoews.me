'use client';

import { Drawer } from 'vaul';

export default function VaulButton(props: VaulProps) {
  const { buttonText, title, content } = props;
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>{buttonText}</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[50%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">{title}</Drawer.Title>
              <p className="text-zinc-600 mb-2">{content}</p>
            </div>
          </div>
          <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
