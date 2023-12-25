import { useContext, useEffect, useRef, useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsXCircle,
} from "react-icons/bs";
import { StateContext } from "~/utils/ContextProvider";
import { trapScroll } from "~/utils/helperFunctions";

export type projectType = {
  title: string;
  technologies: string[];
  description: string[];
  link: string | undefined;
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectView = (props: projectType) => {
  const context = useContext(StateContext);
  const [effect, setEffect] = useState<
    "left" | "right" | "scale-up" | "scale-down" | "none"
  >("scale-up");
  const [sideEffect, setSideEffect] = useState<"fade-in" | "fade-out" | "none">(
    "fade-in"
  );
  const projectPage1Ref = useRef(true);
  const projectPage2Ref = useRef(false);
  const timeout = useRef<NodeJS.Timeout>();
  const scrollBoundHit = useRef(false);

  const size = "w-[85vmin] h-[48vmin] ";
  const border = "border-[0.625vmin] border-slate-600 ";
  const transitionClass = "transition duration-75 custom-ease-out ";

  useEffect(() => {
    document.addEventListener("keydown", onArrowKey);
    endAnimation("start", 500);
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
    if (event.repeat) return;
    if (event.key === "ArrowLeft" && projectPage2Ref.current) {
      document.getElementById("leftArrow")?.dispatchEvent(context.clickEvent);
    } else if (event.key === "ArrowRight" && projectPage1Ref.current) {
      document.getElementById("rightArrow")?.dispatchEvent(context.clickEvent);
    }
  }

  /*
  function debugLog() {
    console.log(
      "\neffect:",
      effect,
      "\nsideEffect:",
      sideEffect,
      "\nprojectPage1Ref.current:",
      projectPage1Ref.current,
      "\nprojectPage2Ref.current:",
      projectPage2Ref.current
    );
  }
*/
  function endAnimation(
    button: "close" | "left" | "right" | "start",
    duration: number
  ) {
    clearTimeout(timeout.current);
    requestAnimationFrame(
      () =>
        (timeout.current = setTimeout(() => {
          if (button === "right") projectPage1Ref.current = false;
          else if (button === "left") projectPage2Ref.current = false;
          else if (button === "close") props.setShowProjectView(false);
          else setSideEffect("none");
          setEffect("none");
        }, duration))
    );
  }

  /**
   * Displays the project description as if it were a preview image.
   * @returns JSX Element, project description formatted.
   */
  function displayDescriptionImage() {
    return (
      <div className={"px-[2vmin] py-[2vmin] " + size + border}>
        <div
          className={
            "w-full h-full flex flex-col space-y-[2vmin] select-text " +
            "scroll-smooth overflow-x-hidden overflow-y-auto "
          }
          onScroll={context.touchStartReset}
          onWheel={(event) => trapScroll(event, scrollBoundHit)}
        >
          <p
            aria-label={props.title + ":"}
            className={
              "text-[3.375vmin] " +
              "underline underline-offset-[0.25vmin] text-center " +
              "decoration-from-font font-bold "
            }
          >
            {props.title}
          </p>
          <ul
            className={
              "flex flex-row flex-wrap justify-evenly " +
              "text-[3vmin] list-inside list-disc "
            }
          >
            {props.technologies.map((tech, i) => (
              <li key={i}>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
          {props.description.map((segment, i) => (
            <p key={i} className="text-[3vmin] indent-[4vmin] ">
              - {segment}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      id="projectView"
      role="dialog"
      aria-label={props.title}
      className={"h-full w-full flex flex-col "}
    >
      <div className={"flex flex-col m-auto overflow-clip "}>
        <div className={"w-full flex flex-row "}>
          <div
            className={
              "text-center title grow place-self-center " +
              "select-text ml-[7vmin] -mb-[2vmin] " +
              transitionClass +
              (sideEffect === "fade-in"
                ? "animate-fade-in "
                : sideEffect === "fade-out"
                ? "animate-fade-out "
                : "")
            }
          >
            <a
              href={props.link}
              target="_blank"
              rel="noopener"
              referrerPolicy="strict-origin-when-cross-origin"
              className={
                "underline underline-offset-[0.5vmin] decoration-from-font " +
                "hover:text-sky-500 active:text-sky-700 " +
                transitionClass
              }
            >
              {props.link}
            </a>
          </div>

          <button
            id="closeButton"
            type="button"
            aria-label="Close"
            className={
              "rounded-full origin-bottom-left text-[5vh] z-40 shadow " +
              "hover:bg-red-400/75 active:bg-red-500/75 active:scale-95 " +
              transitionClass +
              (sideEffect === "fade-in"
                ? "animate-fade-in "
                : sideEffect === "fade-out"
                ? "animate-fade-out "
                : "")
            }
            onClick={(event) => {
              event.currentTarget.blur();
              if (sideEffect === "none") {
                setEffect("scale-down");
                setSideEffect("fade-out");
                endAnimation("close", 500);
              }
            }}
          >
            <BsXCircle aria-hidden="true" className="rounded-full" />
          </button>
        </div>

        <div
          role="group"
          aria-atomic="false"
          aria-live="polite"
          className={
            "flex flex-col my-[1.5vh] scroll-smooth relative " +
            size +
            (effect === "scale-up"
              ? "animate-scale-up "
              : effect === "scale-down"
              ? "animate-scale-down "
              : "")
          }
          //onClick={debugLog}
        >
          <div
            id="projectPage1"
            className={
              "absolute " +
              (!projectPage1Ref.current ? "invisible " : "") +
              (effect === "left"
                ? "animate-fade-in-left "
                : effect === "right"
                ? "animate-fade-out-left "
                : "")
            }
          >
            {displayDescriptionImage()}
          </div>

          <div
            id="projectPage2"
            className={
              "absolute " +
              (!projectPage2Ref.current ? "invisible " : "") +
              (effect === "left"
                ? "animate-fade-out-right "
                : effect === "right"
                ? "animate-fade-in-right "
                : "")
            }
          >
            <iframe
              className={"shadow-md " + size}
              src={props.link}
              title={props.title}
              loading="eager"
              sandbox="allow-same-origin allow-scripts"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={(e) => (e.currentTarget.style.background = "none")}
            ></iframe>
          </div>
        </div>

        <div className="flex flex-row justify-around ">
          <button
            id="leftArrow"
            type="button"
            aria-label="previous"
            disabled={projectPage1Ref.current}
            className={
              "rounded-full text-[6vh] origin-left z-40 shadow " +
              "hover:bg-amber-200/75 active:bg-amber-300/75 active:scale-95 " +
              transitionClass +
              (projectPage1Ref.current && effect ? "invisible " : "") +
              (sideEffect === "fade-in"
                ? "animate-fade-in "
                : sideEffect === "fade-out"
                ? "animate-fade-out "
                : "")
            }
            onClick={(event) => {
              event.currentTarget.blur();
              if (effect !== "none") return;
              projectPage1Ref.current = true;
              setEffect("left");
              endAnimation("left", 700);
            }}
          >
            <BsArrowLeftCircle aria-hidden="true" className="rounded-full" />
          </button>

          <button
            id="rightArrow"
            type="button"
            aria-label="next"
            disabled={projectPage2Ref.current}
            className={
              "rounded-full text-[6vh] origin-right z-40 shadow " +
              "hover:bg-sky-300/75 active:bg-sky-400/75 active:scale-95 " +
              transitionClass +
              (projectPage2Ref.current && effect ? "invisible " : "") +
              (sideEffect === "fade-in"
                ? "animate-fade-in "
                : sideEffect === "fade-out"
                ? "animate-fade-out "
                : "")
            }
            onClick={(event) => {
              event.currentTarget.blur();
              if (effect !== "none") return;
              projectPage2Ref.current = true;
              setEffect("right");
              endAnimation("right", 700);
            }}
          >
            <BsArrowRightCircle aria-hidden="true" className="rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
