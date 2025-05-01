import { useContextSelector } from '@fluentui/react-context-selector';
import { useRef, useState } from 'react';

import Bio from '~/components/about/Bio';
import Philosophy from '~/components/about/Philosophy';
import Profile from '~/components/about/Profile';
import { StateContext } from '~/utils/ContextProvider';
import { AboutTabsType } from '~/utils/dataTypes';
import { transitionClass } from '~/utils/gradientSelectors';
import { trapScroll } from '~/utils/helperFunctions';

type PropsType = { withEffect: boolean };

export default function About({ withEffect }: PropsType) {
  const aboutOpenedRef = useContextSelector(
    StateContext,
    (state) => state.aboutOpenedRef
  );
  const touchStartReset = useContextSelector(
    StateContext,
    (state) => state.touchStartReset
  );
  const [opened, setOpenedState] = useState<AboutTabsType>(
    aboutOpenedRef.current
  );
  const [snap, setSnap] = useState(false);
  const scrollPos = useRef<HTMLDivElement>(null);
  const scrollBoundHit = useRef(false);

  const btnClasses =
    'w-[28vmin] h-fit p-[2vmin] title font-medium origin-bottom shadow-md ' +
    transitionClass;

  /**
   * Sets which about section tab is opened.
   * @param tab The tab label.
   */
  function setOpened(tab: AboutTabsType) {
    requestAnimationFrame(() => {
      aboutOpenedRef.current = tab;
      setOpenedState(tab);
    });
  }

  /**
   * Displays tab content.
   * @returns JSX Element, the tab content.
   */
  function displaySection() {
    switch (aboutOpenedRef.current) {
      case 'Profile':
        return <Profile initialEffect={withEffect ? 'fade-in' : 'none'} />;
      case 'Bio':
        return <Bio initialEffect={withEffect ? 'fade-in' : 'none'} />;
      case 'Philosophy':
        return <Philosophy initialEffect={withEffect ? 'fade-in' : 'none'} />;
    }
  }

  return (
    <div className="h-full w-full overflow-clip flex flex-col content-start py-8 ">
      <div
        role="tablist"
        aria-label="Profile. Bio. Philosophy."
        aria-orientation="horizontal"
        className="flex flex-row mx-auto pb-8 divide-x-[0.5vmin] "
      >
        <button
          id="profileButton"
          role="tab"
          aria-controls="profileTab"
          aria-selected={opened === 'Profile'}
          className={
            btnClasses +
            'rounded-l-full ' +
            (opened === 'Profile'
              ? 'bg-slate-500 '
              : 'bg-slate-300 hover:bg-slate-400 ')
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setSnap(false);
            scrollPos.current?.scrollTo(0, 0);
            setOpened('Profile');
          }}
        >
          Profile
        </button>

        <button
          id="bioButton"
          role="tab"
          aria-controls="bioTab"
          aria-selected={opened === 'Bio'}
          className={
            btnClasses +
            (opened === 'Bio'
              ? 'bg-slate-500 '
              : 'bg-slate-300 hover:bg-slate-400 ')
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setSnap(false);
            scrollPos.current?.scrollTo(0, 0);
            setOpened('Bio');
          }}
        >
          Bio
        </button>

        <button
          id="philosophyButton"
          role="tab"
          aria-controls="philosophyTab"
          aria-selected={opened === 'Philosophy'}
          className={
            btnClasses +
            'rounded-r-full ' +
            (opened === 'Philosophy'
              ? 'bg-slate-500 '
              : 'bg-slate-300 hover:bg-slate-400 ')
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setSnap(false);
            scrollPos.current?.scrollTo(0, 0);
            setOpened('Philosophy');
          }}
        >
          Philosophy
        </button>
      </div>

      <div
        ref={scrollPos}
        className={
          'w-full flex flex-col overflow-auto scroll-smooth pb-[3vh] h-full ' +
          (snap ? 'snap-x snap-mandatory ' : '')
        }
        onAnimationEnd={() => setSnap(true)}
        onScroll={touchStartReset}
        onWheel={(event) => trapScroll(event, scrollBoundHit)}
      >
        {displaySection()}
      </div>
    </div>
  );
}
