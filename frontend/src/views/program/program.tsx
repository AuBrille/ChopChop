'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Program = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('program/intro-calisthenics');
  };

  return (
    <div className="flex flex-col">
      <div className="mb-8 bg-green-500 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Programme</h1>
        <p className="mt-2 text-xl">Trouvez l'entraînement qui vous convient</p>
      </div>
      <div className="flex justify-center">
        <Card
          content=""
          title=" Introduction to Basic Calisthenics Exercises"
          footer={
            <div className="flex w-full justify-end">
              <Button onClick={handleClick} variant="info">
                View
              </Button>
            </div>
          }
          headerDescription="Starter exercices for calisthenics"
          variant="info"
        />
      </div>
    </div>
  );
};
