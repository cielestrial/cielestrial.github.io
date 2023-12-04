import { useContext, useEffect, useRef, useState } from "react";
import { BsCloudSun, BsFillMoonStarsFill } from "react-icons/bs";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { StateContext } from "~/utils/ContextProvider";
import { myEndListener } from "~/utils/HelperFunctions";

const MySwitch = () => {
  const context = useContext(StateContext);
  const [checked, setChecked] = useState(
    context.theme === "dark" ? true : false
  );

  const moonRef = useRef<HTMLElement | null>(null);
  const sunRef = useRef<HTMLElement | null>(null);
  const nodeRef = checked ? moonRef : sunRef;

  useEffect(() => {
    if (checked) context.setAndSaveTheme("dark");
    else context.setAndSaveTheme("light");
  }, [checked]);

  function toggle() {
    setChecked((prev) => !prev);
  }

  function keyboardHandler(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      if (!event.repeat) toggle();
      event.preventDefault();
    }
  }

  const outer =
    "relative flex border-4 box-content rounded-full w-14 h-8 " +
    "transition bg-sky-300 border-gray-600 " +
    "dark:bg-gray-900 dark:border-gray-400 ";

  const inner =
    "rounded-full box-content w-6 h-6 flex self-center my-auto " +
    "border-2 transition border-gray-700 translate-x-[0.1rem] " +
    "dark:border-gray-300 dark:translate-x-[1.65rem] " +
    "bg-white dark:bg-sky-700 fill-current text-base dark:text-xs " +
    "text-black/90 dark:text-white/90 ";

  return (
    <div className="m-4 absolute top-0 right-0 z-10 invisible ">
      <div
        role="switch"
        tabIndex={0}
        aria-label="Dark Theme"
        aria-checked={checked}
        className={outer}
        onClick={toggle}
        onKeyDown={keyboardHandler}
      >
        <div className={inner}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={checked ? "Moon" : "Sun"}
              nodeRef={nodeRef}
              addEndListener={(done: () => void) =>
                nodeRef.current?.addEventListener("transitionend", done, false)
              }
              classNames="switch"
            >
              <span ref={nodeRef} className="m-auto">
                {checked ? <BsFillMoonStarsFill /> : <BsCloudSun />}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  );
};
export default MySwitch;
