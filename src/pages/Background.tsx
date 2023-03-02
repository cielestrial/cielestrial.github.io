import { useContext, useEffect, useRef } from "react";
import { BsFillBucketFill } from "react-icons/bs";
import DarkModeSVG from "../assets/svg/DarkModeSVG";
import LightModeSVG from "../assets/svg/LightModeSVG";
import { coordinate, StateContext } from "../utils/ContextProvider";
import { splatRaindrops } from "../utils/SplatRaindropsGame";

type propsType = {
  children: React.ReactNode;
};

const Background = (props: propsType) => {
  const context = useContext(StateContext);
  const timeout = useRef<NodeJS.Timeout>();
  const timer = useRef<NodeJS.Timer>();
  const canRun = useRef(true);
  const targetFPS = 60;
  const timestep = 1000 / targetFPS;
  const gameStart = 2000;

  const mouse = useRef(document.getElementById("mouse-hitbox"));
  const boundaries = useRef(mouse.current?.getBoundingClientRect());
  const lastKnownPos = useRef<coordinate>({ x: 0, y: 0 });

  async function trackMouse(event: React.MouseEvent) {
    //event.stopPropagation();
    lastKnownPos.current = { x: event.pageX, y: event.pageY };

    if (!canRun.current || context.touchDevice.current) return;
    canRun.current = false;
    timeout.current = setTimeout(() => {
      mouse.current = document.getElementById("mouse-hitbox");
      if (mouse.current !== null) {
        mouse.current.style.left = event.pageX + "px";
        mouse.current.style.top = event.pageY + "px";
        boundaries.current = mouse.current.getBoundingClientRect();
      }
      canRun.current = true;
    }, timestep);
  }

  async function trackTouch(event: React.TouchEvent) {
    //event.stopPropagation();
    lastKnownPos.current = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY,
    };

    if (!canRun.current) return;
    canRun.current = false;
    timeout.current = setTimeout(() => {
      mouse.current = document.getElementById("mouse-hitbox");
      if (mouse.current !== null) {
        mouse.current.style.left = event.changedTouches[0].pageX + "px";
        mouse.current.style.top = event.changedTouches[0].pageY + "px";
        boundaries.current = mouse.current.getBoundingClientRect();
      }
      canRun.current = true;
    }, timestep);
  }

  useEffect(() => {
    timer.current = setInterval(async () => {
      if (boundaries.current !== undefined)
        splatRaindrops(boundaries.current, context);
    }, timestep);
    return () => {
      clearTimeout(context.countdownToGameStart.current);
      clearInterval(timer.current);
      clearTimeout(timeout.current);
      canRun.current = true;
    };
  }, []);

  function initializeAt() {
    mouse.current = document.getElementById("mouse-hitbox");
    if (mouse.current !== null) {
      mouse.current.style.left = lastKnownPos.current.x + "px";
      mouse.current.style.top = lastKnownPos.current.y + "px";
      boundaries.current = mouse.current.getBoundingClientRect();
    }
  }

  function cleanUp() {
    mouse.current = null;
    boundaries.current = undefined;

    let yetToClean = document.getElementsByClassName("dirt");
    const totalStragglers = yetToClean.length;
    for (let i = 0; i < totalStragglers; i++) {
      yetToClean.item(0)?.remove();
      yetToClean = document.getElementsByClassName("dirt");
    }
  }

  function switchToBackground() {
    clearTimeout(context.countdownToGameStart.current);
    context.countdownToGameStart.current = setTimeout(() => {
      context.setHideCursor(true);
      context.setHideContent(true);
      initializeAt();
    }, gameStart);
  }

  function switchToForeground() {
    clearTimeout(context.countdownToGameStart.current);
    context.setHideCursor(false);
    cleanUp();
    context.setHideContent(false);
  }

  return (
    <div
      id="the background"
      role="presentation"
      className={
        "view-width view-height flex flex-col bg-image transform-gpu overflow-clip " +
        (context.hideCursor ? "cursor-none " : "cursor-default ")
      }
      onMouseDown={(event) => {
        if (!context.touchDevice.current) {
          lastKnownPos.current = { x: event.pageX, y: event.pageY };
          switchToBackground();
        }
      }}
      onMouseMove={(event) => trackMouse(event)}
      onMouseUp={() => {
        if (!context.touchDevice.current) switchToForeground();
      }}
      onTouchStart={(event) => {
        context.touchDevice.current = true;
        lastKnownPos.current = {
          x: event.changedTouches[0].pageX,
          y: event.changedTouches[0].pageY,
        };
        switchToBackground();
      }}
      onTouchMove={(event) => trackTouch(event)}
      onTouchEnd={switchToForeground}
      onTouchCancel={() => {
        console.warn("Touch event canceled");
        clearTimeout(context.countdownToGameStart.current);
      }}
    >
      <div className="fixed bg-fog view-width view-height " />
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
