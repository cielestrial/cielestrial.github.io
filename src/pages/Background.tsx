import { useContextSelector } from '@fluentui/react-context-selector';
import { useCallback, useEffect, useRef } from 'react';
import { BsFillBucketFill } from 'react-icons/bs';

import DarkModeSvg from '../assets/svg/DarkModeSvg';
import LightModeSvg from '../assets/svg/LightModeSvg';
import { StateContext } from '../utils/ContextProvider';

import { maxScore, touchDevice } from '~/utils/dataConstants';
import { CoordinateType } from '~/utils/dataTypes';
import { catchParticles } from '~/utils/particleGames';

type PropsType = { children: React.ReactNode };

export default function Background({ children }: PropsType) {
  const theme = useContextSelector(StateContext, (state) => state.theme);
  const hideCursor = useContextSelector(
    StateContext,
    (state) => state.hideCursor
  );
  const score = useContextSelector(StateContext, (state) => state.score);
  const scoreRef = useContextSelector(StateContext, (state) => state.scoreRef);
  const highScore = useContextSelector(
    StateContext,
    (state) => state.highScore
  );
  const setScore = useContextSelector(StateContext, (state) => state.setScore);
  const setAndSaveHighScore = useContextSelector(
    StateContext,
    (state) => state.setAndSaveHighScore
  );

  const canRun = useRef(true);
  // const targetFPS = 60;
  // const timestep = 1000 / targetFPS;

  const mouse = useRef(document.getElementById('mouse-hitbox'));
  const boundaries = useRef(mouse.current?.getBoundingClientRect());
  const lastKnownPos = useRef<CoordinateType>({ x: 0, y: 0 });

  const gameloop = useCallback(() => {
    requestAnimationFrame(gameloop);
    if (boundaries.current !== undefined)
      catchParticles(
        boundaries.current,
        scoreRef,
        highScore,
        setScore,
        setAndSaveHighScore
      );
  }, [highScore, scoreRef, setAndSaveHighScore, setScore]);

  /**
   * Tracks the mouse position.
   * Sets the bucket to the mouse position.
   * Throttled and leading is enabled.
   * @param event Mouse event.
   * @returns Promise, empty.
   */
  async function trackMouse(event: React.MouseEvent) {
    lastKnownPos.current = { x: event.pageX, y: event.pageY };

    if (!canRun.current || touchDevice) return;
    canRun.current = false;
    requestAnimationFrame(() => {
      mouse.current = document.getElementById('mouse-hitbox');
      if (mouse.current !== null) {
        mouse.current.style.left = event.pageX + 'px';
        mouse.current.style.top = event.pageY + 'px';
        boundaries.current = mouse.current.getBoundingClientRect();
      }
      canRun.current = true;
    });
  }

  /**
   * Tracks touch locations.
   * Sets the bucket to the recent touch location.
   * Throttled and leading is enabled.
   * @param event Touch event.
   * @returns Promise, empty.
   */
  async function trackTouch(event: React.TouchEvent) {
    lastKnownPos.current = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };

    if (!canRun.current) return;
    canRun.current = false;
    requestAnimationFrame(() => {
      mouse.current = document.getElementById('mouse-hitbox');
      if (mouse.current !== null) {
        mouse.current.style.left = event.changedTouches[0].pageX + 'px';
        mouse.current.style.top = event.changedTouches[0].pageY + 'px';
        boundaries.current = mouse.current.getBoundingClientRect();
      }
      canRun.current = true;
    });
  }

  /**
   * Initializes the bucket at the last known mouse position
   *  or touch location.
   */
  const initializeAt = useCallback(() => {
    mouse.current = document.getElementById('mouse-hitbox');
    if (mouse.current !== null) {
      mouse.current.style.left = lastKnownPos.current.x + 'px';
      mouse.current.style.top = lastKnownPos.current.y + 'px';
      boundaries.current = mouse.current.getBoundingClientRect();
    }
  }, []);

  /**
   * Removes all visual effects and leftovers from the game mode,
   *  when switching back to the portfolio mode.
   */
  const cleanUp = useCallback(() => {
    mouse.current = null;
    boundaries.current = undefined;

    let yetToClean = document.getElementsByClassName('dirt');
    const totalStragglers = yetToClean.length;
    for (let i = 0; i < totalStragglers; i++) {
      yetToClean.item(0)?.remove();
      yetToClean = document.getElementsByClassName('dirt');
    }
  }, []);

  useEffect(() => {
    gameloop();
    return () => {
      canRun.current = true;
    };
  }, [gameloop]);

  useEffect(() => {
    if (hideCursor) initializeAt();
    else cleanUp();
  }, [cleanUp, hideCursor, initializeAt]);

  return (
    <div
      id="theBackground"
      className={
        'view-width view-height flex flex-col overflow-clip ' +
        'bg-linear-to-b from-[#F0FBFF] from-35% via-[#E7F5FF] via-65% to-[#A8B0BF] to-95% ' +
        (hideCursor ? 'cursor-none ' : 'cursor-default ')
      }
      onMouseMove={(event) => trackMouse(event)}
      onTouchMove={(event) => trackTouch(event)}
    >
      <div className="fixed bg-fog view-width view-height " />
      <BsFillBucketFill
        id="mouse-hitbox"
        className={
          'fixed w-fit h-fit text-[13.466vmin] sm:text-[10.125vmin] ' +
          'translate-x-[-50%] transform-gpu ' +
          (touchDevice ? 'translate-y-[-100%] ' : 'translate-y-[-50%] ') +
          (score < maxScore ? 'fill-slate-400 ' : 'fill-amber-300 ') +
          (!hideCursor ? 'hidden ' : '')
        }
      />
      {theme === 'dark' ? <DarkModeSvg /> : <LightModeSvg />}
      {children}
    </div>
  );
}
