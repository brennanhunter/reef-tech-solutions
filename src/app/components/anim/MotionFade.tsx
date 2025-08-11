"use client";
import { motion, type HTMLMotionProps } from 'framer-motion';
import { PropsWithChildren, ElementType } from 'react';

interface MotionFadeProps extends PropsWithChildren<HTMLMotionProps<'div'>> {
  delay?: number;
  as?: ElementType;
}

export function MotionFade({ children, delay = 0, as: Component = 'div', ...rest }: MotionFadeProps) {
  const MotionTag = motion(Component as ElementType);
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
