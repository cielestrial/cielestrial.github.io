import { useContext, useRef, useState } from "react";
import Bio from "../components/about/Bio";
import Philosophy from "../components/about/Philosophy";
import Profile from "../components/about/Profile";
import { aboutSections, StateContext } from "../utils/ContextProvider";

const About = () => {
  const context = useContext(StateContext);
  const [opened, setOpenedState] = useState<aboutSections>(
    context.aboutOpenedRef.current
  );
  const [snap, setSnap] = useState(false);
  const scrollPos = useRef<HTMLDivElement>(null);

  const btnClasses =
    "w-[28vmin] h-fit p-[2vmin] title font-medium origin-bottom " +
    "drop-shadow-lg transition-all duration-75 custom-ease-out ";

  function setOpened(section: aboutSections) {
    context.aboutOpenedRef.current = section;
    setOpenedState(section);
  }

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
        className={
          "flex flex-row mx-auto py-[4vh] divide-x-[0.5vmin] divide-slate-300 "
        }
      >
        <button
          id="Profile Button"
          role="tab"
          aria-controls="profileTab"
          aria-selected={opened === "Profile"}
          className={
            btnClasses +
            "rounded-l-full " +
            (opened === "Profile"
              ? "bg-slate-400 "
              : "bg-slate-200 hover:bg-slate-300 ")
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
          id="Bio Button"
          role="tab"
          aria-controls="bioTab"
          aria-selected={opened === "Bio"}
          className={
            btnClasses +
            (opened === "Bio"
              ? "bg-slate-400 "
              : "bg-slate-200 hover:bg-slate-300 ")
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
          id="Philosophy Button"
          role="tab"
          aria-controls="philosophyTab"
          aria-selected={opened === "Philosophy"}
          className={
            btnClasses +
            "rounded-r-full " +
            (opened === "Philosophy"
              ? "bg-slate-400 "
              : "bg-slate-200 hover:bg-slate-300 ")
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
          "w-full flex flex-col overflow-auto scroll-smooth pb-[3vh] " +
          (snap ? "snap-x snap-mandatory " : "")
        }
        onAnimationEnd={() => setSnap(true)}
        onScroll={() => {
          clearTimeout(context.countdownToGameStart.current);
          context.touchStartReset;
        }}
        onTouchMove={(event) => {
          // Conditional on there being overflow
          if (
            !(
              event.currentTarget.offsetHeight ===
                event.currentTarget.scrollHeight &&
              event.currentTarget.offsetWidth ===
                event.currentTarget.scrollWidth
            )
          )
            clearTimeout(context.countdownToGameStart.current);
        }}
        onWheel={(event) => {
          if (
            !(
              (Math.round(event.currentTarget.scrollTop) === 0 &&
                event.deltaY < 0) ||
              (Math.round(event.currentTarget.scrollTop + 1) +
                event.currentTarget.offsetHeight >=
                event.currentTarget.scrollHeight &&
                event.deltaY > 0)
            )
          )
            event.stopPropagation();
        }}
        /*
        onClick={(event) => {
          console.log(
            "Height:",
            Math.round(event.currentTarget.scrollTop),
            event.currentTarget.offsetHeight,
            event.currentTarget.scrollHeight
          );
          console.log(
            "Width:",
            Math.round(event.currentTarget.scrollLeft),
            event.currentTarget.offsetWidth,
            event.currentTarget.scrollWidth
          );
        }}
        */
      >
        {displaySection()}
      </div>
    </div>
  );
};

export default About;
