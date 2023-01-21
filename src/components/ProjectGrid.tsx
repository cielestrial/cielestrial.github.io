import { useState } from "react";
import ProjectCard from "./ProjectCard";

type propsType = {
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
};
const ProjectGrid = (props: propsType) => {
  const [effect, setEffect] = useState<"fade-out" | "none">("none");

  return (
    <div className="h-full flex flex-col content-start ">
      <p
        className={
          "text-center font-semibold mx-auto w-fit h-fit my-5 " +
          (effect === "fade-out" ? "animate-fade-out " : "")
        }
      >
        {"Click on a project to see more!"}
      </p>
      <div
        className={
          "h-full p-4 grid auto-cols-auto auto-rows-auto " +
          "justify-content-center justify-items-center "
        }
      >
        <ProjectCard
          title={"YSPM"}
          images={[
            "/src/assets/yspm/yspm_landing_page_light_mode.jpg",
            "/src/assets/yspm/yspm_loading_page_light_mode.jpg",
            "/src/assets/yspm/yspm_playlists_page_light_mode.jpg",
            "/src/assets/yspm/yspm_genres_page_light_mode.jpg",
          ]}
          link={"https://yspm-ccnd.onrender.com/"}
          status={"Work In Progress"}
          setGridEffect={setEffect}
          setShowProjectView={props.setShowProjectView}
          setSelectedProject={props.setSelectedProject}
        />
      </div>
    </div>
  );
};

export default ProjectGrid;
