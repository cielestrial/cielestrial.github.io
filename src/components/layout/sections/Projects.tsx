import { useState } from 'react';

import ProjectGrid from '~/components/projects/ProjectGrid';

type propsType = { withEffect: boolean };

const Projects = ({ withEffect }: propsType) => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    JSX.Element | undefined
  >(undefined);

  return (
    <>
      {showProjectView && selectedProject !== undefined ? (
        selectedProject
      ) : (
        <ProjectGrid
          setShowProjectView={setShowProjectView}
          setSelectedProject={setSelectedProject}
          withEffect={withEffect}
        />
      )}
    </>
  );
};

export default Projects;
