import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Accordian from "../components/accordian/Accordian";
import About from "../components/accordian/sections/About";
import Contact from "../components/accordian/sections/Contact";
import Home from "../components/accordian/sections/Home";
import Projects from "../components/accordian/sections/Projects";
import Testimonials from "../components/accordian/sections/Testimonials";
import { StateContext } from "../utils/ContextProvider";
import {
  exitProjectView,
  navigateAboutTabs,
  navigateSections,
  trapFocus,
} from "../utils/helperFunctions";

export type sections =
  | "Home"
  | "About"
  | "Projects"
  | "Testimonials"
  | "Contact";

type propsType = {
  section: sections;
};

const Portfolio = (props: propsType) => {
  const context = useContext(StateContext);
  const [opened, setOpenedState] = useState<sections>(props.section);
  const openedRef = useRef<sections>(props.section);
  const waitTime = 200;
  const timeout = useRef<NodeJS.Timeout>();
  const leading = useRef(true);
  const arrowDownEvent = new KeyboardEvent("keydown", { key: "ArrowDown" });
  const arrowUpEvent = new KeyboardEvent("keydown", { key: "ArrowUp" });
  const sectionsArray: sections[] = [
    "Home",
    "About",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  /**
   * Sets which accordion section is opened.
   * @param section The section label.
   */
  const setOpened = useCallback((section: sections) => {
    requestAnimationFrame(() => {
      openedRef.current = section;
      setOpenedState(section);
    });
  }, []);

  useEffect(() => {
    routeToSection();
    window.addEventListener("hashchange", routeToSection);
    document.addEventListener("keydown", onArrowKey, { capture: true });
    return () => {
      window.removeEventListener("hashchange", routeToSection);
      document.removeEventListener("keydown", onArrowKey);
      clearTimeout(timeout.current);
      leading.current = true;
    };
  }, []);

  /**
   * Navigates the accordion to the section specified in the URL.
   */
  function routeToSection() {
    const hashRoute = window.location.hash;
    if (hashRoute !== "") {
      const route: any = hashRoute.replace("#", "");
      if (sectionsArray.includes(route) && route !== openedRef.current)
        setOpened(route);
      window.history.pushState(null, "", window.location.origin);
    }
  }

  /**
   * Navigates the accordion in response to a scroll event.
   * Navigation is throttled and leading is enabled.
   * @param event Wheel event.
   */
  function onScroll(event: React.WheelEvent) {
    if (leading.current) {
      switch (openedRef.current) {
        case "Home":
          if (event.deltaY > 0) setOpened("About");
          break;

        case "About":
          if (event.deltaY < 0) setOpened("Home");
          else if (event.deltaY > 0) setOpened("Projects");
          break;

        case "Projects":
          if (event.deltaY < 0) setOpened("About");
          else if (event.deltaY > 0) setOpened("Testimonials");
          break;

        case "Testimonials":
          if (event.deltaY < 0) setOpened("Projects");
          else if (event.deltaY > 0) setOpened("Contact");
          break;

        case "Contact":
          if (event.deltaY < 0) setOpened("Testimonials");
          break;
      }
      leading.current = false;
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      leading.current = true;
    }, waitTime);
  }

  /**
   * Main keyboard event handler.
   * Capture is true.
   * An additional keyboard event handler, where capture is false,
   *  can be found in the ProjectView component.
   * @param event Keyboard event.
   */
  function onArrowKey(event: KeyboardEvent) {
    exitProjectView(event, openedRef, context);
    trapFocus(event, openedRef);
    navigateSections(event, openedRef, setOpened);
    navigateAboutTabs(event, openedRef, context);
  }
  context.setAndSaveHighScore;

  return (
    <div
      aria-hidden="false"
      id="portfolio"
      className={
        "fixed flex flex-col justify-content-center content-start flex-nowrap " +
        "text-black dark:text-white select-none view-width view-height " +
        "text-[4vmin] sm:text-[3vmin] leading-snug "
      }
      onWheel={(event) => onScroll(event)}
      onTouchStart={(event) => {
        context.touchDevice.current = true;
        if (!context.hideContent)
          context.touchStart.current = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY,
          };
        else context.touchStartReset();
      }}
      onTouchEnd={(event) => {
        if (
          !context.hideContent &&
          (context.touchStart.current.x !== -1 ||
            context.touchStart.current.y !== -1)
        ) {
          context.touchEnd.current = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY,
          };
          if (
            Math.abs(
              context.touchEnd.current.y - context.touchStart.current.y
            ) >
            Math.abs(context.touchEnd.current.x - context.touchStart.current.x)
          ) {
            // Swipe up
            if (
              context.touchStart.current.y >
              context.touchEnd.current.y + context.deadzoneY * context.vmax
            )
              document.dispatchEvent(arrowDownEvent);
            // Swipe down
            else if (
              context.touchStart.current.y <
              context.touchEnd.current.y - context.deadzoneY * context.vmax
            )
              document.dispatchEvent(arrowUpEvent);
          } else if (
            Math.abs(
              context.touchEnd.current.y - context.touchStart.current.y
            ) <
            Math.abs(context.touchEnd.current.x - context.touchStart.current.x)
          ) {
            // Swipe left
            if (
              context.touchStart.current.x >
              context.touchEnd.current.x + context.deadzoneX * context.vmin
            )
              document.dispatchEvent(context.rightArrowEvent);
            // Swipe right
            else if (
              context.touchStart.current.x <
              context.touchEnd.current.x - context.deadzoneX * context.vmin
            )
              document.dispatchEvent(context.leftArrowEvent);
          }
        }
      }}
      onTouchCancel={context.touchStartReset}
    >
      <Accordian
        label={"Home"}
        opened={opened}
        setOpened={setOpened}
        content={<Home />}
      />
      <Accordian
        label={"About"}
        opened={opened}
        setOpened={setOpened}
        content={<About />}
      />
      <Accordian
        label={"Projects"}
        opened={opened}
        setOpened={setOpened}
        content={<Projects />}
      />
      <Accordian
        label={"Testimonials"}
        opened={opened}
        setOpened={setOpened}
        content={<Testimonials />}
      />
      <Accordian
        label={"Contact"}
        opened={opened}
        setOpened={setOpened}
        content={<Contact />}
      />
    </div>
  );
};

export default Portfolio;
