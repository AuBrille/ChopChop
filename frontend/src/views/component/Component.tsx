import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const variants = ['default', 'success', 'error', 'info', 'warning', 'outline'] as const;
const buttonSizes = ['sm', 'default', 'md', 'lg', 'icon'] as const;

export const Component = () => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-200 p-8">
      {variants.map((buttonVariant) => {
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
      <div className="flex flex-col gap-2">
        {variants.map((cardVariant) => {
          return (
            <Card className="w-[560px]" variant={cardVariant} key={cardVariant}>
              <CardHeader>
                <CardTitle>{`Card ${cardVariant}`}</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">Content</div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant={cardVariant}>{`Button ${cardVariant}`}</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
