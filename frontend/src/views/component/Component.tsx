import { Button } from '@/components/ui/button';

export const Component = () => {
  return (
    <div className="flex h-full gap-2 bg-gray-400 p-8">
      <Button variant="success" size="sm">
        Success sm
      </Button>
      <Button variant="success" size="default">
        Success Default
      </Button>
      <Button variant="success" size="md">
        Success md
      </Button>
      <Button variant="success" size="lg">
        Success lg
      </Button>
      <Button variant="success" size="icon">
        I
      </Button>
    </div>
  );
};
