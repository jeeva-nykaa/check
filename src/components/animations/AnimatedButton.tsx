'use client';

import { motion } from 'framer-motion';
import type { MouseEventHandler } from 'react';

export default function AnimatedButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <motion.button
      className={className}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
