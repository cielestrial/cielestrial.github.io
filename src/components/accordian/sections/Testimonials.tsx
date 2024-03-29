import { useEffect, useRef, useState } from "react";
import TestimonialSideView from "~/components/testimonials/TestimonialSideView";
import TestimonialView from "~/components/testimonials/TestimonialView";
import placeholderImage from "~/assets/general/placeholder_image.png";
import GameButton from "~/components/background/GameButton";

export type testimonyType = {
  name: string;
  image: string;
  testimony: string;
};

export const testimonies: testimonyType[] = [
  {
    name: "Bob 2022",
    image: placeholderImage,
    testimony:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum' +
      "maximus pulvinar pretium. Duis efficitur vestibulum dolor nec" +
      'eleifend"',
  },
  {
    name: "Jayne 2024",
    image: placeholderImage,
    testimony: '"Lorem ipsum defcon sit amet."',
  },
  {
    name: "Bill 2020",
    image: placeholderImage,
    testimony:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum' +
      'maximus pulvinar pretium."',
  },
];

const Testimonials = () => {
  const showTemplate = false;
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout>();
  const waitTime = 5000;
  const lastIndex = testimonies.length;

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((prev) => circularize(prev + 1));
    }, waitTime);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  /**
   * Turns the array into a circle buffer.
   * @param i the given index.
   * @returns integer, the new index.
   */
  function circularize(i: number): number {
    if (i < 0) return circularize(i + lastIndex);
    else if (i >= lastIndex) return circularize(i - lastIndex);
    else return i;
  }

  return (
    <div className="h-full w-full flex flex-col ">
      <GameButton />

      {!showTemplate ? (
        <p className={"title m-auto text-current text-[9vmin] font-bold "}>
          Coming Soon!
        </p>
      ) : (
        <div
          className={
            "h-full grid grid-flow-col-dense auto-cols-min justify-center "
          }
        >
          <div className="grid order-1 h-full content-center justify-end ">
            <TestimonialSideView
              side={"left"}
              testimony={testimonies[circularize(index - 1)]}
            />
          </div>
          <div className="grid order-2 content-center h-full ">
            <TestimonialView testimony={testimonies[circularize(index)]} />
          </div>
          <div className="grid order-3 h-full content-center justify-start ">
            <TestimonialSideView
              side={"right"}
              testimony={testimonies[circularize(index + 1)]}
            />
            <TestimonialSideView
              side={"far-right"}
              testimony={testimonies[circularize(index + 2)]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
