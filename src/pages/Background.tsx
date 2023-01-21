import { useContext, useEffect, useRef, useState } from "react";
import DarkModeSVG from "../assets/DarkModeSVG";
import LightModeSVG from "../assets/LightModeSVG";
import { StateContext } from "../functions/ContextProvider";
import { splatRaindrops } from "../functions/SplatRaindropsGame";
import { BsFillBucketFill } from "react-icons/bs";

type propsType = {
  children: React.ReactNode;
};

const Background = (props: propsType) => {
  const context = useContext(StateContext);
  const [hideCursor, setHideCursor] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const timer = useRef<NodeJS.Timer>();
  const canRun = useRef(true);
  const waitTime = 25;
  const targetFPS = 5;
  const timestep = 1000 / targetFPS;

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
    }, waitTime);
  }

  useEffect(() => {
    document.addEventListener("mousemove", (event) => trackMouse(event));
    timer.current = setInterval(() => {
      if (boundaries.current !== undefined) splatRaindrops(boundaries.current);
    }, timestep);
    return () => {
      document.removeEventListener("mousemove", (event) => trackMouse(event));
      clearInterval(timer.current);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div
      className={
        "w-screen h-screen grid bg-no-repeat bg-white " +
        (hideCursor ? "cursor-none " : "cursor-default ")
        //"bg-gradient-to-r from-sky-400 via-yellow-400 to-blue-600 "
      }
      onMouseDown={() => setHideCursor(true)}
      onMouseUp={() => setHideCursor(false)}
    >
      <BsFillBucketFill
        id="mouse-hitbox"
        className={
          "absolute fill-slate-400 w-fit h-fit text-7xl translate-x-[-50%] translate-y-[-50%] " +
          (!hideCursor ? "hidden " : "")
        }
      />
      {context.theme === "dark" ? <DarkModeSVG /> : <LightModeSVG />}
      {props.children}
    </div>
  );
};

export default Background;
