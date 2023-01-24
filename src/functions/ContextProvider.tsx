import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const StateContext = createContext({} as stateContextType);

export type stateContextType = {
  navigate: React.MutableRefObject<NavigateFunction>;
  theme: "light" | "dark";
  setAndSaveTheme: (selectedTheme: "light" | "dark") => void;
  scoreRef: React.MutableRefObject<number>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  highScore: number;
  setAndSaveHighScore: (newScore: number) => void;
};

type StateProviderProps = {
  children: React.ReactNode;
};

export function StateProvider({ children }: StateProviderProps) {
  const navigate = useRef(useNavigate());
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

  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);
  const localScore = window.localStorage.getItem("highScore");
  const [highScore, setHighScore] = useState(
    localScore === null ? 0 : +localScore
  );

  useEffect(() => {
    /*
    if (
      window.localStorage.getItem("theme") === "dark" ||
      (window.localStorage.getItem("theme") === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    */
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

  const setAndSaveHighScore = useCallback((newScore: number) => {
    setHighScore(newScore);
    window.localStorage.setItem("highScore", "" + newScore);
  }, []);

  useEffect(() => {
    console.log("Splat!", "\nScore:", score, "\nHigh Score:", highScore);
  }, [score]);

  return (
    <StateContext.Provider
      value={{
        navigate,
        theme,
        score,
        setScore,
        setAndSaveTheme,
        scoreRef,
        highScore,
        setAndSaveHighScore,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
