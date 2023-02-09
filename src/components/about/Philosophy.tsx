import { useState } from "react";

const Philosophy = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      className={
        "grid px-[6dvmin] content-center justify-self-center gap-[4dvmin] " +
        "grid-flow-row-dense auto-rows-min lg:grid-flow-col-dense lg:auto-cols-min " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "grid grid-flow-row-dense auto-rows-min bg-image " +
          "border-[0.625vmin] border-black py-[1.5dvmin] px-[4dvmin] "
        }
      >
        <p
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[0.5dvmin] " +
            "underline underline-offset-[0.25dvmin] -indent-[0.5dvmin] " +
            "decoration-from-font font-bold "
          }
        >
          Philosophy
        </p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-[4dvmin] ">
          <div className="w-max snap-center space-y-[1.5dvmin] ">
            <div>
              <p>I started out with game&#32;</p>
              <p>design, so my approach&#32;</p>
              <p>to UI has always been a&#32;</p>
              <p>minimalist one. Some&#32;</p>
              <p>questions I like to ask&#32;</p>
              <p>myself are:&#32;</p>
            </div>
            <blockquote>
              <q>
                <span>What information is so&#32;</span>
                <br />
                <span>important it must always&#32;</span>
                <br />
                <span>be displayed?</span>
              </q>
            </blockquote>
          </div>

          <div className="w-max snap-center snap-always space-y-[1.5dvmin] ">
            <blockquote>
              <q>
                <span>What information can&#32;</span>
                <br />
                <span>be popped in to display&#32;</span>
                <br />
                <span>when needed?</span>
              </q>
            </blockquote>
            <div>
              <p>The end goal is to avoid&#32;</p>
              <p>clutter, keep it clean and&#32;</p>
              <p>simple, and not bombard&#32;</p>
              <p>the user with a lot of&#32;</p>
              <p>information or choices.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "grid grid-flow-row-dense auto-rows-min bg-image " +
          "border-[0.625vmin] border-black py-[1.5dvmin] px-[4dvmin] "
        }
      >
        <p
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[0.5dvmin] " +
            "underline underline-offset-[0.25dvmin] -indent-[0.5dvmin] " +
            "decoration-from-font font-bold "
          }
        >
          Methodology
        </p>
        <div className="w-max snap-center space-y-[1.5dvmin] ">
          <div>
            <p>I'm always looking to&#32;</p>
            <p>challenge myself and&#32;</p>
            <p>grow. My methodology&#32;</p>
            <p>is simple:&#32;</p>
          </div>
          <div>
            <p>Every few months, I pick&#32;</p>
            <p>up something new, then&#32;</p>
            <p>produce a project that&#32;</p>
            <p>applies what I've learned.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
