import { useContext, useEffect } from "react";
import MySwitch from "~/components/home/MySwitch";
import { StateContext } from "~/utils/ContextProvider";

const Home = () => {
  const context = useContext(StateContext);
  useEffect(() => context.switchToForeground(), []);
  let seasonBG = "";

  switch (context.season) {
    case "Winter":
      seasonBG =
        "bg-gradient-to-b from-[#E1F5FF] from-60% to-[#F0FBFF]/95 to-90% ";
      break;
    case "Spring":
      seasonBG = "bg-gradient-to-bl from-amber-200 to-slate-200 ";
      break;
    default:
      console.error("Invalid season");
  }

  return (
    <div
      className={"flex flex-col h-full min-w-full w-max relative " + seasonBG}
    >
      <MySwitch />
      <div className="h-full flex flex-col place-content-center animate-fade-in ">
        <div
          id="GraceHopperQuote"
          tabIndex={0}
          className={
            "w-fit h-fit p-[8vmin] place-self-center font-bold focus:outline-none " +
            "title text-start text-[6vmin] tracking-wider text-[#4d5258] -indent-[3vmin] "
          }
        >
          <blockquote className="quote ">
            <p className="inline ">The most damaging&#32;</p>
            <p className="indent-[0.22vmin] ">phrase in the language&#32;</p>
            <p className="inline ">
              is:&#32;
              <q className=" italic text-[#96060A] font-semibold ">
                <span>It's always been&#32;</span>
                <br />
                <span>done that way.</span>
              </q>
            </p>
          </blockquote>
          <p
            className={
              "inline text italic text-[#182b38] pt-[1vmin] pl-[27.5vmin] "
            }
          >
            - Grace Hopper
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
