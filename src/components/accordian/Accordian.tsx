import { useContext, useEffect, useRef, useState } from "react";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import { sections } from "~/pages/Portfolio";
import { StateContext } from "~/utils/ContextProvider";
import {
  displaySpringGradient,
  displayWinterGradient,
} from "~/utils/gradientSelector";
import { preloadImages } from "~/utils/imagePreloader";

type propsType = {
  label: sections;
  opened: sections;
  setOpened: (section: sections) => void;
  content: React.ReactNode;
};

const Accordian = (props: propsType) => {
  const context = useContext(StateContext);
  const openedRef = useRef(props.opened);
  const [effect, setEffect] = useState<
    "slide-up" | "fade-in" | "half-fade" | "none"
  >("none");

  const transitionClass = "transition duration-75 custom-ease-out ";

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    context.setScrollable(false);
    if (props.label === "Home") setEffect("none");
    else if (props.label === "About" || props.label === "Contact")
      setEffect("slide-up");
    else setEffect("fade-in");
    openedRef.current = props.opened;
  }, [props.opened]);

  /**
   * Sets focus to a nearby element when a section is opened.
   */
  function setFocus() {
    switch (openedRef.current) {
      case "Home":
        document.getElementById("GraceHopperQuote")?.focus();
        break;
      case "About":
        document.getElementById("AboutSectionContent")?.focus();
        break;
      case "Projects":
        document.getElementById("ProjectsSectionContent")?.focus();
        break;
      case "Testimonials":
        document.getElementById("TestimonialsSectionContent")?.focus();
        break;
      case "Contact":
        document.getElementById("ContactSectionContent")?.focus();
        break;
    }
  }

  /**
   * Adds gradient backgrounds to section labels.
   * @returns string, gradient values.
   */
  function displayGradient() {
    let gradient = "";

    switch (context.season) {
      case "Winter":
        gradient = displayWinterGradient(props.label, props.opened);
        break;
      case "Spring":
        gradient = displaySpringGradient(props.label, props.opened);
        break;
      default:
        console.error("Invalid season");
    }
    return gradient;
  }

  /**
   * Generates section labels.
   * Label passed in from parent.
   * @returns JSX Element, label to be displayed.
   */
  function displayLabel() {
    if (props.label === props.opened) return null;
    const gradient = displayGradient();
    return (
      <div
        id={props.label}
        role="button"
        aria-expanded={props.opened === props.label}
        aria-controls={props.label + "Content"}
        tabIndex={0}
        className={
          "view-width font-bold drop-shadow-lg " +
          "cursor-pointer grow blue-highlight flex " +
          gradient
        }
        onKeyUp={(event) => {
          if (event.key === "Enter" || event.key === " ")
            event.currentTarget.dispatchEvent(context.clickEvent);
        }}
        onClick={(event) => {
          event.currentTarget.blur();
          props.setOpened(props.label);
        }}
      >
        <h1 className="m-auto ">{props.label}</h1>
      </div>
    );
  }

  /**
   * Displays section content.
   * Content passed in from parent.
   * @returns JSX Element, content to be displayed.
   */
  function displayContent() {
    if (props.opened === props.label)
      return (
        <div
          id={props.label + "Content"}
          role="region"
          aria-label={props.label}
          tabIndex={-1}
          className={
            "flex h-3/4 flex-col flex-nowrap scroll-smooth " +
            "blue-highlight focus:outline-none " +
            (effect !== "none" ? `animate-${effect} ` : "") +
            (context.scrollable ? "overflow-auto " : "overflow-clip ") +
            (context.hideContent ? "invisible " : "")
          }
          onAnimationStart={(event) => {
            if (event.target === event.currentTarget) setFocus();
          }}
          onAnimationEnd={() => {
            setEffect("none");
            if (props.opened !== "About" && props.opened !== "Projects")
              context.setScrollable(true);
          }}
        >
          <div
            className={
              "absolute whitespace-nowrap m-[3vmin] " +
              "title font-semibold text-[3.5vmin] sm:text-[2.625vmin] " +
              (!context.hideContent ? "invisible " : "visible ")
            }
          >
            <p className="inline text-slate-600 ">Hi-Score:&#32;</p>
            <p className="inline text-yellow-600 ">{context.highScore}</p>
            <br />
            <p className="inline text-slate-600 ">Score:&#32;</p>
            <p className="inline text-sky-500 ">{context.score}</p>
          </div>

          <button
            type="button"
            aria-label={!context.hideContent ? "Play" : "Stop"}
            className={
              "absolute right-0 z-10 m-[3vmin] text-[6vh] active:scale-95 " +
              (props.opened === "Home" ? "invisible " : "visible ") +
              transitionClass
            }
            onClick={(event) => {
              event.currentTarget.blur();
              !context.hideContent
                ? context.switchToBackground()
                : context.switchToForeground();
            }}
          >
            {!context.hideContent ? (
              <BsPlayFill
                aria-hidden="true"
                className={
                  "text-green-800 hover:text-green-600 " + transitionClass
                }
              />
            ) : (
              <BsStopFill
                aria-hidden="true"
                className={
                  "text-red-800 hover:text-red-600 cursor-none " +
                  transitionClass
                }
              />
            )}
          </button>

          {props.content}
        </div>
      );
    else return null;
  }

  return (
    <>
      {displayLabel()}
      {displayContent()}
    </>
  );
};

export default Accordian;
