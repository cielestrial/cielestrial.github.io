import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Accordian from "../components/Accordian";
import About from "../nav/About";
import Contact from "../nav/Contact";
import Home from "../nav/Home";
import Projects from "../nav/Projects";
import Testimonials from "../nav/Testimonials";
import { StateContext } from "../utils/ContextProvider";

export type sections =
  | "Home"
  | "About"
  | "Projects"
  | "Testimonials"
  | "Contact";

const Portfolio = () => {
  const context = useContext(StateContext);
  const [opened, setOpenedState] = useState<sections>("Home");
  const openedRef = useRef<sections>("Home");
  const waitTime = 200;
  const timeout = useRef<NodeJS.Timeout>();
  const leading = useRef(true);
  const arrowDownEvent = new KeyboardEvent("keydown", { key: "ArrowDown" });
  const arrowUpEvent = new KeyboardEvent("keydown", { key: "ArrowUp" });

  const setOpened = useCallback((section: sections) => {
    openedRef.current = section;
    setOpenedState(section);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onArrowKey);
    return () => {
      document.removeEventListener("keydown", onArrowKey);
      clearTimeout(timeout.current);
      leading.current = true;
    };
  }, []);

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

  function onArrowKey(event: KeyboardEvent) {
    switch (openedRef.current) {
      case "Home":
        if (event.key === "ArrowDown") setOpened("About");
        break;

      case "About":
        if (event.key === "ArrowUp") setOpened("Home");
        else if (event.key === "ArrowDown") setOpened("Projects");
        break;

      case "Projects":
        if (event.key === "ArrowUp") setOpened("About");
        else if (event.key === "ArrowDown") setOpened("Testimonials");
        break;

      case "Testimonials":
        if (event.key === "ArrowUp") setOpened("Projects");
        else if (event.key === "ArrowDown") setOpened("Contact");
        break;

      case "Contact":
        if (event.key === "ArrowUp") setOpened("Testimonials");
        break;
    }
  }

  return (
    <div
      id="portfolio"
      className={
        "fixed flex flex-col justify-content-center content-start flex-nowrap " +
        "text-black dark:text-white select-none w-screen h-screen " +
        "text-[4vmin] sm:text-[3vmin] leading-snug "
      }
      onWheel={(event) => onScroll(event)}
      onTouchStart={(event) => {
        if (!context.hideContent)
          context.touchStart.current = event.changedTouches[0].pageY;
        else context.touchStart.current = -1;
      }}
      onTouchEnd={(event) => {
        if (!context.hideContent && context.touchStart.current !== -1) {
          context.touchEnd.current = event.changedTouches[0].pageY;
          // Swipe up
          if (
            context.touchStart.current >
            context.touchEnd.current + context.deadzone * context.vmax
          )
            onArrowKey(arrowDownEvent);
          // Swipe down
          else if (
            context.touchStart.current <
            context.touchEnd.current - context.deadzone * context.vmax
          )
            onArrowKey(arrowUpEvent);
        }
      }}
      onTouchCancel={() => (context.touchStart.current = -1)}
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
