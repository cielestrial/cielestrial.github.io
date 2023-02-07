import { useContext, useEffect, useRef } from "react";
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

  async function trackMouse(event: React.PointerEvent) {
    event.preventDefault();
    if (!canRun.current) return;
    console.log(event.pointerId);
    canRun.current = false;
    timeout.current = setTimeout(() => {
      mouse.current = document.getElementById("mouse-hitbox");
      boundaries.current = mouse.current?.getBoundingClientRect();

      if (mouse.current !== null && boundaries.current !== undefined) {
        mouse.current.style.left = event.pageX + "px";
        mouse.current.style.top = event.pageY - event.height / 2 + "px";
        boundaries.current = mouse.current?.getBoundingClientRect();
      }
      canRun.current = true;
    }, timestep);
  }

  useEffect(() => {
    document.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
    timer.current = setInterval(async () => {
      if (boundaries.current !== undefined)
        splatRaindrops(boundaries.current, context);
    }, timestep);
    return () => {
      document.removeEventListener("touchmove", preventDefault);
      clearTimeout(countdown.current);
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
    let toClean = document.getElementsByClassName("clean");
    const totalStragglers = toClean.length;
    for (let i = 0; i < totalStragglers; i++) {
      toClean.item(0)?.remove();
      toClean = document.getElementsByClassName("clean");
    }
  }

  function preventDefault(event: Event) {
    event.preventDefault();
  }

  return (
    <div
      id="the background"
      className={
        "w-screen h-screen grid bg-image transform-gpu overflow-clip " +
        (context.hideCursor ? "cursor-none " : "cursor-default ")
      }
      // onPointerCancel={() => console.warn("Event canceled")}
      onPointerMove={trackMouse}
      onPointerDown={(event) => {
        clearTimeout(countdown.current);
        countdown.current = setTimeout(() => {
          context.setHideContent(true);
          context.setHideCursor(true);
        }, gameStart);
      }}
      onPointerUp={(event) => {
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
          "translate-x-[-50%] translate-y-[-100%] " +
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
