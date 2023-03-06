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
  const index = useRef(0);
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
  const hideLeftArrowRef = useRef(true);
  const hideRightArrowRef = useRef(false);
  const size = "aspect-video h-[48vmin] ";
  const border = "border-[0.625vmin] border-slate-600 ";

  useEffect(() => {
    document.addEventListener("keydown", onArrowKey);
    return () => {
      document.removeEventListener("keydown", onArrowKey);
    };
  }, []);

  /**
   * The second keyboard event handler.
   * Local to the ProjectView component.
   * Capture is false.
   * Main keyboard event handler can be found in the Portfolio page.
   * @param event Keyboard event.
   */
  function onArrowKey(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" && !hideLeftArrowRef.current) {
      document.getElementById("Left Arrow")?.dispatchEvent(context.clickEvent);
    } else if (event.key === "ArrowRight" && !hideRightArrowRef.current) {
      document.getElementById("Right Arrow")?.dispatchEvent(context.clickEvent);
    }
  }

  /**
   *
   * @returns
   */
  function displayDescription() {
    return (
      <div
        role="presentation"
        className={
          "flex flex-col place-content-center space-y-[2vmin] px-[2vmin] " +
          size +
          border
        }
      >
        <p
          role="heading"
          aria-level={2}
          aria-label={props.title + ":"}
          className={
            "text-[3.375vmin] " +
            "underline underline-offset-[0.25vmin] text-center " +
            "decoration-from-font font-bold "
          }
        >
          {props.title}
        </p>
        <p className="text-[3vmin] indent-[4vmin] ">{props.description}</p>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-label={props.title}
      aria-roledescription="carousel"
      className={"h-full w-full flex flex-col "}
    >
      <div
        role="presentation"
        className={"flex flex-col m-auto overflow-clip "}
      >
        <div className={"w-full flex flex-row select-text "}>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
            className={
              "text-center title underline underline-offset-[0.5vmin] " +
              "w-max h-fit place-self-center origin-center drop-shadow-md " +
              "transition-all duration-75 custom-ease-out transform-gpu " +
              "hover:text-sky-500 hover:scale-105 active:scale-100 grow " +
              "active:text-sky-600 decoration-from-font justify-self-end " +
              "ml-[7vmin] -mb-[2vmin] " +
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
            role="button"
            aria-label="Close"
            aria-roledescription="close icon"
            id="Close Button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ")
                event.currentTarget.dispatchEvent(context.clickEvent);
            }}
            onClick={(event) => {
              if (sideEffect === "none") {
                event.currentTarget.blur();
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
              "hover:bg-red-400/75 active:bg-red-500/75 active:scale-95 " +
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
          role="group"
          aria-roledescription="slide"
          aria-atomic="false"
          aria-live="polite"
          className={"flex flex-col w-full py-[1.5vh] scroll-smooth "}
        >
          <div
            id={"current"}
            role="presentation"
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
            {index.current === 0 ? (
              displayDescription()
            ) : (
              <img
                id={"current image"}
                className={"drop-shadow-lg " + size}
                src={
                  props.images.length > 0
                    ? props.images[index.current - 1]
                    : placeholderImage
                }
                alt={
                  "current page preview " +
                  index.current +
                  " of " +
                  props.images.length
                }
                aria-label={
                  "webpage preview " +
                  index.current +
                  " of " +
                  props.images.length
                }
                draggable="false"
              />
            )}
          </div>

          <div
            id={"previous"}
            aria-hidden="true"
            className={
              "w-max fixed transform-gpu " +
              (props.images.length > 0 && index.current - 1 > -1
                ? ""
                : "hidden ") +
              (effect === "left" ? "animate-fade-in-left " : "hidden ")
            }
            onAnimationEnd={(event) => {
              if (
                event.animationName === "fade-in-left" &&
                index.current - 1 > -1
              )
                index.current--;
              /*
            console.log(
              event.animationName + " prev:",
              "\nindex:",
              index.current,
              "\neffect:",
              effect,
              "\nsideEffect:",
              sideEffect,
              "\nleftArrowEffect:",
              leftArrowEffect,
              "\nrightArrowEffect:",
              rightArrowEffect,
              "\nhideLeftArrowRef.current:",
              hideLeftArrowRef.current,
              "\nhideRightArrowRef.current:",
              hideRightArrowRef.current
            );
            */
            }}
          >
            {index.current - 1 === 0 ? (
              displayDescription()
            ) : (
              <img
                id={"previous image"}
                className={"drop-shadow-lg " + size}
                src={
                  props.images.length > 0 && index.current - 1 > -1
                    ? props.images[index.current - 2]
                    : placeholderImage
                }
                alt="previous page preview"
                draggable="false"
              />
            )}
          </div>

          <div
            id={"next"}
            aria-hidden="true"
            className={
              "w-max fixed transform-gpu " +
              (props.images.length > 0 && index.current + 1 < actualLength
                ? ""
                : "hidden ") +
              (effect === "right" ? "animate-fade-in-right " : "hidden ")
            }
            onAnimationEnd={(event) => {
              if (
                event.animationName === "fade-in-right" &&
                index.current + 1 < actualLength
              )
                index.current++;
              /*
            console.log(
              event.animationName + " next:",
              "\nindex:",
              index.current,
              "\neffect:",
              effect,
              "\nsideEffect:",
              sideEffect,
              "\nleftArrowEffect:",
              leftArrowEffect,
              "\nrightArrowEffect:",
              rightArrowEffect,
              "\nhideLeftArrowRef.current:",
              hideLeftArrowRef.current,
              "\nhideRightArrowRef.current:",
              hideRightArrowRef.current
            );
            */
            }}
          >
            <img
              id={"next image"}
              className={"drop-shadow-lg " + size}
              src={
                props.images.length > 0 && index.current + 1 < actualLength
                  ? props.images[index.current]
                  : placeholderImage
              }
              alt="next page preview"
              draggable="false"
            />
          </div>
        </div>

        <div className="flex flex-row justify-around ">
          <BsArrowLeftCircle
            role="button"
            aria-label="previous"
            aria-roledescription="previous slide control"
            aria-disabled={hideLeftArrowRef.current}
            id="Left Arrow"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ")
                event.currentTarget.dispatchEvent(context.clickEvent);
            }}
            onClick={(event) => {
              if (effect === "none") {
                event.currentTarget.blur();
                if (!hideLeftArrowRef.current && index.current - 1 === 0)
                  setLeftArrowEffect("fade-out");
                if (
                  hideRightArrowRef.current &&
                  index.current - 1 === actualLength - 2
                ) {
                  hideRightArrowRef.current = false;
                  setRightArrowEffect("fade-in");
                }
                if (effect === "none" && index.current - 1 > -1)
                  setEffect("left");
              }
            }}
            className={
              "w-fit h-fit bg-transparent rounded-full text-[6vh] origin-left " +
              "z-40 drop-shadow-md transition-all duration-75 custom-ease-out " +
              "hover:bg-amber-200/75 active:bg-amber-300/75 active:scale-95 " +
              "cursor-pointer transform-gpu " +
              (hideLeftArrowRef.current
                ? "invisible "
                : leftArrowEffect === "fade-in"
                ? "animate-fade-in "
                : leftArrowEffect === "fade-out"
                ? "animate-fade-out "
                : "")
            }
            onAnimationEnd={() => {
              if (leftArrowEffect === "fade-out") {
                hideLeftArrowRef.current = true;
              }
              setLeftArrowEffect("none");
            }}
          />

          <BsArrowRightCircle
            role="button"
            aria-label="next"
            aria-roledescription="next slide control"
            aria-disabled={hideRightArrowRef.current}
            id="Right Arrow"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ")
                event.currentTarget.dispatchEvent(context.clickEvent);
            }}
            onClick={(event) => {
              if (effect === "none") {
                event.currentTarget.blur();
                if (
                  !hideRightArrowRef.current &&
                  index.current + 1 === actualLength - 1
                )
                  setRightArrowEffect("fade-out");
                if (hideLeftArrowRef.current && index.current + 1 === 1) {
                  hideLeftArrowRef.current = false;
                  setLeftArrowEffect("fade-in");
                }
                if (effect === "none" && index.current + 1 < actualLength)
                  setEffect("right");
              }
            }}
            className={
              "w-fit h-fit bg-transparent rounded-full text-[6vh] origin-right " +
              "z-40 drop-shadow-md transition-all duration-75 custom-ease-out " +
              "hover:bg-sky-300/75 active:bg-sky-400/75 active:scale-95 " +
              "cursor-pointer transform-gpu " +
              (hideRightArrowRef.current
                ? "invisible "
                : rightArrowEffect === "fade-in"
                ? "animate-fade-in "
                : rightArrowEffect === "fade-out"
                ? "animate-fade-out "
                : "")
            }
            onAnimationEnd={() => {
              if (rightArrowEffect === "fade-out") {
                hideRightArrowRef.current = true;
              }
              setRightArrowEffect("none");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
