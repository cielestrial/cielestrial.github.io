import { useEffect, useState } from "react";
import { sections } from "../pages/Portfolio";

type propsType = {
  label: sections;
  opened: sections;
  setOpened: React.Dispatch<React.SetStateAction<sections>>;
  content: React.ReactNode;
};

const Accordian = (props: propsType) => {
  const [effect, setEffect] = useState<
    "slide-up" | "slide-down" | "fade-in" | "saturate-in" | "none"
  >("none");

  useEffect(() => {
    if (props.label === "Home") setEffect("saturate-in");
    else if (props.label === "About") setEffect("slide-down");
    else if (props.label === "Projects" || props.label === "Testimonials")
      setEffect("fade-in");
    else if (props.label === "Contact") setEffect("slide-up");
  }, [props.opened]);

  function displayLabel() {
    if (props.label === props.opened) return null;
    let gradient = "";
    switch (props.label) {
      case "Home":
        gradient = "bg-gradient-to-b from-yellow-100 to-slate-300";
        break;
      case "About":
        props.opened === "Home"
          ? (gradient = "bg-gradient-to-b from-yellow-100 to-slate-200 ")
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

    return (
      <div
        className={
          "w-screen font-bold text-center py-3.5 bg-no-repeat drop-shadow-lg " +
          "cursor-pointer " +
          gradient
        }
        onClick={() => props.setOpened(props.label)}
      >
        {props.label}
      </div>
    );
  }

  function displayContent() {
    if (props.opened === props.label)
      return (
        <div
          className={
            "flex grow flex-col flex-nowrap overflow-clip transform-gpu " +
            (effect === "slide-up"
              ? "animate-slide-up "
              : effect === "slide-down"
              ? "animate-slide-down "
              : effect === "fade-in"
              ? "animate-fade-in "
              : effect === "saturate-in"
              ? "animate-saturate-in "
              : "")
          }
          onAnimationEnd={() => setEffect("none")}
        >
          {props.content}
        </div>
      );
    return null;
  }

  return (
    <>
      {displayLabel()}
      {displayContent()}
    </>
  );
};

export default Accordian;
