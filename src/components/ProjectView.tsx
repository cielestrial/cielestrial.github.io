import { useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsXCircle,
} from "react-icons/bs";
import placeholderImage from "../assets/general/placeholder_image.png";

type propsType = {
  title: string;
  link: string | undefined;
  images: string[];
  description: string;
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectView = (props: propsType) => {
  const [index, setIndex] = useState(0);
  const [effect, setEffect] = useState<
    "left" | "right" | "scale-up" | "scale-down" | "none"
  >("scale-up");
  const [sideEffect, setSideEffect] = useState<"fade-in" | "fade-out" | "none">(
    "fade-in"
  );
  const [leftArrowEffect, setLeftArrowEffect] = useState<
    "fade-in" | "fade-out" | "none"
  >("none");
  const [rightArrowEffect, setRightArrowEffect] = useState<
    "fade-in" | "fade-out" | "none"
  >("fade-in");

  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(props.images.length < 2);

  return (
    <div className="h-full grid  py-4 place-content-center">
      <div className="w-[39rem] place-self-center grid grid-col-1 ">
        <BsXCircle
          onClick={() => {
            setEffect("scale-down");
            setSideEffect("fade-out");
            setLeftArrowEffect("fade-out");
            setRightArrowEffect("fade-out");
          }}
          className={
            "w-fit h-fit rounded-full bg-transparent text-3xl origin-bottom-left " +
            "align-self-center justify-self-end mx-4 " +
            "z-40 drop-shadow-lg transition-all duration-75 custom-ease-out " +
            "hover:bg-red-400/75 active:scale-95 active:bg-red-500/75 " +
            "cursor-pointer transform-gpu " +
            (sideEffect === "fade-in"
              ? "animate-fade-in "
              : sideEffect === "fade-out"
              ? "animate-fade-out "
              : "")
          }
          onAnimationEnd={() => {
            if (sideEffect !== "fade-out") setSideEffect("none");
          }}
        />
      </div>
      <div
        className={
          "flex flex-row flex-nowrap gap-x-6 " +
          "place-content-center place-items-center "
        }
      >
        <BsArrowLeftCircle
          onClick={() => {
            if (!hideLeftArrow && index - 1 === 0)
              setLeftArrowEffect("fade-out");
            if (hideRightArrow && index - 1 === props.images.length - 2) {
              setHideRightArrow(false);
              setRightArrowEffect("fade-in");
            }
            if (effect === "none" && index - 1 > -1) setEffect("left");
          }}
          className={
            "w-fit h-fit bg-transparent rounded-full text-5xl origin-left " +
            "z-40 drop-shadow-md transition-all duration-75 custom-ease-out " +
            "hover:bg-yellow-200/75 active:scale-95 active:bg-yellow-300/75 " +
            "cursor-pointer transform-gpu " +
            (hideLeftArrow
              ? "invisible "
              : leftArrowEffect === "fade-in"
              ? "animate-fade-in "
              : leftArrowEffect === "fade-out"
              ? "animate-fade-out "
              : "")
          }
          onAnimationEnd={() => {
            if (leftArrowEffect === "fade-out") setHideLeftArrow(true);
            setLeftArrowEffect("none");
          }}
        />
        <img
          id={"current preview image"}
          src={props.images.length > 0 ? props.images[index] : placeholderImage}
          alt="current page preview"
          className={
            "h-72 justify-self-center drop-shadow-lg origin-center transform-gpu " +
            (effect === "left"
              ? "animate-fade-out-right "
              : effect === "right"
              ? "animate-fade-out-left "
              : effect === "scale-up"
              ? "animate-scale-up "
              : effect === "scale-down"
              ? "animate-scale-down "
              : "")
          }
          onAnimationEnd={() => {
            if (effect === "scale-down") props.setShowProjectView(false);
            else setEffect("none");
          }}
        />
        <img
          id={"previous preview image"}
          src={
            props.images.length > 0 && index - 1 > -1
              ? props.images[index - 1]
              : placeholderImage
          }
          alt="previous page preview"
          className={
            "h-72 justify-self-center fixed drop-shadow-lg origin-top transform-gpu " +
            (props.images.length > 0 && index - 1 > -1 ? "" : "hidden ") +
            (effect === "left" ? "animate-fade-in-left " : "hidden ")
          }
          onAnimationEnd={() => {
            if (index - 1 > -1) setIndex(index - 1);
          }}
        />
        <img
          id={"next preview image"}
          src={
            props.images.length > 0 && index + 1 < props.images.length
              ? props.images[index + 1]
              : placeholderImage
          }
          alt="next page preview"
          className={
            "h-72 justify-self-center fixed drop-shadow-lg origin-top transform-gpu " +
            (props.images.length > 0 && index + 1 < props.images.length
              ? ""
              : "hidden ") +
            (effect === "right" ? "animate-fade-in-right " : "hidden ")
          }
          onAnimationEnd={() => {
            if (index + 1 < props.images.length) setIndex(index + 1);
          }}
        />
        <BsArrowRightCircle
          onClick={() => {
            if (!hideRightArrow && index + 1 === props.images.length - 1)
              setRightArrowEffect("fade-out");
            if (hideLeftArrow && index + 1 === 1) {
              setHideLeftArrow(false);
              setLeftArrowEffect("fade-in");
            }
            if (effect === "none" && index + 1 < props.images.length)
              setEffect("right");
          }}
          className={
            "w-fit h-fit bg-transparent rounded-full text-5xl origin-right " +
            "z-40 drop-shadow-md transition-all duration-75 custom-ease-out " +
            "hover:bg-sky-300/75 active:scale-95 active:bg-sky-400/75 " +
            "cursor-pointer transform-gpu " +
            (hideRightArrow
              ? "invisible "
              : rightArrowEffect === "fade-in"
              ? "animate-fade-in "
              : rightArrowEffect === "fade-out"
              ? "animate-fade-out "
              : "")
          }
          onAnimationEnd={() => {
            if (rightArrowEffect === "fade-out") setHideRightArrow(true);
            setRightArrowEffect("none");
          }}
        />
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer noopener"
        className={
          "text-center font-semibold underline drop-shadow-md " +
          "w-fit h-fit place-self-center my-5 origin-center " +
          "transition-all duration-75 custom-ease-out transform-gpu " +
          "hover:text-sky-500 hover:scale-105 active:scale-100 active:text-sky-600 " +
          (sideEffect === "fade-in"
            ? "animate-fade-in "
            : sideEffect === "fade-out"
            ? "animate-fade-out "
            : "")
        }
      >
        {props.link}
      </a>
    </div>
  );
};

export default ProjectView;
