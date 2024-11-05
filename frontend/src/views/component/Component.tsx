import { Button } from '@/components/ui/button';

const buttonVariants = ['success', 'error', 'info', 'default', 'warning', 'outline'] as const;
const buttonSizes = ['sm', 'default', 'md', 'lg', 'icon'] as const;
export const Component = () => {
  return (
    <div className="flex h-full flex-col gap-2 bg-neutral-200 p-8">
      {buttonVariants.map((buttonVariant) => {
        return (
          <div className="flex gap-2">
            {buttonSizes.map((buttonSize) => {
              return (
                <Button variant={buttonVariant} size={buttonSize}>
                  {buttonSize === 'icon' ? 'i' : `Button ${buttonSize}`}
                </Button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
