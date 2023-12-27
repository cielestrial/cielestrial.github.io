import { useState } from "react";
import GameButton from "~/components/background/GameButton";
import ProjectGrid from "~/components/projects/ProjectGrid";

const Projects = () => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    JSX.Element | undefined
  >(undefined);

  return (
    <>
      <GameButton />

      {showProjectView && selectedProject !== undefined ? (
        selectedProject
      ) : (
        <ProjectGrid
          setShowProjectView={setShowProjectView}
          setSelectedProject={setSelectedProject}
        />
      )}
    </>
  );
};

export default Projects;
