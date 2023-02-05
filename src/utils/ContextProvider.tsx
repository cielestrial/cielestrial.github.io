import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

export const StateContext = createContext({} as stateContextType);

export type stateContextType = {
  debugMode: React.MutableRefObject<boolean>;
  navigate: React.MutableRefObject<NavigateFunction>;
  theme: "light" | "dark";
  setAndSaveTheme: (selectedTheme: "light" | "dark") => void;
  hideCursor: boolean;
  setHideCursor: React.Dispatch<React.SetStateAction<boolean>>;
  hideContent: boolean;
  setHideContent: React.Dispatch<React.SetStateAction<boolean>>;
  scrollable: boolean;
  setScrollable: React.Dispatch<React.SetStateAction<boolean>>;
  scoreRef: React.MutableRefObject<number>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  highScore: number;
  maxScore: 99999;
  setAndSaveHighScore: (newScore: number) => void;
  aboutOpenedRef: React.MutableRefObject<aboutSections>;
};

export type aboutSections = "Profile" | "Bio" | "Philosophy";

type StateProviderProps = {
  children: React.ReactNode;
};

export function StateProvider({ children }: StateProviderProps) {
  const navigate = useRef(useNavigate());
  const params = useLocation();

  const debugMode = useRef(false);
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
  const [hideCursor, setHideCursor] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [scrollable, setScrollable] = useState(false);
  const maxScore = 99999;
  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);
  const localScore = window.localStorage.getItem("highScore");
  const [highScore, setHighScore] = useState(
    localScore === null ? 0 : +localScore
  );
  const aboutOpenedRef = useRef<aboutSections>("Profile");

  const setAndSaveHighScore = useCallback((newScore: number) => {
    if (newScore > maxScore) newScore = maxScore;
    setHighScore(newScore);
    window.localStorage.setItem("highScore", "" + newScore);
  }, []);

  const setAndSaveTheme = useCallback(
    (selectedTheme: "light" | "dark") => {
      /*
      setTheme(selectedTheme);
      if (selectedTheme === "dark")
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", selectedTheme);
      */
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
    /*
    // Set theme on page load
    if (
      window.localStorage.getItem("theme") === "dark" ||
      (window.localStorage.getItem("theme") === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    */
  }, []);

  useEffect(() => {
    if (score > 0) console.log("Splat!");
  }, [score]);

  return (
    <StateContext.Provider
      value={{
        debugMode,
        navigate,
        theme,
        hideCursor,
        setHideCursor,
        hideContent,
        setHideContent,
        scrollable,
        setScrollable,
        score,
        setScore,
        setAndSaveTheme,
        scoreRef,
        highScore,
        maxScore,
        setAndSaveHighScore,
        aboutOpenedRef,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
