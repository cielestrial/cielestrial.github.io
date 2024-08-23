import { useContextSelector } from '@fluentui/react-context-selector';
import { useCallback, useEffect, useRef, useState } from 'react';

import { StateContext } from '../utils/ContextProvider';
import {
  exitProjectView,
  navigateAboutTabs,
  navigateSections,
  trapFocus
} from '../utils/helperFunctions';

import Carousel from '~/components/layout/Carousel';
import MyFooter from '~/components/nav/MyFooter';
import MyHeader from '~/components/nav/MyHeader';
import {
  deadzoneX,
  deadzoneY,
  leftArrowEvent,
  rightArrowEvent,
  sectionsArray,
  setTouchDevice,
  vMax,
  vMin
} from '~/utils/dataConstants';
import { CoordinateType, SectionsType } from '~/utils/dataTypes';
import { preloadImages } from '~/utils/imagePreloader';

const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
const arrowUpEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });

type PropsType = { section: SectionsType };

export default function Portfolio(props: PropsType) {
  const [, _setOpened] = useState<SectionsType>(props.section);
  const prevOpened = useRef<SectionsType | null>(null);
  const openedRef = useRef<SectionsType>(props.section);
  const timeout = useRef<NodeJS.Timeout>();
  const leading = useRef(true);
  const touchEnd = useRef<CoordinateType>({ x: -1, y: -1 });

  const hideContent = useContextSelector(
    StateContext,
    (state) => state.hideContent
  );
  const touchStart = useContextSelector(
    StateContext,
    (state) => state.touchStart
  );
  const aboutOpenedRef = useContextSelector(
    StateContext,
    (state) => state.aboutOpenedRef
  );
  const touchStartReset = useContextSelector(
    StateContext,
    (state) => state.touchStartReset
  );

  useEffect(() => {
    preloadImages();
  }, []);

  /**
   * Sets which accordion section is opened.
   * @param section The section label.
   */
  const setOpened = useCallback((section: SectionsType) => {
    prevOpened.current = openedRef.current;
    openedRef.current = section;
    _setOpened(section);
  }, []);

  /**
   * Navigates the accordion to the section specified in the URL.
   */
  const routeToSection = useCallback(() => {
    const hashRoute = window.location.hash;
    if (hashRoute !== '') {
      const route: any = hashRoute.replace('#', '');
      if (sectionsArray.includes(route) && route !== openedRef.current)
        setOpened(route);
      window.history.pushState(null, '', window.location.origin);
    }
  }, [setOpened]);

  /**
   * Navigates the accordion in response to a scroll event.
   * Navigation is throttled and leading is enabled.
   * @param event Wheel event.
   */
  const onScroll = useCallback(
    (event: React.WheelEvent) => {
      if (leading.current) {
        switch (openedRef.current) {
          case 'Home':
            if (event.deltaY > 0) setOpened('About');
            break;

          case 'About':
            if (event.deltaY < 0) setOpened('Home');
            else if (event.deltaY > 0) setOpened('Projects');
            break;

          case 'Projects':
            if (event.deltaY < 0) setOpened('About');
            else if (event.deltaY > 0) setOpened('Testimonials');
            break;

          case 'Testimonials':
            if (event.deltaY < 0) setOpened('Projects');
            else if (event.deltaY > 0) setOpened('Contact');
            break;

          case 'Contact':
            if (event.deltaY < 0) setOpened('Testimonials');
            break;
        }
        leading.current = false;

        timeout.current = setTimeout(() => {
          leading.current = true;
        }, 250);
      }
    },
    [setOpened]
  );

  /**
   * Main keyboard event handler.
   * Capture is true.
   * An additional keyboard event handler, where capture is false,
   *  can be found in the ProjectView component.
   * @param event Keyboard event.
   */
  const onArrowKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.repeat) return;
      exitProjectView(event, openedRef);
      trapFocus(event, openedRef);
      navigateSections(event, openedRef, setOpened);
      navigateAboutTabs(event, openedRef, aboutOpenedRef);
    },
    [aboutOpenedRef, setOpened]
  );

  useEffect(() => {
    routeToSection();
    window.addEventListener('hashchange', routeToSection);
    document.addEventListener('keydown', onArrowKey, { capture: true });
    return () => {
      window.removeEventListener('hashchange', routeToSection);
      document.removeEventListener('keydown', onArrowKey);
      clearTimeout(timeout.current);
      leading.current = true;
    };
  }, [routeToSection, onArrowKey]);

  return (
    <div
      aria-hidden="false"
      id="portfolio"
      className={
        'fixed flex flex-col justify-content-center content-start flex-nowrap ' +
        'text-black dark:text-white select-none view-width view-height ' +
        'text-[4vmin] sm:text-[3vmin] leading-snug '
      }
      onWheel={(event) => onScroll(event)}
      onTouchStart={(event) => {
        setTouchDevice(true);
        if (!hideContent)
          touchStart.current = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY
          };
        else touchStartReset();
      }}
      onTouchEnd={(event) => {
        if (
          !hideContent &&
          (touchStart.current.x !== -1 || touchStart.current.y !== -1)
        ) {
          touchEnd.current = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY
          };
          if (
            Math.abs(touchEnd.current.y - touchStart.current.y) >
            Math.abs(touchEnd.current.x - touchStart.current.x)
          ) {
            // Swipe up
            if (touchStart.current.y > touchEnd.current.y + deadzoneY * vMax)
              document.dispatchEvent(arrowDownEvent);
            // Swipe down
            else if (
              touchStart.current.y <
              touchEnd.current.y - deadzoneY * vMax
            )
              document.dispatchEvent(arrowUpEvent);
          } else if (
            Math.abs(touchEnd.current.y - touchStart.current.y) <
            Math.abs(touchEnd.current.x - touchStart.current.x)
          ) {
            // Swipe left
            if (touchStart.current.x > touchEnd.current.x + deadzoneX * vMin)
              document.dispatchEvent(rightArrowEvent);
            // Swipe right
            else if (
              touchStart.current.x <
              touchEnd.current.x - deadzoneX * vMin
            )
              document.dispatchEvent(leftArrowEvent);
          }
        }
      }}
      onTouchCancel={touchStartReset}
    >
      {/* Header */}
      <MyHeader opened={openedRef.current} setOpened={setOpened} />
      {/* Content */}
      <Carousel pageIn={openedRef.current} pageOut={prevOpened.current} />
      {/* Footer */}
      <MyFooter opened={openedRef.current} />
    </div>
  );
}
