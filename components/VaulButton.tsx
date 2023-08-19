'use client';

import { FcCheckmark } from 'react-icons/fc';

import { Drawer } from 'vaul';

export default function VaulButton(props: VaulProps) {
  const { buttonText, title, children } = props;
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button title={title}>{buttonText}</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/20" />
        <Drawer.Content className="bg-white flex flex-col rounded-r-[10px] h-screen fixed bottom-0">
          <Drawer.Close className="flex justify-end m-2">
            <FcCheckmark className="w-5 h-5" title="close" />
          </Drawer.Close>
          <div className="overflow-scroll px-8">
            <div className="max-w-xl mx-auto">{children}</div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
