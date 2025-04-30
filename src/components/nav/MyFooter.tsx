import { useEffect, useRef, useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { season } from '~/utils/dataConstants';
import { SectionsType } from '~/utils/dataTypes';
import {
  getWinterFootGradient,
  transitionClass
} from '~/utils/gradientSelectors';

type PropsType = { opened: SectionsType };

export default function MyFooter({ opened }: PropsType) {
  const iconSize = '1.5em';
  const link =
    'p-0.5 rounded active:scale-95 hover:animate-pulse ' + transitionClass;

  const [seasonBg, setSeasonBg] = useState(() => getWinterFootGradient('Home'));
  const timer = useRef<NodeJS.Timeout>();
  const prevOpened = useRef<SectionsType | null>(null);

  if (opened !== prevOpened.current) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      switch (season) {
        case 'Winter':
          setSeasonBg(getWinterFootGradient(opened));
          break;
        case 'Spring':
          setSeasonBg('bg-linear-to-bl from-amber-200 to-slate-200 ');
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
    <footer
      id="footer"
      className={
        'h-fit w-full select-none pt-[0.6em] pb-[0.4em] px-[4vmin] z-10 ' +
        seasonBg
      }
    >
      <div
        className={
          'my-auto w-full flex flex-wrap justify-evenly ' +
          'gap-y-[0.2em] gap-x-[1.3em] '
        }
      >
        <div className="flex my-auto gap-y-[0.2em] gap-x-[0.7em]">
          <a
            aria-label="My LinkedIn profile"
            href="https://www.linkedin.com/in/cielestrial"
            target="_blank"
            rel="noopener author"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            <SiLinkedin
              className="rounded text-[#0864c0] dark:text-white/90 transition"
              size={iconSize}
            />
          </a>
          <a
            aria-label="My Github profile"
            href="https://github.com/cielestrial"
            target="_blank"
            rel="noopener author"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            <SiGithub className="rounded-full" size={iconSize} />
          </a>
        </div>

        <div
          className={
            'flex flex-wrap my-auto justify-center-safe underline ' +
            'gap-y-[0.2em] gap-x-[0.7em] '
          }
        >
          <a
            href="https://www.termsfeed.com/live/91af4718-4dfa-4687-b1ba-ff85be757264"
            target="_blank"
            rel="noopener terms-of-service"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            Terms & Conditions
          </a>
          <a
            id="finalTab"
            href="https://www.termsfeed.com/live/8e058f94-0ced-4abb-a59d-94ae2f7f2337"
            target="_blank"
            rel="noopener privacy-policy"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            Privacy Policy
          </a>
        </div>

        <div className="my-auto p-0.5">
          Copyright &copy; 2023 &#124; cielestrial
        </div>
      </div>
    </footer>
  );
}
