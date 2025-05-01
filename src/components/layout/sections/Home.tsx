import { useState } from 'react';

import { season } from '~/utils/dataConstants';

function getSeasonBg() {
  switch (season) {
    case 'Winter':
      return 'bg-linear-to-b from-[#E1F5FF]/95 from-60% via-[#F0FBFF]/95 via-80% to-[#F0FBFF]/25 ';
    case 'Spring':
      return 'bg-linear-to-bl from-amber-200 to-slate-200 ';
    default:
      console.error('Invalid season');
      return '';
  }
}
const seasonBG = getSeasonBg();

type PropsType = { withEffect: boolean };

export default function Home(props: PropsType) {
  const [effect, setEffect] = useState<'fade-in' | 'none'>(
    props.withEffect ? 'fade-in' : 'none'
  );

  return (
    <div
      className={'flex flex-col h-full min-w-full w-max relative ' + seasonBG}
    >
      <div
        className={
          'flex h-full flex-col items-center-safe justify-center-safe ' +
          (effect === 'fade-in' ? 'animate-fade-in  ' : '')
        }
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) setEffect('none');
        }}
      >
        <div
          id="GraceHopperQuote"
          className={
            'w-fit h-fit p-[8vmin] font-bold title tracking-wider ' +
            'text-[6vmin] text-[#4d5258] -indent-[3vmin] '
          }
        >
          <blockquote className="quote ">
            <p className="inline ">The most damaging&#32;</p>
            <p className="indent-[0.22vmin] ">phrase in the language&#32;</p>
            <p className="inline ">
              is:&#32;
              <q className=" italic text-[#96060A] font-semibold ">
                <span>It's always been&#32;</span>
                <br />
                <span>done that way.</span>
              </q>
            </p>
          </blockquote>
          <p className="inline text italic text-[#182b38] pt-[1vmin] pl-[27.5vmin] ">
            - Grace Hopper
          </p>
        </div>
      </div>
    </div>
  );
}
