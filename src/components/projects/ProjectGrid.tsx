import { useContext, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

import yspm_light_4 from "../../assets/yspm/yspm_genres_page_light_mode.jpg";
import yspm_light_1 from "../../assets/yspm/yspm_landing_page_light_mode.jpg";
import yspm_light_2 from "../../assets/yspm/yspm_loading_page_light_mode.jpg";
import yspm_light_3 from "../../assets/yspm/yspm_playlists_page_light_mode.jpg";

import yspm_dark_4 from "../../assets/yspm/yspm_genres_page_dark_mode.jpg";
import yspm_dark_1 from "../../assets/yspm/yspm_landing_page_dark_mode.jpg";
import yspm_dark_2 from "../../assets/yspm/yspm_loading_page_dark_mode.jpg";
import yspm_dark_3 from "../../assets/yspm/yspm_playlists_page_dark_mode.jpg";

import dashboard_tab_1 from "../../assets/ev-dashboard/ev-dashboard_tab1.jpg";

import donkey_car_1 from "../../assets/donkey-car/donkey-car_home.jpg";
import donkey_car_2 from "../../assets/donkey-car/donkey-car_test_cases.jpg";

import wbtracker_1 from "../../assets/wbtracker/wbtracker_home.png";
import wbtracker_2 from "../../assets/wbtracker/wbtracker_d_survey.png";
import wbtracker_3 from "../../assets/wbtracker/wbtracker_a_survey.png";
import wbtracker_4 from "../../assets/wbtracker/wbtracker_graphs.png";
import wbtracker_5 from "../../assets/wbtracker/wbtracker_404.png";

import { StateContext } from "../../utils/ContextProvider";

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

  return (
    <div className="h-full w-full grid content-start justify-content-center ">
      <p
        className={
          "text-center text-[4.5vmin] sm:text-[3.375vmin] font-semibold " +
          "mx-auto w-fit h-fit py-[8dvh] transform-gpu " +
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
        className={
          "w-full pb-[3dvh] px-[4dvmin] grid scroll-smooth " +
          "overflow-y-auto " +
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
        onTouchMove={(event) => {
          // Conditional on there being overflow
          if (
            !(
              event.currentTarget.offsetHeight ===
                event.currentTarget.scrollHeight &&
              event.currentTarget.offsetWidth ===
                event.currentTarget.scrollWidth
            )
          )
            clearTimeout(context.countdownToGameStart.current);
        }}
        onWheel={(event) => {
          if (
            !(
              (Math.round(event.currentTarget.scrollTop) === 0 &&
                event.deltaY < 0) ||
              (Math.round(event.currentTarget.scrollTop + 1) +
                event.currentTarget.offsetHeight >=
                event.currentTarget.scrollHeight &&
                event.deltaY > 0)
            )
          )
            event.stopPropagation();
        }}
        /*
        onClick={(event) => {
          console.log(
            Math.round(event.currentTarget.scrollTop),
            event.currentTarget.offsetHeight,
            event.currentTarget.scrollHeight
          );
          console.log(
            "Width:",
            Math.round(event.currentTarget.scrollLeft),
            event.currentTarget.offsetWidth,
            event.currentTarget.scrollWidth
          );
        }}
        */
      >
        <div
          className={
            "h-max w-max grid grid-rows-2 grid-cols-2 gap-[5dvmin] " +
            "lg:grid-rows-1 lg:grid-flow-col-dense lg:gap-x-[10dvmin] " +
            "place-self-center place-items-center " +
            (effect === "fade-out" ? "animate-fade-out " : "")
          }
        >
          <ProjectCard
            title={"YSPM"}
            description={
              "A Spotify playlist manager. Developed with React, TypeScript, " +
              "Mantine, and Express. Key utilities include REST API and a " +
              "custom-made query api. Key features include creating genre-based " +
              "playlists, playlist subscriptions, and light & dark mode themes. " +
              "This application is currently in quota mode, so users have to be " +
              "manually approved by me. If you would like to request access, " +
              "please contact me."
            }
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
            order={0}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />

          <ProjectCard
            title={"EV-Dashboard"}
            description={
              "A collaborative project between University of Windsor " +
              "and Windsor-Essex Automobility Enterprises. I created a web-based " +
              "dashboard for electric vehicles. Designed with Figma and developed " +
              "with React, TypeScript, and SCSS. Key features include gesture-based " +
              "navigation and supports up to 20 smaller applications internally " +
              "as widgets."
            }
            images={[dashboard_tab_1]}
            link={"https://ev-dashboard.onrender.com"}
            status={"Hiatus"}
            order={1}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />

          <ProjectCard
            title={"Donkey-Car"}
            description={
              "A Chaos Engineering in a Cyber-Physical System project. Simply put: " +
              "our team introduces failures into the system of a miniature self-driving " +
              "vehicle and logs how well it responds. I built both the " +
              "web page and the web server. Developed with React, Spring " +
              "Boot, and Hazelcast. Deployed with Docker."
            }
            images={[donkey_car_1, donkey_car_2]}
            link={"https://donkey-car.onrender.com"}
            status={"Hiatus"}
            order={2}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />
          <ProjectCard
            title={"WB Tracker"}
            description={
              "A client-side web application that surveys, tracks, and " +
              "graphs a users mental health over an extended period. " +
              "It was developed with HTML, JS, bootstrap, and CSS."
            }
            images={[
              wbtracker_1,
              wbtracker_2,
              wbtracker_3,
              wbtracker_4,
              wbtracker_5,
            ]}
            link={"https://wbtracker.onrender.com"}
            status={"Completed"}
            order={3}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
