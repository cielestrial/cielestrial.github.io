import { useContext, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

import junkyard_light from "../../assets/junkyard-of-shangri-la/junkyard-of-shangri-la_light_mode.jpg";
import junkyard_dark from "../../assets/junkyard-of-shangri-la/junkyard-of-shangri-la_dark_mode.jpg";

import yspm_light_4 from "../../assets/yspm/yspm_genres_page_light_mode.jpg";
import yspm_light_1 from "../../assets/yspm/yspm_landing_page_light_mode.jpg";
import yspm_light_2 from "../../assets/yspm/yspm_loading_page_light_mode.jpg";
import yspm_light_3 from "../../assets/yspm/yspm_playlists_page_light_mode.jpg";

import yspm_dark_4 from "../../assets/yspm/yspm_genres_page_dark_mode.jpg";
import yspm_dark_1 from "../../assets/yspm/yspm_landing_page_dark_mode.jpg";
import yspm_dark_2 from "../../assets/yspm/yspm_loading_page_dark_mode.jpg";
import yspm_dark_3 from "../../assets/yspm/yspm_playlists_page_dark_mode.jpg";

import dashboard_tab_1 from "../../assets/ev-dashboard/ev-dashboard_tab1.jpg";

/*
import donkey_car_1 from "../../assets/donkey-car/donkey-car_home.jpg";
import donkey_car_2 from "../../assets/donkey-car/donkey-car_test_cases.jpg";
*/

import wbtracker_1 from "../../assets/wbtracker/wbtracker_home.png";
import wbtracker_2 from "../../assets/wbtracker/wbtracker_d_survey.png";
import wbtracker_3 from "../../assets/wbtracker/wbtracker_a_survey.png";
import wbtracker_4 from "../../assets/wbtracker/wbtracker_graphs.png";
import wbtracker_5 from "../../assets/wbtracker/wbtracker_404.png";

import rightdrive_page_1 from "../../assets/rightdrive-dev-test/rightdrive-dev-test_page1.jpg";

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
    <div className="h-full w-full flex flex-col ">
      <p
        className={
          "text-center text-[4.5vmin] sm:text-[3.375vmin] font-semibold " +
          "mx-auto w-fit h-fit pt-[8vh] pb-[4vh] " +
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
        onScroll={() => {
          clearTimeout(context.countdownToGameStart.current);
          context.touchStartReset;
        }}
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
          /*
           * Blocks wheel event from triggering navigation when inside scrollable area.
           * Navigation still triggers when an additional wheel event is detected at
           *   the very top or bottom of the scroll area.
           */
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
            "h-max w-max flex flex-row flex-wrap m-auto place-content-center " +
            (effect === "fade-out" ? "animate-fade-out " : "")
          }
        >
          <ProjectCard
            title={"Junkyard of SL"}
            description={
              "Web scraping demo project. Search for products from an " +
              "online bookstore. Backend written in python with FastAPI " +
              "framework. Frontend SSR with Nuxt framework utilizing " +
              "Vue, written with TypeScript, and styled with Tailwind CSS. " +
              "Follows the WCAG 2 to create a rich & accessible " +
              "experience for a wide breadth of users. This is achieved " +
              "through the utilization of aria labelling, support for keyboard " +
              "interactions, focus traps, and many more techniques."
            }
            images={[junkyard_light, junkyard_dark]}
            link={"https://junkyard-of-shangri-la.onrender.com"}
            status={"Work In Progress"}
            order={0}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />

          <ProjectCard
            title={"RD Dev Test"}
            description={
              "A test application that displays information on the top 40 " +
              "cryptocurrencies. Developed with React, Redux, TypeScript, " +
              "Material UI, Serverless Express, and Redis. Tested with Vitest " +
              "and React Testing Library. Key features include sleek design, " +
              "screen reader friendly and adheres to the WCAG, serverless " +
              "environment with cache, rate limiting and exponential backoff."
            }
            images={[rightdrive_page_1]}
            link={"https://rightdrive-dev-test.netlify.app"}
            status={"Completed"}
            order={1}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />

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
            order={2}
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
            order={3}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />

          {/*
          <ProjectCard
            title={"Donkey-Car"}
            description={
              "A Chaos Engineering in a Cyber-Physical System project. Simply put: " +
              "our team introduces failures into the system of a miniature self-driving " +
              "vehicle and logs how well it responds. I built both the " +
              "web page and the web server. Developed with React, auth0, Spring " +
              "Boot, and Hazelcast. Deployed with Docker."
            }
            images={[donkey_car_1, donkey_car_2]}
            link={"https://donkey-car.onrender.com"}
            status={"Hiatus"}
            order={3}
            setGridEffect={setEffect}
            setShowProjectView={props.setShowProjectView}
            setSelectedProject={props.setSelectedProject}
          />
          */}

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
            order={4}
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
