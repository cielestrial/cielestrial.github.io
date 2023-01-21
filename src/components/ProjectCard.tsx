import { useState } from "react";
import { placeholderImage } from "../nav/Projects";
import ProjectView from "./ProjectView";

type statusType = "Completed" | "Work In Progress" | "Hiatus";
type propsType = {
  title: string;
  images: string[];
  link: string | undefined;
  status: statusType;
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  setGridEffect: React.Dispatch<React.SetStateAction<"fade-out" | "none">>;
};

const ProjectCard = (props: propsType) => {
  const label =
    "text-center font-semibold bg-slate-200 border-[2.5px] border-solid border-black ";
  const [effect, setEffect] = useState<"scale-up" | "none">("none");

  return (
    <div
      onClick={() => {
        setEffect("scale-up");
        props.setGridEffect("fade-out");
      }}
      className={
        "h-full flex flex-col flex-nowrap " +
        "place-content-center w-36 h-36 " +
        "drop-shadow-md saturate-50 origin-top " +
        "transition-all duration-75 custom-ease-out " +
        "hover:saturate-150 active:scale-95 " +
        "cursor-pointer "
      }
    >
      <p className={label}>{props.title}</p>
      <img
        id={props.title}
        src={props.images.length > 0 ? props.images[0] : placeholderImage}
        alt="yspm"
        className={
          "grow origin-top transition-all " +
          "border-x-[2.5px] border-solid border-black " +
          (effect === "scale-up" ? "animate-scale-up " : "")
        }
        onAnimationEnd={() => {
          props.setSelectedProject(
            <ProjectView
              link={props.link}
              images={props.images}
              setShowProjectView={props.setShowProjectView}
            />
          );
          props.setShowProjectView(true);
        }}
      />
      <p className={label}>{props.status}</p>
    </div>
  );
};

export default ProjectCard;
