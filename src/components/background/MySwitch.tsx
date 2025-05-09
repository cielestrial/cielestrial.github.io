import { useContextSelector } from '@fluentui/react-context-selector';
import { useCallback } from 'react';
import { BsCloudSun, BsFillMoonStarsFill } from 'react-icons/bs';

import { StateContext } from '~/utils/ContextProvider';
import { transitionClass } from '~/utils/gradientSelector';

type PropsType = { hide?: boolean };

export default function MySwitch({ hide = false }: PropsType) {
  const theme = useContextSelector(StateContext, (state) => state.theme);
  const setAndSaveTheme = useContextSelector(
    StateContext,
    (state) => state.setAndSaveTheme
  );
  const checked = theme === 'dark';
  const hidden = hide ? 'hidden ' : '';

  const toggle = useCallback(() => {
    if (checked) setAndSaveTheme('light');
    else setAndSaveTheme('dark');
  }, [checked, setAndSaveTheme]);

  return (
    <button
      role="switch"
      aria-label="Theme"
      aria-checked={checked}
      className={
        'flex border-4 rounded-full aspect-1/1 overflow-clip ' +
        'items-center-safe justify-center-safe bg-sky-300 border-gray-600 ' +
        'active:scale-95 dark:bg-gray-900 dark:border-gray-400 ' +
        transitionClass +
        hidden
      }
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ')
          if (event.repeat) event.preventDefault();
      }}
    >
      <div
        className={
          'flex rounded-full w-[1.5em] aspect-1/1 m-[0.15em] ' +
          'overflow-clip items-center-safe justify-center-safe ' +
          'border-2 border-gray-700 bg-white ' +
          'dark:border-gray-300 dark:bg-sky-700 ' +
          transitionClass
        }
      >
        <span
          className={
            'text-[0.85em] text-black/90 dark:text-[0.75em] dark:text-white/90 ' +
            transitionClass
          }
        >
          {checked ? <BsFillMoonStarsFill /> : <BsCloudSun />}
        </span>
      </div>
    </button>
  );
}
