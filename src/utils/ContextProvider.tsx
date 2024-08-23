import { createContext } from '@fluentui/react-context-selector';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { maxScore, season, setDebugMode } from './dataConstants';
import { AboutTabsType, CoordinateType, ThemeType } from './dataTypes';

type StateContextType = Readonly<{
  navigate: Readonly<React.MutableRefObject<NavigateFunction>>;
  aboutOpenedRef: React.MutableRefObject<AboutTabsType>;
  theme: Readonly<ThemeType>;
  setAndSaveTheme: (selectedTheme: ThemeType) => void;

  hideCursor: Readonly<boolean>;
  setHideCursor: React.Dispatch<React.SetStateAction<boolean>>;
  hideContent: Readonly<boolean>;
  setHideContent: (hide: boolean) => void;
  scrollable: Readonly<boolean>;
  setScrollable: React.Dispatch<React.SetStateAction<boolean>>;
  switchToBackground: () => void;
  switchToForeground: () => void;

  touchStart: React.MutableRefObject<CoordinateType>;
  /**Resets touchStart variable to default values.*/
  touchStartReset: () => void;

  scoreRef: Readonly<React.MutableRefObject<number>>;
  score: Readonly<number>;
  highScore: Readonly<number>;
  setScore: (newScore: number) => void;
  setAndSaveHighScore: (newScore: number) => void;
}>;

export const StateContext = createContext({} as StateContextType);

type StateProviderProps = { children: React.ReactNode };

export function StateProvider({ children }: StateProviderProps) {
  const navigate = useRef(useNavigate());
  const params = useLocation();
  const aboutOpenedRef = useRef<AboutTabsType>('Profile');

  function readTheme(): ThemeType {
    let localTheme: any = undefined;
    try {
      localTheme = window.localStorage.getItem('theme');
      return localTheme === 'dark' ||
        (!localTheme &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light';
    } catch (err) {
      console.error('Failed to read theme.', localTheme, err);
      return 'light';
    }
  }
  // read theme
  const [theme, setTheme] = useState<ThemeType>('light');

  const [hideCursor, setHideCursor] = useState(false);
  const [hideContent, _setHideContent] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const touchStart = useRef<CoordinateType>({ x: -1, y: -1 });

  const touchStartReset = useCallback(() => {
    touchStart.current = { x: -1, y: -1 };
  }, []);

  const setHideContent = useCallback(
    (hide: boolean) => {
      _setHideContent(hide);
      touchStartReset();
    },
    [touchStartReset]
  );

  const scoreRef = useRef(0);
  const [score, _setScore] = useState(0);
  const setScore = useCallback((newScore: number) => {
    scoreRef.current = newScore;
    _setScore(scoreRef.current);
  }, []);

  function readHighScore(): number {
    let localHighScore: any = undefined;
    try {
      localHighScore = window.localStorage.getItem('highScore');
      return Number(localHighScore ?? 0);
    } catch (err) {
      console.error(
        'Failed to read and convert highScore',
        localHighScore,
        err
      );
      return 0;
    }
  }
  const [highScore, setHighScore] = useState<number>(readHighScore());

  /**
   * Switches to game mode from portfolio mode.
   * Hides part of foreground.
   * Allows for interaction with the background.
   */
  const switchToBackground = useCallback(() => {
    setHideCursor(true);
    setHideContent(true);
  }, [setHideContent]);

  /**
   * Switches away from game mode back to portfolio mode.
   * Disables interaction with the background.
   * All foreground content is made visible again.
   */
  const switchToForeground = useCallback(() => {
    setHideCursor(false);
    setHideContent(false);
  }, [setHideContent]);

  const highScoreTimer = useRef<NodeJS.Timeout>();
  const setAndSaveHighScore = useCallback((newScore: number) => {
    if (newScore > maxScore) newScore = maxScore;
    setHighScore(newScore);

    clearTimeout(highScoreTimer.current);
    highScoreTimer.current = setTimeout(() => {
      window.localStorage.setItem('highScore', newScore.toString());
    }, 300);
  }, []);

  const themeTimer = useRef<NodeJS.Timeout>();
  const setAndSaveTheme = useCallback((selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
    if (selectedTheme === 'dark')
      document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    clearTimeout(themeTimer.current);
    themeTimer.current = setTimeout(() => {
      window.localStorage.setItem('theme', selectedTheme);
    }, 300);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(themeTimer.current);
      clearTimeout(highScoreTimer.current);
    },
    []
  );

  useEffect(() => {
    // Reset hi-score
    if (params.search.includes('?reset')) {
      setAndSaveHighScore(0);
      navigate.current('/');
    }
    setDebugMode(params.search.includes('?debug'));
  }, [params.search, setAndSaveHighScore]);

  useEffect(() => {
    if (score > 0) {
      switch (season) {
        case 'Winter':
          console.info('Plink.');
          break;
        case 'Spring':
          console.info('Splat!');
          break;
        default:
          console.error('Invalid season');
      }
    }
  }, [score]);

  const value: StateContextType = {
    navigate,
    aboutOpenedRef,
    theme,

    hideCursor,
    setHideCursor,
    hideContent,
    setHideContent,
    scrollable,
    setScrollable,
    switchToBackground,
    switchToForeground,

    touchStart,
    touchStartReset,

    score,
    setScore,
    setAndSaveTheme,
    scoreRef,
    highScore,
    setAndSaveHighScore
  };

  return <StateContext.Provider value={value} children={children} />;
}
