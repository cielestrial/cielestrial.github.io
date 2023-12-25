import { useContext, useState } from "react";
import { StateContext } from "~/utils/ContextProvider";
import ProjectView, { projectType } from "./ProjectView";

type statusType = "Completed" | "Work In Progress" | "Hiatus";
export type cardType = projectType & {
  image: string;
  status: statusType;
  order: number;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  setGridEffect: React.Dispatch<React.SetStateAction<"fade-out" | "none">>;
};

const ProjectCard = (props: cardType) => {
  const context = useContext(StateContext);
  const [effect, setEffect] = useState<"slide-in" | "none">("slide-in");
  const label =
    "text-center font-semibold bg-slate-200 border-[0.625vmin] border-solid border-black " +
    "whitespace-nowrap ";

  return (
    <div
      id={"projectCard" + props.order}
      tabIndex={0}
      onKeyUp={(event) => {
        if (event.key === "Enter" || event.key === " ")
          event.currentTarget.dispatchEvent(context.clickEvent);
      }}
      onClick={(event) => {
        event.currentTarget.blur();
        props.setGridEffect("fade-out");
        props.setSelectedProject(
          <ProjectView
            title={props.title}
            technologies={props.technologies}
            description={props.description}
            link={props.link}
            setShowProjectView={props.setShowProjectView}
          />
        );
      }}
      className={
        "flex flex-col flex-nowrap w-[35.56vmin] sm:w-[28.45vmin] " +
        "shadow-md transition duration-75 custom-ease-out m-[5vmin] " +
        "saturate-[.75] active:scale-95 outline-none outline-[0.4vmin] " +
        "focus-visible:saturate-150 focus-visible:outline-amber-500 " +
        (!context.touchDevice.current
          ? "hover:saturate-150 hover:outline-amber-500 "
          : "") +
        "cursor-pointer " +
        (effect === "slide-in"
          ? props.order === 0
            ? "animate-[fade-in-right_0.7s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 1
            ? "animate-[fade-in-right_0.7s_.35s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 2
            ? "animate-[fade-in-right_0.7s_.7s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 3
            ? "animate-[fade-in-right_0.7s_1.05s_cubic-bezier(.38,0,.64,1)_both] "
            : "animate-[fade-in-right_0.7s_1.4s_cubic-bezier(.38,0,.64,1)_both] "
          : "")
      }
      onAnimationEnd={() => {
        setEffect("none");
      }}
    >
      <p aria-label={props.title + "."} className={label}>
        {props.title}
      </p>
      <img
        id={props.title}
        aria-label="preview image."
        src={props.image}
        loading="eager"
        alt={props.title + " preview image"}
        className={
          "origin-top aspect-video border-x-[0.625vmin] border-solid border-black "
        }
        draggable="false"
      />
      <p aria-label={props.status + "."} className={label}>
        {props.status}
      </p>
    </div>
  );
};

export default ProjectCard;
