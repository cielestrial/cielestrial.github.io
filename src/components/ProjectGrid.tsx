import { useState } from "react";
import ProjectCard from "./ProjectCard";

import yspm_light_1 from "../assets/yspm/yspm_landing_page_light_mode.jpg";
import yspm_light_2 from "../assets/yspm/yspm_loading_page_light_mode.jpg";
import yspm_light_3 from "../assets/yspm/yspm_playlists_page_light_mode.jpg";
import yspm_light_4 from "../assets/yspm/yspm_genres_page_light_mode.jpg";

import yspm_dark_1 from "../assets/yspm/yspm_landing_page_dark_mode.jpg";
import yspm_dark_2 from "../assets/yspm/yspm_loading_page_dark_mode.jpg";
import yspm_dark_3 from "../assets/yspm/yspm_playlists_page_dark_mode.jpg";
import yspm_dark_4 from "../assets/yspm/yspm_genres_page_dark_mode.jpg";

import dashboard_tab_1 from "../assets/ev-dashboard/ev-dashboard_tab1.jpg";

import donkey_car_1 from "../assets/donkey-car/donkey-car_home.jpg";
import donkey_car_2 from "../assets/donkey-car/donkey-car_test_cases.jpg";

/*
import wbtracker_1 from "../assets/wbtracker/wbtracker_home.jpg";
import wbtracker_2 from "../assets/wbtracker/wbtracker_d_survey.jpg";
import wbtracker_3 from "../assets/wbtracker/wbtracker_a_survey.jpg";
import wbtracker_4 from "../assets/wbtracker/wbtracker_graphs.jpg";
*/

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
          "text-center text-xl font-semibold mx-auto w-fit h-fit mt-10 transform-gpu " +
          (effect === "fade-out" ? "animate-fade-out " : "")
        }
        onAnimationEnd={() => {
          props.setShowProjectView(true);
          setEffect("none");
        }}
      >
        {"Click on a project to see more!"}
      </p>
      <div
        className={
          "h-full w-max grid grid-rows-2 grid-cols-2 gap-x-12 " +
          "md:grid-rows-1 md:grid-flow-col-dense md:gap-x-[4vw] " +
          "md:mb-20 place-self-center place-items-center " +
          (effect === "fade-out" ? "animate-fade-out " : "")
        }
      >
        <ProjectCard
          title={"yspm"}
          images={[
            // light
            yspm_light_1,
            yspm_light_2,
            yspm_light_3,
            yspm_light_4,

            // dark
            yspm_dark_1,
            yspm_dark_2,
            yspm_dark_3,
            yspm_dark_4,
          ]}
          link={"https://yspm-ccnd.onrender.com"}
          status={"Work In Progress"}
          description={
            "A Spotify playlist manager. The front-end was developed with " +
            "React, Typescript. Styled with Mantine. The back-end " +
            "was developed with Express."
          }
          order={0}
          setGridEffect={setEffect}
          setShowProjectView={props.setShowProjectView}
          setSelectedProject={props.setSelectedProject}
        />

        <ProjectCard
          title={"ev-dashboard"}
          images={[dashboard_tab_1]}
          link={"https://ev-dashboard.onrender.com"}
          status={"Hiatus"}
          description={
            "A collaborative project between University of Windsor " +
            "and Windsor-Essex Automobility Enterprises. I created a web-based " +
            "dashboard for electric vehicles. I both designed and " +
            "built the web page. The front-end was designed with Figma and " +
            "developed with React, TypeScript, and SCSS."
          }
          order={1}
          setGridEffect={setEffect}
          setShowProjectView={props.setShowProjectView}
          setSelectedProject={props.setSelectedProject}
        />

        <ProjectCard
          title={"donkey-car"}
          images={[donkey_car_1, donkey_car_2]}
          link={"https://donkey-car.onrender.com"}
          status={"Hiatus"}
          description={
            "A Chaos Engineering in a Cyber-Physical System project. Simply put: " +
            "our team introduces failures into the system of a miniature self-driving " +
            "vehicle and logs how well it responds. I built both the " +
            "web page and the web server. The front-end was developed with " +
            "React and the back-end was developed with Spring Boot."
          }
          order={2}
          setGridEffect={setEffect}
          setShowProjectView={props.setShowProjectView}
          setSelectedProject={props.setSelectedProject}
        />

        {/*
          <ProjectCard
            title={"wbtracker"}
            images={[
              wbtracker_1,
              wbtracker_2,
              wbtracker_3,
              wbtracker_4,
            ]}
            link={"https://wbtracker.onrender.com"}
            status={"Completed"}
            description={
              "A client-side web application that surveys, tracks, and " +
              "graphs a users mental health over an extended period. " +
              "It was developed with HTML, JS, bootstrap, and CSS."
            }
            order={3}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />
          */}
      </div>
    </div>
  );
};

export default ProjectGrid;
