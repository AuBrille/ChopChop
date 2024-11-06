import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva('rounded border border-neutral-700 text-white shadow', {
  variants: {
    variant: {
      default: 'bg-gradient-to-br from-neutral-400 to-neutral-300 text-card-foreground',
      success: 'bg-gradient-to-br from-green-500 to-emerald-300 text-card-foreground',
      error: 'bg-gradient-to-br from-red-500 to-pink-400 text-card-foreground',
      info: 'bg-gradient-to-br from-blue-500 to-cyan-400 text-card-foreground',
      warning: 'bg-gradient-to-br from-yellow-400 to-yellow-200 text-card-foreground',
      outline: 'bg-gradient-to-br from-white to-neutral-300 text-card-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card: React.FC<CardProps> = ({ asChild, className, variant, ...rest }) => {
  const Component = asChild ? 'span' : 'div';
  //const cardClasses = cardVariants();

  return <Component className={cn(cardVariants({ variant, className }))} {...rest} />;
};

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm font-thin italic text-neutral-800', className)}
      {...props}
    />
  ),
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
