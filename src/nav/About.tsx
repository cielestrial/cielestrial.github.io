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
  const scrollPos = useRef<HTMLDivElement>(null);

  const btnClasses =
    "w-24 h-fit py-2 title font-medium origin-bottom " +
    "drop-shadow-lg transition-all duration-75 custom-ease-out ";

  function setOpened(section: aboutSections) {
    context.aboutOpenedRef.current = section;
    setOpenedState(section);
  }

  function displaySection() {
    switch (context.aboutOpenedRef.current) {
      case "Profile":
        return <Profile direction={"none"} opened={"Profile"} />;
      case "Bio":
        return <Bio direction={"none"} opened={"Bio"} />;
      case "Philosophy":
        return <Philosophy direction={"none"} opened={"Philosophy"} />;
    }
  }

  return (
    <div className="h-full w-full overflow-clip grid grid-flow-row-dense content-start ">
      <div
        className={
          "btn-group grid grid-flow-col-dense auto-cols-min " +
          "justify-self-center py-6 sm:py-8 "
        }
      >
        <button
          className={
            btnClasses +
            (opened === "Profile"
              ? "bg-slate-400 "
              : "bg-slate-200 hover:bg-slate-300 ")
          }
          onClick={() => {
            setOpened("Profile");
            scrollPos.current?.scrollTo(0, 0);
          }}
        >
          Profile
        </button>
        <button
          className={
            btnClasses +
            (opened === "Bio"
              ? "bg-slate-400 "
              : "bg-slate-200 hover:bg-slate-300 ")
          }
          onClick={() => {
            setOpened("Bio");
            scrollPos.current?.scrollTo(0, 0);
          }}
        >
          Bio
        </button>
        <button
          className={
            btnClasses +
            (opened === "Philosophy"
              ? "bg-slate-400 "
              : "bg-slate-200 hover:bg-slate-300 ")
          }
          onClick={() => {
            setOpened("Philosophy");
            scrollPos.current?.scrollTo(0, 0);
          }}
        >
          Philosophy
        </button>
      </div>

      <div
        ref={scrollPos}
        className={"w-full grid overflow-auto scroll-smooth pb-6 sm:pb-8 "}
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
          /*
          console.log(
            Math.round(event.currentTarget.scrollTop),
            event.currentTarget.offsetHeight,
            event.currentTarget.scrollHeight
          );
          */
        }}
      >
        {displaySection()}
      </div>
    </div>
  );
};

export default About;
