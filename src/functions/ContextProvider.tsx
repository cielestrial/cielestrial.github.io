import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const StateContext = createContext({} as stateContextType);

type stateContextType = {
  navigate: React.MutableRefObject<NavigateFunction>;
  theme: "light" | "dark";
  setAndSaveTheme: (selectedTheme: "light" | "dark") => void;
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

  return (
    <StateContext.Provider
      value={{
        navigate,
        theme,
        setAndSaveTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
