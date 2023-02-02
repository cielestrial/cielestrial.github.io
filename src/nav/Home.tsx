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
          onClick={() => setChecked((prev) => !prev)}
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
        <blockquote
          className={
            "w-fit h-fit p-[8vmin] place-self-center font-bold " +
            "text-start text-[6vmin] tracking-wider "
          }
        >
          <p className="title -indent-[0.22vmin] text-slate-600 ">
            The most damaging&#32;
          </p>
          <p className="title text-slate-600 "> phrase in the language&#32;</p>
          <p className="title text-slate-600 ">
            is:&#32;
            <q className="italic text-red-600 font-semibold ">
              <span>It's always been&#32;</span>
              <br />
              <span>done that way.</span>
            </q>
          </p>

          <p className="italic pt-[1vmin] pl-[27.5vmin] text-slate-800 ">
            - Grace Hopper
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Home;
