import { useContext, useRef, useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsXCircle,
} from "react-icons/bs";
import placeholderImage from "../../assets/general/placeholder_image.png";
import { StateContext } from "../../utils/ContextProvider";

type propsType = {
  title: string;
  description: string;
  link: string | undefined;
  images: string[];
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectView = (props: propsType) => {
  const context = useContext(StateContext);
  const [index, setIndex] = useState(0);
  const actualLength = props.images.length + 1;
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
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const size = "aspect-video h-60 sm:h-64 md:h-72 ";
  const border = "border-[2.5px] border-slate-600 ";
  const scrollPos = useRef<HTMLDivElement>(null);

  function displayDescription() {
    return (
      <div className={"grid gap-y-4 px-8 content-center " + size + border}>
        <p
          className={
            "title underline underline-offset-4 " +
            "font-semibold text-lg text-center "
          }
        >
          {props.title}
        </p>
        <p className="indent-8">{props.description}</p>
      </div>
    );
  }

  return (
    <div
      className={
        "h-full w-full grid grid-flow-row-dense auto-rows-min " +
        "place-content-center justify-self-center py-2 overflow-clip "
      }
    >
      <div className="w-full grid place-self-center ">
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
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer noopener"
        className={
          "text-center font-medium underline underline-offset-2 mb-1 " +
          "w-fit h-fit place-self-center origin-center drop-shadow-md " +
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

      <div
        ref={scrollPos}
        className="grid w-full pb-4 pt-2 grid overflow-auto scroll-smooth "
        onWheel={(event) => {
          if (
            !(
              (Math.round(event.currentTarget.scrollTop) === 0 &&
                event.deltaY < 0) ||
              (Math.round(event.currentTarget.scrollTop + 1) +
                event.currentTarget.offsetHeight >=
                event.currentTarget.scrollHeight &&
                event.deltaY > 0)
            )
          )
            event.stopPropagation();
          /*
            console.log(
            Math.round(event.currentTarget.scrollTop),
            event.currentTarget.offsetHeight,
            event.currentTarget.scrollHeight
          );
            */
        }}
      >
        <div
          id={"current"}
          className={
            "w-max transform-gpu " +
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
            if (effect === "scale-up")
              scrollPos.current?.scrollTo(
                (scrollPos.current?.scrollWidth -
                  scrollPos.current?.offsetWidth) /
                  2,
                0
              );
            if (effect === "scale-down") props.setShowProjectView(false);
            else setEffect("none");
          }}
        >
          {index === 0 ? (
            displayDescription()
          ) : (
            <img
              id={"current image"}
              className={"drop-shadow-lg " + size}
              src={
                props.images.length > 0
                  ? props.images[index - 1]
                  : placeholderImage
              }
              alt="current page preview"
            />
          )}
        </div>

        <div
          id={"previous"}
          className={
            "w-max fixed transform-gpu " +
            (props.images.length > 0 && index - 1 > -1 ? "" : "hidden ") +
            (effect === "left" ? "animate-fade-in-left " : "hidden ")
          }
          onAnimationEnd={() => {
            if (index - 1 > -1) setIndex(index - 1);
          }}
        >
          {index - 1 === 0 ? (
            displayDescription()
          ) : (
            <img
              id={"previous image"}
              className={"drop-shadow-lg " + size}
              src={
                props.images.length > 0 && index - 1 > -1
                  ? props.images[index - 2]
                  : placeholderImage
              }
              alt="previous page preview"
            />
          )}
        </div>

        <div
          id={"next"}
          className={
            "w-max fixed transform-gpu " +
            (props.images.length > 0 && index + 1 < actualLength
              ? ""
              : "hidden ") +
            (effect === "right" ? "animate-fade-in-right " : "hidden ")
          }
          onAnimationEnd={() => {
            if (index + 1 < actualLength) setIndex(index + 1);
          }}
        >
          <img
            id={"next image"}
            className={"drop-shadow-lg " + size}
            src={
              props.images.length > 0 && index + 1 < actualLength
                ? props.images[index]
                : placeholderImage
            }
            alt="next page preview"
          />
        </div>
      </div>

      <div className="grid grid-flow-col-dense auto-cols-min justify-around mt-4 ">
        <BsArrowLeftCircle
          onClick={() => {
            if (!hideLeftArrow && index - 1 === 0)
              setLeftArrowEffect("fade-out");
            if (hideRightArrow && index - 1 === actualLength - 2) {
              setHideRightArrow(false);
              setRightArrowEffect("fade-in");
            }
            if (effect === "none" && index - 1 > -1) setEffect("left");
            scrollPos.current?.scrollTo(
              (scrollPos.current?.scrollWidth -
                scrollPos.current?.offsetWidth) /
                2,
              0
            );
          }}
          className={
            "w-fit h-fit bg-transparent rounded-full text-5xl origin-left " +
            "z-40 drop-shadow-md transition-all duration-75 custom-ease-out " +
            "hover:bg-amber-200/75 active:scale-95 active:bg-amber-300/75 " +
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

        <BsArrowRightCircle
          onClick={() => {
            if (!hideRightArrow && index + 1 === actualLength - 1)
              setRightArrowEffect("fade-out");
            if (hideLeftArrow && index + 1 === 1) {
              setHideLeftArrow(false);
              setLeftArrowEffect("fade-in");
            }
            if (effect === "none" && index + 1 < actualLength)
              setEffect("right");
            scrollPos.current?.scrollTo(
              (scrollPos.current?.scrollWidth -
                scrollPos.current?.offsetWidth) /
                2,
              0
            );
            // scrollPos.current?.scrollTo(0, 0);
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
    </div>
  );
};

export default ProjectView;
