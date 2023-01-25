import { useState } from "react";
import placeholderImage from "../assets/general/placeholder_image.png";
import ProjectView from "./ProjectView";

type statusType = "Completed" | "Work In Progress" | "Hiatus";
type propsType = {
  title: string;
  description: string;
  images: string[];
  link: string | undefined;
  status: statusType;
  order: number;
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  setGridEffect: React.Dispatch<React.SetStateAction<"fade-out" | "none">>;
};

const ProjectCard = (props: propsType) => {
  const label =
    "text-center font-semibold bg-slate-200 border-[2.5px] border-solid border-black " +
    "whitespace-nowrap ";
  const [effect, setEffect] = useState<"slide-in" | "none">("slide-in");

  return (
    <div
      onClick={() => {
        props.setGridEffect("fade-out");
        props.setSelectedProject(
          <ProjectView
            title={props.title}
            description={props.description}
            link={props.link}
            images={props.images}
            setShowProjectView={props.setShowProjectView}
          />
        );
      }}
      className={
        "h-full flex flex-col flex-nowrap " +
        "place-content-center min-w-[10rem] h-fit w-[20vw] " +
        "drop-shadow-md saturate-50 origin-top " +
        "transition-all duration-75 custom-ease-out " +
        "hover:saturate-150 active:scale-95 " +
        "cursor-pointer transform-gpu " +
        (effect === "slide-in"
          ? props.order === 0
            ? "animate-[fade-in-right_0.7s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 1
            ? "animate-[fade-in-right_0.7s_.35s_cubic-bezier(.38,0,.64,1)_both] "
            : props.order === 2
            ? "animate-[fade-in-right_0.7s_.7s_cubic-bezier(.38,0,.64,1)_both] "
            : "animate-[fade-in-right_0.7s_1.05s_cubic-bezier(.38,0,.64,1)_both] "
          : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <p className={label}>{props.title}</p>
      <img
        id={props.title}
        src={props.images.length > 0 ? props.images[0] : placeholderImage}
        alt={props.title + " preview image"}
        className={
          "grow origin-top transition-all " +
          "border-x-[2.5px] border-solid border-black "
        }
      />
      <p className={label}>{props.status}</p>
    </div>
  );
};

export default ProjectCard;
