import { useState } from "react";
import ProjectGrid from "~/components/projects/ProjectGrid";

const Projects = () => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    JSX.Element | undefined
  >(undefined);

  if (showProjectView && selectedProject !== undefined) return selectedProject;
  else
    return (
      <ProjectGrid
        setShowProjectView={setShowProjectView}
        setSelectedProject={setSelectedProject}
      />
    );
};

export default Projects;
