import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

export const StateContext = createContext({} as stateContextType);

export type stateContextType = {
  navigate: React.MutableRefObject<NavigateFunction>;
  aboutOpenedRef: React.MutableRefObject<aboutTabs>;
  /**Displays hitbox during game mode.*/
  debugMode: React.MutableRefObject<boolean>;
  theme: "light" | "dark";
  setAndSaveTheme: (selectedTheme: "light" | "dark") => void;
  season: seasonT;

  hideCursor: boolean;
  setHideCursor: React.Dispatch<React.SetStateAction<boolean>>;
  hideContent: boolean;
  setHideContent: React.Dispatch<React.SetStateAction<boolean>>;
  scrollable: boolean;
  setScrollable: React.Dispatch<React.SetStateAction<boolean>>;
  switchToBackground: () => void;
  switchToForeground: () => void;

  touchStart: React.MutableRefObject<coordinate>;
  touchEnd: React.MutableRefObject<coordinate>;
  /**Resets touchStart variable to default values.*/
  touchStartReset(): void;
  deadzoneX: number;
  deadzoneY: number;
  vmax: number;
  vmin: number;

  scoreRef: React.MutableRefObject<number>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  highScore: number;
  maxScore: 99999;
  setAndSaveHighScore: (newScore: number) => void;

  clickEvent: MouseEvent;
  leftArrowEvent: KeyboardEvent;
  rightArrowEvent: KeyboardEvent;
  /**Whether the current device being used is a touch device.*/
  touchDevice: React.MutableRefObject<boolean>;
};

export type aboutTabs = "Profile" | "Bio" | "Philosophy";
export type coordinate = { x: number; y: number };

const seasons = ["Winter", "Spring", "Summer", "Fall"] as const;
export type seasonT = (typeof seasons)[number];

type StateProviderProps = {
  children: React.ReactNode;
};

export function StateProvider({ children }: StateProviderProps) {
  const navigate = useRef(useNavigate());
  const params = useLocation();
  const aboutOpenedRef = useRef<aboutTabs>("Profile");

  let season: seasonT;
  const envSeason: any = import.meta.env.VITE_SEASON;
  if (envSeason !== undefined && seasons.includes(envSeason))
    season = envSeason;
  else season = "Spring";

  const [theme, setTheme] = useState<"light" | "dark">(
    "light"
    /*
    window.localStorage.getItem("theme") === "dark" ||
    (window.localStorage.getItem("theme") === null &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light"
    */
  );

  const debugMode = useRef(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const touchStart = useRef<coordinate>({ x: -1, y: -1 });
  const touchEnd = useRef<coordinate>({ x: -1, y: -1 });
  const deadzoneX = 0.05;
  const deadzoneY = 0.1;
  const vmax = Math.max(window.outerHeight, window.outerWidth);
  const vmin = Math.min(window.outerHeight, window.outerWidth);

  const maxScore = 99999;
  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);
  const localScore = window.localStorage.getItem("highScore");
  const [highScore, setHighScore] = useState(
    localScore === null ? 0 : +localScore
  );

  const clickEvent = new MouseEvent("click", { bubbles: true });
  const leftArrowEvent = new KeyboardEvent("keydown", {
    key: "ArrowLeft",
    bubbles: true,
  });
  const rightArrowEvent = new KeyboardEvent("keydown", {
    key: "ArrowRight",
    bubbles: true,
  });
  const touchDevice = useRef(false);

  /**
   * Switches to game mode from portfolio mode.
   * Hides part of foreground.
   * Allows for interaction with the background.
   */
  const switchToBackground = useCallback(() => {
    setHideCursor(true);
    setHideContent(true);
  }, []);

  /**
   * Switches away from game mode back to portfolio mode.
   * Disables interaction with the background.
   * All foreground content is made visible again.
   */
  const switchToForeground = useCallback(() => {
    setHideCursor(false);
    setHideContent(false);
  }, []);

  const setAndSaveHighScore = useCallback((newScore: number) => {
    if (newScore > maxScore) newScore = maxScore;
    setHighScore(newScore);
    window.localStorage.setItem("highScore", "" + newScore);
  }, []);

  const setAndSaveTheme = useCallback(
    (selectedTheme: "light" | "dark") => {
      setTheme(selectedTheme);
      if (selectedTheme === "dark")
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", selectedTheme);
    },
    [theme]
  );

  useEffect(() => {
    // Reset hi-score
    if (params.search.includes("?reset")) {
      setAndSaveHighScore(0);
      navigate.current("/");
    }
    if (params.search.includes("?debug")) debugMode.current = true;
    else debugMode.current = false;

    // Set theme on page load
    if (
      window.localStorage.getItem("theme") === "dark" ||
      (window.localStorage.getItem("theme") === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    if (score > 0) {
      switch (season) {
        case "Winter":
          console.info("Plink.");
          break;
        case "Spring":
          console.info("Splat!");
          break;
        default:
          console.error("Invalid season");
      }
    }
  }, [score]);

  useEffect(() => {
    touchStartReset();
  }, [hideContent]);

  function touchStartReset() {
    touchStart.current = { x: -1, y: -1 };
  }

  return (
    <StateContext.Provider
      value={{
        debugMode,
        navigate,
        aboutOpenedRef,
        theme,
        season,

        hideCursor,
        setHideCursor,
        hideContent,
        setHideContent,
        scrollable,
        setScrollable,
        switchToBackground,
        switchToForeground,

        touchStart,
        touchEnd,
        touchStartReset,
        deadzoneX,
        deadzoneY,
        vmax,
        vmin,

        score,
        setScore,
        setAndSaveTheme,
        scoreRef,
        highScore,
        maxScore,
        setAndSaveHighScore,

        clickEvent,
        leftArrowEvent,
        rightArrowEvent,
        touchDevice,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
