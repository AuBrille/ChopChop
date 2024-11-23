'use client';

import { Card } from '@/components/ui/card';
import { metData } from '@/data/met';
import pullUpImg from '@/public/Pull up.gif';
import pushUpImg from '@/public/Push up.gif';
import plankImg from '@/public/Plank.jpg';
import squatImg from '@/public/Squat.gif';
import dipsImg from '@/public/Dips.gif';
import lSitDynImg from '@/public/L sit Dyn.gif';

const pullUp = metData.find((item) => item.ID === 1);
const pushUp = metData.find((item) => item.ID === 2);
const plank = metData.find((item) => item.ID === 4);
const squat = metData.find((item) => item.ID === 6);
const dips = metData.find((item) => item.ID === 11);
const lSitDyn = metData.find((item) => item.ID === 16);
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
            <Card
              title={pullUp?.activity}
              headerDescription="Action of pulling the body up and down with arms on a horizontal bar"
              content="10x rep's"
              footer="4 series"
              image={pullUpImg.src}
              variant="default"
            ></Card>
            <Card
              title={pushUp?.activity}
              headerDescription="Action of pushing the body up and down with arms on the ground"
              content="10x rep's"
              footer="4 series"
              image={pushUpImg.src}
              variant="default"
            ></Card>
            <Card
              title={plank?.activity}
              headerDescription="Action of keeping the body in a horizontal elbow on the ground and feet"
              content="30 sec"
              footer="4 series"
              image={plankImg.src}
              variant="default"
            ></Card>
            <Card
              title={squat?.activity}
              headerDescription="Action of sitting and then pushing upward the body while standing on feet"
              content="20x rep's"
              footer="4 series"
              image={squatImg.src}
              variant="default"
            ></Card>
            <Card
              title={dips?.activity}
              headerDescription="Action of pushing the body up and down with arms while between two horizontal bars"
              content="10x rep's"
              footer="4 series"
              image={dipsImg.src}
              variant="default"
            ></Card>
            <Card
              title={lSitDyn?.activity}
              headerDescription="Action of elevating both legs to a form of L while standing between two bars"
              content="10x rep's"
              footer="4 series"
              image={lSitDynImg.src}
              variant="default"
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};
