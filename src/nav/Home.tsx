import { useContext, useEffect, useState } from "react";
import { StateContext } from "../utils/ContextProvider";
import { BsCloudSun, BsFillMoonStarsFill } from "react-icons/bs"; //fill moon or stars or cloud or

const Home = () => {
  const context = useContext(StateContext);
  const [checked, setChecked] = useState(
    context.theme === "dark" ? true : false
  );

  useEffect(() => {
    if (checked) context.setAndSaveTheme("dark");
    else context.setAndSaveTheme("light");
  }, [checked]);

  return (
    <div
      className={
        "flex flex-col h-full min-w-full w-max " +
        "bg-gradient-to-bl from-amber-200 to-slate-200 "
      }
    >
      <div className="self-end mx-4 invisible fixed ">
        <div
          className={
            "grid border-2 border-double rounded-full w-14 h-8 m-2 p-[0.1rem] " +
            "cursor-pointer " +
            (checked
              ? "transition-all duration-75 custom-ease-out justify-end " +
                "content-center border-slate-100  bg-black "
              : "transition-all duration-75 custom-ease-out justify-start " +
                "content-center border-slate-300 bg-sky-300 ")
          }
          onClick={(event) => {
            event.currentTarget.blur();
            setChecked((prev) => !prev);
          }}
        >
          <div
            className={
              "rounded-full w-6 h-6 grid place-content-center " +
              "fill-current " +
              (checked ? "bg-sky-900 text-xs " : "bg-white text-base ")
            }
          >
            {checked ? <BsFillMoonStarsFill /> : <BsCloudSun />}
          </div>
        </div>
      </div>
      <div className="h-full grid place-content-center ">
        <div
          id="Grace Hopper Quote"
          tabIndex={0}
          className={
            "w-fit h-fit p-[8dvmin] place-self-center font-bold focus:outline-none " +
            "title text-start text-[6vmin] tracking-wider text-slate-600 -indent-[3dvmin] "
          }
        >
          <blockquote className="quote ">
            <p className="inline ">The most damaging&#32;</p>
            <p className="indent-[0.22dvmin] ">phrase in the language&#32;</p>
            <p className="inline ">
              is:&#32;
              <q className=" italic text-red-600 font-semibold ">
                <span>It's always been&#32;</span>
                <br />
                <span>done that way.</span>
              </q>
            </p>
          </blockquote>
          <span
            className={
              "text italic text-slate-700 " + "pt-[1dvmin] pl-[27.5dvmin] "
            }
          >
            - Grace Hopper
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
