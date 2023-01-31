import { useState } from "react";
import myPic from "../../assets/general/profile2.jpg";
import { aboutSections } from "../../utils/ContextProvider";

type propsType = {
  direction: "left" | "right" | "none";
  opened: aboutSections;
};

const Bio = (props: propsType) => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      className={
        "grid px-8 py-2 content-center justify-self-center gap-x-6 " +
        "grid-flow-col-dense auto-cols-min font-semibold sm:gap-x-9 " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "place-self-center invisible w-fit " +
          "transition-all duration-75 custom-ease-out hover:visible "
        }
      >
        <div
          className={
            "grid border-solid border-sky-300 border-4 rounded-full overflow-clip " +
            "w-72 aspect-square place-self-center place-content-center drop-shadow-xl "
          }
        >
          <img src={myPic} alt="Me" className="w-full rotate-12 visible " />
        </div>
        <p
          className={
            "text-center w-fit mx-auto px-3 " + "bg-sky-300 text-current "
          }
        >
          My dad and I
        </p>
      </div>
      <div
        className={
          "grid grid-flow-row-dense auto-rows-min " +
          "border-[2.5px] border-black py-3 px-6 "
        }
      >
        <p className="text-lg underline underline-offset-4 pb-1.5 ">About Me</p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-3 ">
          <div className="w-52">
            <p>
              A programmer interested in general software development, mobile
              application development, full-stack web development, and game
              development.
            </p>
            <br />
            <p>
              Besides programming languages, I am interested in areas such as:
              time-complexity,
            </p>
          </div>

          <div className="w-52">
            <p>
              big-data algorithms, vectors, set theory, propositional logic and
              first-order logic.
            </p>
            <br />
            <p>
              I also enjoy participating in hackathons, game jams, and
              programming contests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
