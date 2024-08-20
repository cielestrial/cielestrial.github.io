import { useContextSelector } from '@fluentui/react-context-selector';
import { useEffect, useRef, useState } from 'react';

import { StateContext } from '~/utils/ContextProvider';
import { sectionsArray } from '~/utils/constants';
import { getContent } from '~/utils/helperFunctions';
import { sections } from '~/utils/types';

export type effectType = 'next' | 'prev' | 'none';

type propsType = { pageIn: sections; pageOut: sections | null };

export default function Carousel({ pageIn, pageOut }: propsType) {
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
  const [showPageOut, setShowPageOut] = useState(!!pageOut);
  const [prevPageIn, setPrevPageIn] = useState(pageIn);
  const pageInRef = useRef<HTMLDivElement>(null);
  const pageOutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollable(false);
  }, [setScrollable]);

  function getEffect(): effectType {
    if (!pageOut) return 'none';
    const pageInIndex = sectionsArray.findIndex(
      (section) => section === pageIn
    );
    const pageOutIndex = sectionsArray.findIndex(
      (section) => section === pageOut
    );
    return pageInIndex > pageOutIndex ? 'next' : 'prev';
  }

  const [effect, setEffect] = useState<effectType>(getEffect());
  if (pageIn !== prevPageIn) {
    if (pageInRef.current) {
      pageInRef.current.style.animation = 'none';
      pageInRef.current.offsetWidth.valueOf();
      pageInRef.current.style.animation = '';
    }
    if (pageOutRef.current) {
      pageOutRef.current.style.animation = 'none';
      pageOutRef.current.offsetWidth.valueOf();
      pageOutRef.current.style.animation = '';
    }
    setShowPageOut(true);
    setEffect(getEffect());
    setPrevPageIn(pageIn);
  }

  return (
    <div
      className={
        'flex-1 flex-col relative ' + (hideContent ? 'invisible ' : '')
      }
    >
      <div
        id="pageOut"
        ref={pageOutRef}
        className={
          'absolute w-full h-full ' +
          // "bg-red-500 " +
          (!showPageOut ? 'invisible ' : '') +
          (scrollable ? 'overflow-auto ' : 'overflow-clip ') +
          (effect === 'prev'
            ? 'animate-fade-out-down '
            : effect === 'next'
              ? 'animate-fade-out-up '
              : '')
        }
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) {
            setEffect('none');
            setShowPageOut(false);
          }
        }}
      >
        {getContent(pageOut, false)}
      </div>

      <div
        id="pageIn"
        ref={pageInRef}
        className={
          'absolute w-full h-full ' +
          // "bg-blue-500 " +
          (scrollable ? 'overflow-auto ' : 'overflow-clip ') +
          (effect === 'prev'
            ? 'animate-fade-in-up '
            : effect === 'next'
              ? 'animate-fade-in-down '
              : '')
        }
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) {
            if (pageIn !== 'About' && pageIn !== 'Projects')
              setScrollable(true);
          }
        }}
      >
        {getContent(pageIn, true)}
      </div>
    </div>
  );
}
