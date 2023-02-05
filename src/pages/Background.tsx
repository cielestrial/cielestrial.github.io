import { useCallback, useContext, useEffect, useRef } from "react";
import { BsFillBucketFill } from "react-icons/bs";
import DarkModeSVG from "../assets/svg/DarkModeSVG";
import LightModeSVG from "../assets/svg/LightModeSVG";
import { StateContext } from "../utils/ContextProvider";
import { splatRaindrops } from "../utils/SplatRaindropsGame";

type propsType = {
  children: React.ReactNode;
};

const Background = (props: propsType) => {
  const context = useContext(StateContext);
  const timeout = useRef<NodeJS.Timeout>();
  const countdown = useRef<NodeJS.Timeout>();
  const timer = useRef<NodeJS.Timer>();
  const canRun = useRef(true);
  const targetFPS = 60;
  const timestep = 1000 / targetFPS;
  const gameStart = 3000;

  const mouse = useRef(document.getElementById("mouse-hitbox"));
  const boundaries = useRef(mouse.current?.getBoundingClientRect());

  async function trackMouse(event: MouseEvent) {
    if (!canRun.current) return;
    canRun.current = false;
    timeout.current = setTimeout(() => {
      mouse.current = document.getElementById("mouse-hitbox");
      boundaries.current = mouse.current?.getBoundingClientRect();

      if (mouse.current !== null && boundaries.current !== undefined) {
        mouse.current.style.left = event.pageX + "px";
        mouse.current.style.top = event.pageY + "px";
        boundaries.current = mouse.current?.getBoundingClientRect();
      }
      canRun.current = true;
    }, timestep);
  }

  const gamestep = useCallback(async () => {
    if (boundaries.current !== undefined)
      splatRaindrops(boundaries.current, context);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => trackMouse(event));
    timer.current = setInterval(gamestep, timestep);
    return () => {
      document.removeEventListener("mousemove", (event) => trackMouse(event));
      clearInterval(timer.current);
      clearTimeout(timeout.current);
    };
  }, []);

  useEffect(() => {
    if (context.hideCursor) {
      mouse.current = document.getElementById("mouse-hitbox");
      boundaries.current = mouse.current?.getBoundingClientRect();
    } else {
      mouse.current = null;
      boundaries.current = undefined;
      cleanUpPoints();
    }
  }, [context.hideCursor]);

  function cleanUpPoints() {
    let allPointDisplays = document.getElementsByClassName("points");
    const totalStragglers = allPointDisplays.length;
    for (let i = 0; i < totalStragglers; i++) {
      allPointDisplays.item(0)?.remove();
      allPointDisplays = document.getElementsByClassName("points");
    }
  }

  return (
    <div
      id="the background"
      className={
        "w-screen h-screen grid bg-image transform-gpu overflow-clip " +
        (context.hideCursor ? "cursor-none " : "cursor-default ")
      }
      onMouseDown={() => {
        clearTimeout(countdown.current);
        countdown.current = setTimeout(() => {
          context.setHideCursor(true);
          context.setHideContent(true);
        }, gameStart);
      }}
      onMouseUp={() => {
        clearTimeout(countdown.current);
        context.setHideCursor(false);
        context.setHideContent(false);
      }}
    >
      <div className="fixed bg-fog h-screen w-screen " />
      <BsFillBucketFill
        id="mouse-hitbox"
        className={
          "fixed w-fit h-fit text-[13.466vmin] sm:text-[10.125vmin] " +
          "translate-x-[-50%] translate-y-[-50%] " +
          (context.score < context.maxScore
            ? "fill-slate-400 "
            : "fill-amber-300 ") +
          (!context.hideCursor ? "hidden " : "")
        }
      />
      {context.theme === "dark" ? <DarkModeSVG /> : <LightModeSVG />}
      {props.children}
    </div>
  );
};

export default Background;
