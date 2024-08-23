import { useContextSelector } from '@fluentui/react-context-selector';
import { useEffect, useRef, useState } from 'react';

import { StateContext } from '~/utils/ContextProvider';
import { getSection } from '~/utils/SectionsManager';
import { clickEvent, season } from '~/utils/dataConstants';
import { SectionsType } from '~/utils/dataTypes';

type PropsType = {
  label: SectionsType;
  opened: SectionsType;
  setOpened: (section: SectionsType) => void;
};

export default function Accordion({ label, opened, setOpened }: PropsType) {
  const score = useContextSelector(StateContext, (state) => state.score);
  const highScore = useContextSelector(
    StateContext,
    (state) => state.highScore
  );
  const hideContent = useContextSelector(
    StateContext,
    (state) => state.hideContent
  );

  const scrollable = useContextSelector(
    StateContext,
    (state) => state.scrollable
  );
  const setScrollable = useContextSelector(
    StateContext,
    (state) => state.setScrollable
  );

  const openedRef = useRef(opened);
  const [effect, setEffect] = useState<
    'slide-up' | 'fade-in' | 'half-fade' | 'none'
  >('none');

  useEffect(() => {
    setScrollable(false);
    if (label === 'Home') setEffect('none');
    else if (label === 'About' || label === 'Contact') setEffect('slide-up');
    else setEffect('fade-in');
    openedRef.current = opened;
  }, [label, opened, setScrollable]);

  /**
   * Sets focus to a nearby element when a section is opened.
   */
  function setFocus() {
    switch (openedRef.current) {
      case 'Home':
        document.getElementById('GraceHopperQuote')?.focus();
        break;
      case 'About':
        document.getElementById('AboutSectionContent')?.focus();
        break;
      case 'Projects':
        document.getElementById('ProjectsSectionContent')?.focus();
        break;
      case 'Testimonials':
        document.getElementById('TestimonialsSectionContent')?.focus();
        break;
      case 'Contact':
        document.getElementById('ContactSectionContent')?.focus();
        break;
    }
  }

  /**
   * Adds gradient backgrounds to section labels.
   * @returns string, gradient values.
   */
  function displayGradient() {
    let gradient = '';

    switch (season) {
      case 'Winter':
        gradient = ''; // displayWinterGradient(label, opened);
        break;
      case 'Spring':
        gradient = ''; // displaySpringGradient(label, opened);
        break;
      default:
        console.error('Invalid season');
    }
    return gradient;
  }

  /**
   * Generates section labels.
   * Label passed in from parent.
   * @returns JSX Element, label to be displayed.
   */
  function displayLabel() {
    if (label === opened) return null;
    const gradient = displayGradient();
    return (
      <div
        id={label}
        role="button"
        aria-expanded={opened === label}
        aria-controls={label + 'Content'}
        tabIndex={0}
        className={
          'view-width font-bold drop-shadow-lg ' +
          'cursor-pointer grow blue-highlight flex ' +
          gradient
        }
        onKeyUp={(event) => {
          if (event.key === 'Enter' || event.key === ' ')
            event.currentTarget.dispatchEvent(clickEvent);
        }}
        onClick={(event) => {
          event.currentTarget.blur();
          setOpened(label);
        }}
      >
        <h1 className="m-auto ">{label}</h1>
      </div>
    );
  }

  /**
   * Displays section content.
   * Content passed in from parent.
   * @returns JSX Element, content to be displayed.
   */
  function displayContent() {
    if (opened === label)
      return (
        <div
          id={label + 'Content'}
          role="region"
          aria-label={label}
          tabIndex={-1}
          className={
            'flex h-3/4 flex-col flex-nowrap scroll-smooth ' +
            'blue-highlight focus:outline-none ' +
            (effect !== 'none' ? `animate-${effect} ` : '') +
            (scrollable ? 'overflow-auto ' : 'overflow-clip ') +
            (hideContent ? 'invisible ' : '')
          }
          onAnimationStart={(event) => {
            if (event.target === event.currentTarget) setFocus();
          }}
          onAnimationEnd={() => {
            setEffect('none');
            if (opened !== 'About' && opened !== 'Projects')
              setScrollable(true);
          }}
        >
          <div
            className={
              'absolute whitespace-nowrap m-[3vmin] ' +
              'title font-semibold text-[3.5vmin] sm:text-[2.625vmin] ' +
              (!hideContent ? 'invisible ' : 'visible ')
            }
          >
            <p className="inline text-slate-600 ">Hi-Score:&#32;</p>
            <p className="inline text-yellow-600 ">{highScore}</p>
            <br />
            <p className="inline text-slate-600 ">Score:&#32;</p>
            <p className="inline text-sky-500 ">{score}</p>
          </div>
          {getSection(label, true)}
        </div>
      );
    else return null;
  }

  return (
    <>
      {displayLabel()}
      {displayContent()}
    </>
  );
}
