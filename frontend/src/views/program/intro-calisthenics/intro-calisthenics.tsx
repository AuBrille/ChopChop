'use client';

import { metData } from '@/data/met';
import dipsImg from '@/public/Dips.gif';
import lSitDynImg from '@/public/L sit Dyn.gif';
import plankImg from '@/public/Plank.jpg';
import pullUpImg from '@/public/Pull up.gif';
import pushUpImg from '@/public/Push up.gif';
import squatImg from '@/public/Squat.gif';
import { CardImage } from './components/CardImage';

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
            <CardImage
              title={pullUp?.activity}
              headerDescription="Action of pulling the body up and down with arms on a horizontal bar"
              content={
                <>
                  <span>10x rep's</span>
                  <span>4 series</span>
                </>
              }
              imageUrl={pullUpImg.src}
            ></CardImage>
            <CardImage
              title={pushUp?.activity}
              headerDescription="Action of pushing the body up and down with arms on the ground"
              content={
                <>
                  <span>10x rep's</span>
                  <span>4 series</span>
                </>
              }
              imageUrl={pushUpImg.src}
            ></CardImage>
            <CardImage
              title={plank?.activity}
              headerDescription="Action of keeping the body in a horizontal elbow on the ground and feet"
              content={
                <>
                  <span>30 sec</span>
                  <span>4 series</span>
                </>
              }
              imageUrl={plankImg.src}
            ></CardImage>
            <CardImage
              title={squat?.activity}
              headerDescription="Action of sitting and then pushing upward the body while standing on feet"
              content={
                <>
                  <span>20x rep's</span>
                  <span>4 series</span>
                </>
              }
              imageUrl={squatImg.src}
            ></CardImage>
            <CardImage
              title={dips?.activity}
              headerDescription="Action of pushing the body up and down with arms while between two horizontal bars"
              content={
                <>
                  <span>10x rep's</span>
                  <span>4 series</span>
                </>
              }
              imageUrl={dipsImg.src}
            ></CardImage>
            <CardImage
              title={lSitDyn?.activity}
              headerDescription="Action of elevating both legs to a form of L while standing between two bars"
              content={
                <>
                  <span>10x rep's</span>
                  <span>4 series</span>
                </>
              }
              imageUrl={lSitDynImg.src}
            ></CardImage>
          </div>
        </div>
      </div>
    </>
  );
};
