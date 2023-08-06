'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // TODO zindex
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[99999] h-0.5 origin-left transform rounded-full bg-gradient-to-r from-indigo-300 via-purple-300
to-green-300"
      style={{ scaleX }}
    />
  );
}

export default ProgressBar;
