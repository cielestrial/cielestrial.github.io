import { useRef } from 'react';

import { sectionsArray } from '~/utils/dataConstants';
import { SectionsType } from '~/utils/dataTypes';
import { transitionClass } from '~/utils/gradientSelector';

export type NavType = {
  opened: SectionsType;
  setOpened: (section: SectionsType) => void;
};

export default function MyNavBar({ opened, setOpened }: NavType) {
  /*
  const prevOpened = useRef<SectionsType | null>(null);
  
  if (opened !== prevOpened.current) {
    document.getElementById(`${opened}Button`)?.focus();
    prevOpened.current = opened;
  }
  */

  return (
    <nav
      id="nav"
      // role="tablist"
      // aria-label="Profile. Bio. Philosophy."
      // aria-orientation="horizontal"
      className={
        'flex flex-row view-width gap-[0.7em] pt-[0.6em] px-[4vmin] ' +
        'items-center justify-center font-semibold drop-shadow-lg '
      }
    >
      {sectionsArray.map((section) => (
        <button
          key={`${section}Button`}
          id={`${section}Button`}
          //role="tab"
          //aria-controls="profileTab"
          //aria-selected={opened === section}
          className={
            'px-[0.3em] ' +
            transitionClass +
            (opened === section
              ? 'text-sky-700 underline underline-offset-[0.1em] '
              : 'hover:text-sky-500 hover:animate-pulse ')
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setOpened(section);
          }}
        >
          <h1>{section}</h1>
        </button>
      ))}
    </nav>
  );
}
