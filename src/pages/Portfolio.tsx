import { useEffect, useRef, useState } from "react";
import Accordian from "../components/Accordian";
import About from "../nav/About";
import Contact from "../nav/Contact";
import Home from "../nav/Home";
import Projects from "../nav/Projects";
import Testimonials from "../nav/Testimonials";

export type sections =
  | "Home"
  | "About"
  | "Projects"
  | "Testimonials"
  | "Contact";

const Portfolio = () => {
  const [opened, setOpened] = useState<sections>("Home");
  const waitTime = 200;
  const timeout = useRef<NodeJS.Timeout>();
  const leading = useRef(true);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
      leading.current = true;
    };
  }, []);

  const onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (leading.current) {
      switch (opened) {
        case "Home":
          if (event.deltaY > 0) {
            console.log("scrolled down to About");
            setOpened("About");
          }
          break;

        case "About":
          if (event.deltaY < 0) {
            console.log("scrolled up to Home");
            setOpened("Home");
          } else if (event.deltaY > 0) {
            console.log("scrolled down to Projects");
            setOpened("Projects");
          }
          break;

        case "Projects":
          if (event.deltaY < 0) {
            console.log("scrolled up to About");
            setOpened("About");
          } else if (event.deltaY > 0) {
            console.log("scrolled down to Testimonials");
            setOpened("Testimonials");
          }
          break;

        case "Testimonials":
          if (event.deltaY < 0) {
            console.log("scrolled up to Projects");
            setOpened("Projects");
          } else if (event.deltaY > 0) {
            console.log("scrolled down to Contact");
            setOpened("Contact");
          }
          break;

        case "Contact":
          if (event.deltaY < 0) {
            console.log("scrolled up to Testimonials");
            setOpened("Testimonials");
          }
          break;

        default:
          if (event.deltaY < 0) console.log("scrolled up from", opened);
          else if (event.deltaY > 0) console.log("scrolled down from", opened);
      }
      leading.current = false;
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      leading.current = true;
    }, waitTime);
  };

  return (
    <div
      id="portfolio"
      className={
        "absolute flex flex-col h-screen justify-content-center content-start flex-nowrap " +
        "text-black dark:text-white select-none "
      }
      onWheel={(event) => onScroll(event)}
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
