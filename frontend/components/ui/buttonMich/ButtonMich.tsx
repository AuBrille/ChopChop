import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonMichVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold text-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border border-neutral-400 bg-neutral-400 shadow-sm hover:bg-neutral-500 active:bg-neutral-600',
        success:
          'border border-green-500 bg-green-500 shadow-sm hover:bg-green-600 active:bg-green-700',
        error: 'border border-red-500 bg-red-500 shadow-sm hover:bg-red-600 active:bg-red-700',
        info: 'border border-blue-500 bg-blue-500 shadow-sm hover:bg-blue-600 active:bg-blue-700',
        warning:
          'border border-yellow-400 bg-yellow-400 shadow-sm hover:bg-yellow-500 active:bg-yellow-600',
        outline:
          'border border-neutral-700 bg-white text-neutral-700 shadow-sm hover:bg-neutral-200 active:bg-neutral-300',
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
    VariantProps<typeof buttonMichVariants> {
  asChild?: boolean;
}

const ButtonMich = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonMichVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
ButtonMich.displayName = 'ButtonMich';

export { ButtonMich, buttonMichVariants };
