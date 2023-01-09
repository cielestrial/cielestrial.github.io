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
};

const ProjectCard = (props: propsType) => {
  const label = "text-center font-semibold bg-neutral-300 ";
  function displayProjectView() {
    props.setSelectedProject(
      <ProjectView
        link={props.link}
        images={props.images}
        setShowProjectView={props.setShowProjectView}
      />
    );
    props.setShowProjectView(true);
  }
  return (
    <div
      onClick={displayProjectView}
      className={
        "h-full flex flex-col flex-nowrap " +
        "border-[2.5px] border-solid border-black " +
        "divide-y-2 divide-double divide-black " +
        "place-content-center w-36 h-36 " +
        "cursor-pointer "
      }
    >
      <p className={label}>{props.title}</p>
      <img
        src={props.images.length > 0 ? props.images[0] : placeholderImage}
        alt="yspm"
        className="grow"
      />
      <p className={label}>{props.status}</p>
    </div>
  );
};

export default ProjectCard;
