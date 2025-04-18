import { ButtonMich } from '@/components/ui/buttonMich/ButtonMich';
import { Card } from '@/components/ui/card/Card';

const variants = ['default', 'success', 'error', 'info', 'warning', 'outline'] as const;
const buttonSizes = ['sm', 'default', 'md', 'lg', 'icon'] as const;

export const Component = () => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-200 p-8">
      {variants.map((variant) => {
        return (
          <div className="flex gap-2" key={variant}>
            {buttonSizes.map((buttonSize) => {
              return (
                <ButtonMich variant={variant} size={buttonSize} key={buttonSize}>
                  {buttonSize === 'icon' ? 'i' : `Button ${buttonSize}`}
                </ButtonMich>
              );
            })}
          </div>
        );
      })}
      <div className="flex w-[560px] flex-col gap-2">
        {variants.map((variant) => {
          return (
            <Card
              variant={variant}
              key={variant}
              title={`Card ${variant}`}
              headerDescription="Description"
              content={<div className="grid w-full items-center gap-4">Content</div>}
              footer={
                <div className="flex justify-end">
                  <ButtonMich variant={variant}>{`Button ${variant}`}</ButtonMich>
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
};
