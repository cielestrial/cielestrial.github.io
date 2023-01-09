import ProjectCard from "./ProjectCard";

type propsType = {
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
};
const ProjectGrid = (props: propsType) => {
  return (
    <div
      className={
        "h-full p-4 grid auto-cols-auto auto-rows-auto " +
        "place-content-center place-items-center "
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
        setShowProjectView={props.setShowProjectView}
        setSelectedProject={props.setSelectedProject}
      />
    </div>
  );
};

export default ProjectGrid;
