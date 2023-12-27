import { useContext } from "react";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import { StateContext } from "~/utils/ContextProvider";
import { transitionClass } from "~/utils/gradientSelector";

const GameButton = () => {
  const context = useContext(StateContext);

  return (
    <div className="w-full h-fit ">
      <button
        type="button"
        aria-label={!context.hideContent ? "Play" : "Stop"}
        className={
          "visible float-right z-10 mt-[1vmin] mr-[1vmin] text-[6vh] " +
          "active:scale-95 " +
          transitionClass
        }
        onClick={(event) => {
          event.currentTarget.blur();
          !context.hideContent
            ? context.switchToBackground()
            : context.switchToForeground();
        }}
      >
        {!context.hideContent ? (
          <BsPlayFill
            aria-hidden="true"
            className={"text-green-800 hover:text-green-600 " + transitionClass}
          />
        ) : (
          <BsStopFill
            aria-hidden="true"
            className={
              "text-red-800 hover:text-red-600 cursor-none " + transitionClass
            }
          />
        )}
      </button>
    </div>
  );
};

export default GameButton;
