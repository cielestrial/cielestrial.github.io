import { useContext, useEffect, useRef, useState } from "react";
import { sections } from "../pages/Portfolio";
import { StateContext } from "../utils/ContextProvider";

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
    "slide-up" | "fade-in" | "saturate-in" | "none"
  >("none");

  useEffect(() => {
    context.setScrollable(false);
    if (props.label === "Home") setEffect("saturate-in");
    else if (props.label === "About" || props.label === "Contact")
      setEffect("slide-up");
    else if (props.label === "Projects" || props.label === "Testimonials")
      setEffect("fade-in");
    openedRef.current = props.opened;
  }, [props.opened]);

  /**
   * Sets focus to a nearby element when a section is opened.
   */
  function setFocus() {
    switch (openedRef.current) {
      case "Home":
        document.getElementById("Grace Hopper Quote")?.focus();
        break;
      case "About":
        document.getElementById("About Section Content")?.focus();
        break;
      case "Projects":
        document.getElementById("Projects Section Content")?.focus();
        break;
      case "Testimonials":
        document.getElementById("Testimonials Section Content")?.focus();
        break;
      case "Contact":
        document.getElementById("Contact Section Content")?.focus();
        break;
    }
  }

  /**
   * Adds gradient backgrounds to section labels.
   * @returns string, gradient values.
   */
  function displayGradient() {
    let gradient = "";
    switch (props.label) {
      case "Home":
        gradient = "bg-gradient-to-b from-amber-100 to-slate-300";
        break;
      case "About":
        props.opened === "Home"
          ? (gradient = "bg-gradient-to-b from-amber-100 to-slate-200 ")
          : (gradient = "bg-gradient-to-b from-slate-200 to-slate-300 ");
        break;
      case "Projects":
        props.opened === "Contact" || props.opened === "Testimonials"
          ? (gradient = " bg-gradient-to-b from-slate-200 to-slate-300 ")
          : props.opened === "Home"
          ? (gradient =
              "bg-gradient-to-b from-slate-200 via-slate-200/75 to-slate-300/50 ")
          : (gradient = "bg-gradient-to-b from-slate-200/50 to-slate-300/50 ");
        break;
      case "Testimonials":
        props.opened === "Contact"
          ? (gradient = "bg-gradient-to-b from-slate-200 to-slate-300 ")
          : (gradient = "bg-gradient-to-b from-slate-200/50 to-slate-300/50 ");
        break;
      case "Contact":
        gradient =
          "bg-gradient-to-b from-slate-200/50 via-slate-300/50 to-sky-400 ";
        break;
      default:
        gradient = "bg-slate-200/50 ";
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
        id={props.label + " Section Label"}
        role="button"
        aria-expanded={props.opened === props.label}
        aria-controls={props.label + " Section Content"}
        tabIndex={0}
        className={
          "view-width font-bold drop-shadow-lg py-[2vmin] " +
          "cursor-pointer grow blue-highlight flex " +
          gradient
        }
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ")
            event.currentTarget.dispatchEvent(context.clickEvent);
        }}
        onClick={(event) => {
          event.currentTarget.blur();
          props.setOpened(props.label);
        }}
      >
        <p className="m-auto " role="heading" aria-level={1}>
          {props.label}
        </p>
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
          role="region"
          aria-label={props.label + " Section Label"}
          id={props.label + " Section Content"}
          tabIndex={-1}
          className={
            "flex h-3/4 flex-col flex-nowrap transform-gpu scroll-smooth " +
            "blue-highlight focus:outline-none " +
            (effect === "slide-up"
              ? "animate-slide-up "
              : effect === "fade-in"
              ? "animate-fade-in "
              : effect === "saturate-in"
              ? "animate-saturate-in "
              : "") +
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
              "fixed whitespace-nowrap m-[3vmin] " +
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
