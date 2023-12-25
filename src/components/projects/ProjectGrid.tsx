import { useContext, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

import { StateContext } from "~/utils/ContextProvider";
import { projects } from "~/utils/projectList";
import { trapScroll } from "~/utils/helperFunctions";

type propsType = {
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
};

const ProjectGrid = (props: propsType) => {
  const context = useContext(StateContext);
  const [effect, setEffect] = useState<"fade-out" | "none">("none");
  const [scrollable, setScrollable] = useState(false);
  const cardCount = useRef(0);
  const scrollBoundHit = useRef(false);

  return (
    <div className="h-full w-full flex flex-col ">
      <p
        className={
          "text-center text-[5.175vmin] sm:text-[3.88vmin] font-semibold " +
          "mx-auto pt-[8vh] pb-[4vh] " +
          (effect === "fade-out" ? "animate-fade-out " : "")
        }
        onAnimationEnd={() => {
          props.setShowProjectView(true);
          setEffect("none");
        }}
      >
        Click on a project to see more!
      </p>

      <div
        tabIndex={0}
        className={
          "px-[4vmin] scroll-smooth flex flex-row overflow-y-auto " +
          (scrollable ? "overflow-x-auto " : "overflow-x-hidden ")
        }
        onAnimationEnd={(event) => {
          if (event.animationName === "fade-in-right") cardCount.current++;
          if (cardCount.current === 4) {
            cardCount.current = 0;
            setScrollable(true);
          }
        }}
        onScroll={context.touchStartReset}
        onWheel={(event) => trapScroll(event, scrollBoundHit)}
      >
        <div
          className={
            "h-max w-max flex flex-row flex-wrap m-auto place-content-center " +
            (effect === "fade-out" ? "animate-fade-out " : "")
          }
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              image={project.image}
              link={project.link}
              status={project.status}
              order={i}
              setGridEffect={setEffect}
              setShowProjectView={props.setShowProjectView}
              setSelectedProject={props.setSelectedProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
