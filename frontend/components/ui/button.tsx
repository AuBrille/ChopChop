import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'text-neutral-200 focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'border bg-neutral-400 shadow-sm hover:bg-neutral-500 active:bg-neutral-600',
        success: 'border bg-green-500 shadow-sm hover:bg-green-600 active:bg-green-700',
        error: 'border bg-red-500 shadow-sm hover:bg-red-600 active:bg-red-700',
        info: 'border bg-blue-500 shadow-sm hover:bg-blue-600 active:bg-blue-700',
        warning: 'border bg-yellow-400 shadow-sm hover:bg-yellow-500 active:bg-yellow-600',
        outline:'border border-neutral-700 bg-white text-neutral-700 shadow-sm hover:bg-neutral-200 active:bg-neutral-300',
      },
      size: {
        default: 'h-8 px-4 py-2',
        sm: 'h-7 px-3 text-sm',
        md: 'h-9 px-6 py-3',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
