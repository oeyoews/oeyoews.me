'use client';

// https://www.joshwcomeau.com/react/animated-sparkles-in-react/
import React, { useState } from 'react';

import random from '@/lib/sparkels/random';
import range from '@/lib/sparkels/range';
import usePrefersReducedMotion from '@/lib/sparkels/usePrefersReducedMotion';
import useRandomInterval from '@/lib/sparkels/useRandomInterval';

const DEFAULT_COLOR = '#FFC700';

const generateSparkle = (color: string): Sparkle => {
  const sparkle: Sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  };
  return sparkle;
};

const Sparkles = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>(() => {
    return range(3, 2).map(() => generateSparkle(color));
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450,
  );

  return (
    <span className="relative inline-block">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="relative z-10 font-bold">{children}</strong>
    </span>
  );
};

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

  return (
    <span className="absolute block" style={style}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
        className="block"
        style={{ animation: 'comeInOut 700ms forwards' }}
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

export default Sparkles;
