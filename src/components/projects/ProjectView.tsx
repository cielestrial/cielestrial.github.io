import { useContext, useEffect, useRef, useState } from "react";
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
  const hideLeftArrowRef = useRef(true);
  const hideRightArrowRef = useRef(false);
  const size = "aspect-video h-[48dvmin] ";
  const border = "border-[0.625vmin] border-slate-600 ";

  useEffect(() => {
    document.addEventListener("keydown", onArrowKey);
    return () => {
      document.removeEventListener("keydown", onArrowKey);
    };
  }, []);

  function onArrowKey(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" && !hideLeftArrowRef.current) {
      document.getElementById("Left Arrow")?.dispatchEvent(context.clickEvent);
    } else if (event.key === "ArrowRight" && !hideRightArrowRef.current) {
      document.getElementById("Right Arrow")?.dispatchEvent(context.clickEvent);
    }
  }

  function displayDescription() {
    return (
      <div
        className={
          "grid gap-y-[2dvmin] px-[2dvmin] content-center " + size + border
        }
      >
        <p
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] " +
            "underline underline-offset-[0.25dvmin] text-center " +
            "decoration-from-font font-bold "
          }
        >
          {props.title}
        </p>
        <p className="indent-[4dvmin]">{props.description}</p>
      </div>
    );
  }

  return (
    <div
      className={
        "h-full w-full grid grid-flow-row-dense auto-rows-min " +
        "place-content-center justify-self-center overflow-clip "
      }
    >
      <div className={"w-full grid grid-flow-col-dense place-self-center "}>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer noopener"
          className={
            "text-center title underline underline-offset-[0.5dvmin] " +
            "w-max h-fit place-self-center origin-center drop-shadow-md " +
            "transition-all duration-75 custom-ease-out transform-gpu " +
            "hover:text-sky-500 hover:scale-105 active:scale-100 " +
            "active:text-sky-600 decoration-from-font justify-self-end " +
            "ml-[7dvmin] -mb-[2dvmin] " +
            (sideEffect === "fade-in"
              ? "animate-fade-in "
              : sideEffect === "fade-out"
              ? "animate-fade-out "
              : "")
          }
        >
          {props.link}
        </a>

        <BsXCircle
          id="Close Button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter")
              event.currentTarget.dispatchEvent(context.clickEvent);
          }}
          onClick={() => {
            if (sideEffect === "none") {
              setEffect("scale-down");
              setSideEffect("fade-out");
              setLeftArrowEffect("fade-out");
              setRightArrowEffect("fade-out");
            }
          }}
          className={
            "w-fit h-fit rounded-full bg-transparent text-[5vh] " +
            "justify-self-end origin-bottom-left " +
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

      <div className={"grid w-full py-[1.5dvh] grid scroll-smooth "}>
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
              draggable="false"
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
              draggable="false"
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
            draggable="false"
          />
        </div>
      </div>

      <div className="grid grid-flow-col-dense auto-cols-min justify-around ">
        <BsArrowLeftCircle
          id="Left Arrow"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter")
              event.currentTarget.dispatchEvent(context.clickEvent);
          }}
          onClick={() => {
            if (leftArrowEffect === "none") {
              if (!hideLeftArrow && index - 1 === 0)
                setLeftArrowEffect("fade-out");
              if (hideRightArrow && index - 1 === actualLength - 2) {
                setHideRightArrow(false);
                hideRightArrowRef.current = false;
                setRightArrowEffect("fade-in");
              }
              if (effect === "none" && index - 1 > -1) setEffect("left");
            }
          }}
          className={
            "w-fit h-fit bg-transparent rounded-full text-[6vh] origin-left " +
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
            if (leftArrowEffect === "fade-out") {
              setHideLeftArrow(true);
              hideLeftArrowRef.current = true;
            }
            setLeftArrowEffect("none");
          }}
        />

        <BsArrowRightCircle
          id="Right Arrow"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter")
              event.currentTarget.dispatchEvent(context.clickEvent);
          }}
          onClick={() => {
            if (rightArrowEffect === "none") {
              if (!hideRightArrow && index + 1 === actualLength - 1)
                setRightArrowEffect("fade-out");
              if (hideLeftArrow && index + 1 === 1) {
                setHideLeftArrow(false);
                hideLeftArrowRef.current = false;
                setLeftArrowEffect("fade-in");
              }
              if (effect === "none" && index + 1 < actualLength)
                setEffect("right");
            }
          }}
          className={
            "w-fit h-fit bg-transparent rounded-full text-[6vh] origin-right " +
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
            if (rightArrowEffect === "fade-out") {
              setHideRightArrow(true);
              hideRightArrowRef.current = true;
            }
            setRightArrowEffect("none");
          }}
        />
      </div>
    </div>
  );
};

export default ProjectView;
