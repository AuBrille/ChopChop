import type { ReactNode } from 'react';

import { Card } from '@/components/ui/card/Card';

interface CardImageProps {
  title?: string;
  headerDescription: string;
  content: ReactNode;
  imageUrl: string;
}
export const CardImage = (props: CardImageProps) => {
  const { title, headerDescription, content, imageUrl } = props;

  return (
    <Card
      title={title}
      headerDescription={headerDescription}
      content={
        <div className="flex justify-between gap-2">
          {content}
          <img src={imageUrl} alt={title} className="h-auto w-1/4 rounded pb-8" />
        </div>
      }
      variant="default"
    />
  );
};
