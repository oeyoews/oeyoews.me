// 'use client';
// @ts-ignore
import RetroHitCounter from 'react-retro-hit-counter';

function HitCounter({ hits = 0 }: { hits?: number }) {
  return (
    <RetroHitCounter
      hits={hits}
      withBorder={false}
      size={30}
      segmentActiveColor="red"
      //   segmentInactiveColor="blue"
    />
  );
}

export default HitCounter;
