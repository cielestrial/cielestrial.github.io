import { useContext, useEffect, useState } from "react";
import { StateContext } from "../functions/ContextProvider";
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
    <div className="flex flex-col h-full bg-gradient-to-bl from-yellow-200 to-slate-200 ">
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
      <div className="h-full grid ">
        <blockquote
          className={
            "w-96 py-2 place-self-center text-start text-2xl font-bold "
          }
        >
          <p className="title -indent-0.5 text-slate-600 tracking-widest ">
            The most damaging phrase in the language is&#58;&#32;
            <q className="italic text-red-600 font-semibold ">
              <span>It&#39;s always been done that way&#46;</span>
            </q>
          </p>

          <p className="text-end italic pr-4 text-slate-800 tracking-wider ">
            &#45; Grace Hopper
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Home;