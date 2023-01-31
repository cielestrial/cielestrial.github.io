import { useState } from "react";
import { aboutSections } from "../../utils/ContextProvider";

type propsType = {
  direction: "left" | "right" | "none";
  opened: aboutSections;
};

const Philosophy = (props: propsType) => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      className={
        "grid px-8 py-2 content-center justify-self-center gap-x-6 " +
        "grid-flow-col-dense auto-cols-min font-semibold " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "grid grid-flow-row-dense auto-rows-min " +
          "border-[2.5px] border-black py-3 px-6 "
        }
      >
        <p className="text-lg underline underline-offset-4 pb-2 ">Philosophy</p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-3 ">
          <div className="w-52 snap-center ">
            <p>
              I started out with game design, so my approach to UI has always
              been a minimalist one. Some questions I ask myself:
            </p>
            <br />
            <blockquote>
              <q>
                What information is so important it must ALWAYS be displayed?
              </q>
            </blockquote>
          </div>

          <div className="w-52 snap-center ">
            <blockquote>
              <q>What information can be popped in to display when needed?</q>
            </blockquote>
            <br />
            <p>
              The end goal is to avoid clutter, keep it clean and simple, and
              not bombard the user with a lot information or choices.
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          "grid grid-flow-row-dense auto-rows-min " +
          "border-[2.5px] border-black py-3 px-6 "
        }
      >
        <p className="text-lg underline underline-offset-4 pb-2 ">
          Methodology
        </p>
        <div className="w-56 snap-center ">
          <p>
            I'm always looking to challenge myself and grow. My methodology is
            simple:
          </p>
          <br />
          <p>
            Every few months, I pick up something new, then produce a project
            that applies what I've learned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
