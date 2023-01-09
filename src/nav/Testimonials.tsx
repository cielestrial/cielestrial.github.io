import { useEffect, useRef, useState } from "react";
import TestimonialSideView from "../components/TestimonialSideView";
import TestimonialView from "../components/TestimonialView";
import { placeholderImage } from "./Projects";

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
  const showTemplate = true;
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timer>();
  const waitTime = 5000;
  const lastIndex = testimonies.length - 1;

  function circularize(i: number) {
    if (i < 0) return lastIndex;
    else if (i > lastIndex) return 0;
    else return i;
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((prev) => circularize(prev + 1));
    }, waitTime);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  if (!showTemplate)
    return (
      <div className="h-full grid grid-cols-1">
        <p className="place-self-center">Coming Soon&#33;</p>
      </div>
    );
  else
    return (
      <div
        className={
          "h-full flex flex-row flex-nowrap gap-x-0.5 " +
          "place-content-center place-items-center "
        }
      >
        <TestimonialSideView
          side={"left"}
          testimony={testimonies[circularize(index - 1)]}
        />
        <TestimonialView testimony={testimonies[circularize(index)]} />
        <TestimonialSideView
          side={"right"}
          testimony={testimonies[circularize(index + 1)]}
        />
      </div>
    );
};

export default Testimonials;
