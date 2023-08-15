'use client';

import { MouseEventHandler } from 'react';

import click from './sounds/click.mp3';
import menuOpen from './sounds/menu-open.mp3';

import useSound from 'use-sound';

type SoundOption = keyof typeof soundSelect;

const soundSelect = {
  click,
  menuOpen,
};

function BoopButton({ sound, text }: { sound: SoundOption; text: string }) {
  // 接受一个对象不是字符串, 所以使用参数传递对象所在的映射字符串
  const [play] = useSound(
    soundSelect[sound],
  ) as MouseEventHandler<HTMLButtonElement>[];

  return <button onClick={play}>{text}</button>;
}

export default BoopButton;
