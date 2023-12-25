import { useContext, useRef, useState } from "react";
import Bio from "~/components/about/Bio";
import Philosophy from "~/components/about/Philosophy";
import Profile from "~/components/about/Profile";
import { aboutTabs, StateContext } from "~/utils/ContextProvider";
import { trapScroll } from "~/utils/helperFunctions";

const About = () => {
  const context = useContext(StateContext);
  const [opened, setOpenedState] = useState<aboutTabs>(
    context.aboutOpenedRef.current
  );
  const [snap, setSnap] = useState(false);
  const scrollPos = useRef<HTMLDivElement>(null);
  const scrollBoundHit = useRef(false);

  const btnClasses =
    "w-[28vmin] h-fit p-[2vmin] title font-medium origin-bottom " +
    "shadow-md transition duration-75 custom-ease-out ";

  /**
   * Sets which about section tab is opened.
   * @param tab The tab label.
   */
  function setOpened(tab: aboutTabs) {
    requestAnimationFrame(() => {
      context.aboutOpenedRef.current = tab;
      setOpenedState(tab);
    });
  }

  /**
   * Displays tab content.
   * @returns JSX Element, the tab content.
   */
  function displaySection() {
    switch (context.aboutOpenedRef.current) {
      case "Profile":
        return <Profile />;
      case "Bio":
        return <Bio />;
      case "Philosophy":
        return <Philosophy />;
    }
  }

  return (
    <div className={"h-full w-full overflow-clip flex flex-col content-start "}>
      <div
        role="tablist"
        aria-label="Profile. Bio. Philosophy."
        aria-orientation="horizontal"
        className={"flex flex-row mx-auto py-[4vh] divide-x-[0.5vmin] "}
      >
        <button
          id="profileButton"
          role="tab"
          aria-controls="profileTab"
          aria-selected={opened === "Profile"}
          className={
            btnClasses +
            "rounded-l-full " +
            (opened === "Profile"
              ? "bg-slate-500 "
              : "bg-slate-300 hover:bg-slate-400 ")
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setSnap(false);
            scrollPos.current?.scrollTo(0, 0);
            setOpened("Profile");
          }}
        >
          Profile
        </button>

        <button
          id="bioButton"
          role="tab"
          aria-controls="bioTab"
          aria-selected={opened === "Bio"}
          className={
            btnClasses +
            (opened === "Bio"
              ? "bg-slate-500 "
              : "bg-slate-300 hover:bg-slate-400 ")
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setSnap(false);
            scrollPos.current?.scrollTo(0, 0);
            setOpened("Bio");
          }}
        >
          Bio
        </button>

        <button
          id="philosophyButton"
          role="tab"
          aria-controls="philosophyTab"
          aria-selected={opened === "Philosophy"}
          className={
            btnClasses +
            "rounded-r-full " +
            (opened === "Philosophy"
              ? "bg-slate-500 "
              : "bg-slate-300 hover:bg-slate-400 ")
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setSnap(false);
            scrollPos.current?.scrollTo(0, 0);
            setOpened("Philosophy");
          }}
        >
          Philosophy
        </button>
      </div>

      <div
        ref={scrollPos}
        tabIndex={0}
        className={
          "w-full flex flex-col overflow-auto scroll-smooth pb-[    3vh] " +
          (snap ? "snap-x snap-mandatory " : "")
        }
        onAnimationEnd={() => setSnap(true)}
        onScroll={context.touchStartReset}
        onWheel={(event) => trapScroll(event, scrollBoundHit)}
      >
        {displaySection()}
      </div>
    </div>
  );
};

export default About;
