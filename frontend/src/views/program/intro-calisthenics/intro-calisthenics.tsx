'use client';

import { metData } from '@/data/met';
import { CardImage } from './components/CardImage';

const exoIds = [1, 2, 4, 6, 11, 16];
const exoData = metData.filter((item) => exoIds.includes(item.id));

export const IntroCalisthenics = () => {
  return (
    <>
      <div className="flex justify-center pl-8 pt-8">
        <div className="w-3/4 text-3xl font-semibold">
          Introduction to Basic Calisthenics Exercises
        </div>
      </div>
      <div className="flex min-h-screen justify-center py-4">
        <div className="w-3/4 rounded border border-neutral-400 bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
          <p className="bg-gradient-to-b from-slate-100 to-slate-300 p-8 text-lg italic shadow-sm">
            Calisthenics is a versatile and effective form of bodyweight training that builds
            strength, flexibility, and endurance without the need for expensive equipment or a gym
            membership. Rooted in simplicity, these exercises are accessible to beginners yet
            scalable for advanced athletes. Whether you're just starting your fitness journey or
            looking to master the fundamentals, calisthenics offers a well-rounded approach to
            improving overall health and functional strength. In this article, we'll explore
            essential calisthenics exercises that form the foundation of any workout routine. From
            push-ups and pull-ups to squats and planks, these movements target multiple muscle
            groups while improving coordination and balance. With consistency and proper technique,
            you'll unlock the potential of your body through this timeless training method. Let's
            dive into the basics!
          </p>
          <div className="container mx-auto grid grid-cols-1 gap-8 p-8 px-4 md:grid-cols-2 lg:grid-cols-2">
            {exoData.map((data) => {
              //data = props du CardImage
              const { activity, description, rep, series, pictureUrl } = data;
              return (
                <CardImage
                  title={activity}
                  headerDescription={description}
                  content={
                    <>
                      <span>{rep}</span>
                      <span>{series}</span>
                    </>
                  }
                  imageUrl={pictureUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
