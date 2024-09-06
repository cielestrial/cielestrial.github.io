import { useEffect, useRef, useState } from 'react';

import MyNavBar, { NavType } from './MyNavBar';
import WidgetBar from './WidgetBar';

import { season } from '~/utils/dataConstants';
import { SectionsType } from '~/utils/dataTypes';
import { getWinterNavGradient } from '~/utils/gradientSelector';

export default function MyHeader({ opened, setOpened }: NavType) {
  const [seasonBg, setSeasonBg] = useState(() => getWinterNavGradient('Home'));
  const timer = useRef<NodeJS.Timeout>();
  const prevOpened = useRef<SectionsType | null>(null);

  if (opened !== prevOpened.current) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      switch (season) {
        case 'Winter':
          setSeasonBg(getWinterNavGradient(opened));
          break;
        case 'Spring':
          setSeasonBg('bg-gradient-to-bl from-amber-200 to-slate-200 ');
          break;
        default:
          console.error('Invalid season');
      }
    }, 250);
    prevOpened.current = opened;
  }

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    []
  );

  return (
    <header className={'z-10 ' + seasonBg}>
      <MyNavBar opened={opened} setOpened={setOpened} />
      <WidgetBar />
    </header>
  );
}
