import { useEffect, useRef, useState } from 'react';

import placeholderImage from '~/assets/general/placeholder_image.png';
import TestimonialSideView from '~/components/testimonials/TestimonialSideView';
import TestimonialView from '~/components/testimonials/TestimonialView';
import { circularize } from '~/utils/helperFunctions';

export type testimonyType = { name: string; image: string; testimony: string };

export const testimonies: testimonyType[] = [
  {
    name: 'Bob 2022',
    image: placeholderImage,
    testimony:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum' +
      'maximus pulvinar pretium. Duis efficitur vestibulum dolor nec' +
      'eleifend"'
  },
  {
    name: 'Jayne 2024',
    image: placeholderImage,
    testimony: '"Lorem ipsum defcon sit amet."'
  },
  {
    name: 'Bill 2020',
    image: placeholderImage,
    testimony:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum' +
      'maximus pulvinar pretium."'
  }
];

type PropsType = { showTemplate: boolean };

export default function Testimonials({ showTemplate }: PropsType) {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout>();
  const waitTime = 5000;
  const length = useRef(testimonies.length);

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((prev) => circularize(prev + 1, length.current));
    }, waitTime);
  }, [length]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    []
  );

  return (
    <div className="flex h-full flex-col ">
      {!showTemplate ? (
        <p className="title m-auto text-current text-[9vmin] font-bold ">
          Coming Soon!
        </p>
      ) : (
        <div className="h-full grid grid-flow-col-dense auto-cols-min justify-center ">
          <div className="grid order-1 h-full content-center justify-end ">
            <TestimonialSideView
              side="left"
              testimony={testimonies[circularize(index - 1, length.current)]}
            />
          </div>
          <div className="grid order-2 content-center h-full ">
            <TestimonialView
              testimony={testimonies[circularize(index, length.current)]}
            />
          </div>
          <div className="grid order-3 h-full content-center justify-start ">
            <TestimonialSideView
              side="right"
              testimony={testimonies[circularize(index + 1, length.current)]}
            />
            <TestimonialSideView
              side="far-right"
              testimony={testimonies[circularize(index + 2, length.current)]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
