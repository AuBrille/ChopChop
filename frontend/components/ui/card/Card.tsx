import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva('min-w-[500px] rounded border border-neutral-700 text-white shadow', {
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
interface CardLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

interface CardProps {
  variant?: 'default' | 'success' | 'error' | 'info' | 'warning' | 'outline';
  title: React.ReactNode;
  headerDescription?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  image?: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const { variant, title, headerDescription, content, image, footer } = props;
  return (
    <CardLayout variant={variant}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {headerDescription && <CardDescription>{headerDescription}</CardDescription>}
      </CardHeader>
      <CardContent>{content}</CardContent>
      <div className="flex flex-row items-start">
        <div className="flex flex-shrink-0">{footer && <CardFooter>{footer}</CardFooter>}</div>
        {image && (
          <CardPicture>
            {typeof image === 'string' ? (
              <img src={image} alt="illustration" className="h-auto w-1/4 rounded pb-8" />
            ) : (
              image
            )}
          </CardPicture>
        )}
      </div>
    </CardLayout>
  );
};

const CardLayout: React.FC<CardLayoutProps> = ({ className, variant, ...rest }) => {
  return <div className={cn(cardVariants({ variant, className }))} {...rest} />;
};

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm font-thin italic text-neutral-800', className)}
      {...props}
    />
  ),
);

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
);

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);

const CardPicture = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex justify-end pr-8', className)} {...props}>
      {children}
    </div>
  ),
);
