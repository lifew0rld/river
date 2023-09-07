import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const cardVariants = cva('aspect-square overflow-hidden object-cover hover:bg-base-shade/80', {
  variants: {
    size: {
      default: 'h-[224px] w-[224px] rounded',
      sm: 'h-[160px] w-[160px] rounded',
      lg: 'h-[248px] w-[248px] rounded-[6.5px]',
      icon: 'h-[48px] w-[48px] rounded-[1.5px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface CardProps
  extends React.PropsWithChildren,
    VariantProps<typeof cardVariants> {
  className?: string;
}

function Card(props: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ size: props.size ?? 'default' }),
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

Card.displayName = 'Card';

export { Card, type CardProps };
